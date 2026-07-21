"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Prihlásenie zlyhalo");
      }
    } catch {
      setError("Chyba spojenia. Skúste znova.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-forest/10 p-4 rounded-full mb-4">
            <Lock className="w-8 h-8 text-forest" />
          </div>
          <h1 className="font-serif text-3xl text-charcoal">Správa webu</h1>
          <p className="text-charcoal-light text-sm mt-2">
            Prihláste sa pre prístup do administrácie
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-2xl shadow-sm border border-cream-dark p-8"
        >
          <label
            htmlFor="password"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            Heslo
          </label>
          <input
            id="password"
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-cream-dark px-4 py-3 text-charcoal focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition"
            placeholder="••••••••"
          />

          {error && (
            <p className="text-red-600 text-sm mt-3" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest text-white px-6 py-3 font-medium transition hover:bg-forest-light disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Prihlasujem…" : "Prihlásiť sa"}
          </button>
        </form>
      </div>
    </div>
  );
}
