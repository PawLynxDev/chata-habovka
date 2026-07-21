"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { AlertTriangle, Power, Loader2, CheckCircle2 } from "lucide-react";
import type { SiteContent } from "@/lib/content-types";
import { inputCls } from "./ui";

type Setter = Dispatch<SetStateAction<SiteContent>>;

const CONFIRM_PHRASE = "VYPNÚŤ";

export default function DangerTab({
  content,
  setContent,
}: {
  content: SiteContent;
  setContent: Setter;
}) {
  const enabled = content.siteEnabled;
  const [password, setPassword] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  async function disable() {
    setLoading(true);
    setError("");
    setMsg("");
    try {
      const res = await fetch("/api/site/disable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, confirmText }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setContent((c) => ({ ...c, siteEnabled: false }));
        setMsg("Web bol vypnutý. Návštevníci vidia čiernu stránku.");
        setPassword("");
        setConfirmText("");
      } else {
        setError(data.error || "Vypnutie zlyhalo");
      }
    } catch {
      setError("Chyba spojenia.");
    } finally {
      setLoading(false);
    }
  }

  async function enable() {
    setLoading(true);
    setError("");
    setMsg("");
    try {
      const res = await fetch("/api/site/enable", { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setContent((c) => ({ ...c, siteEnabled: true }));
        setMsg("Web bol znova zapnutý.");
      } else {
        setError(data.error || "Zapnutie zlyhalo");
      }
    } catch {
      setError("Chyba spojenia.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-cream-dark p-5">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex h-3 w-3 rounded-full ${
              enabled ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <p className="text-charcoal font-medium">
            Stav webu:{" "}
            {enabled ? "Zapnutý (verejne dostupný)" : "Vypnutý (nedostupný)"}
          </p>
        </div>
      </div>

      {msg && (
        <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">
          <CheckCircle2 className="w-4 h-4" />
          {msg}
        </div>
      )}

      {enabled ? (
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 text-red-700 mb-3">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-serif text-xl">Nebezpečná zóna – vypnúť web</h3>
          </div>
          <p className="text-sm text-charcoal-light mb-4">
            Web sa stmaví na čierno a návštevníci uvidia{" "}
            {"„Stránka nie je k dispozícii"}. Vy sa stále viete prihlásiť a web
            kedykoľvek znova zapnúť. Pre potvrdenie zadajte heslo a napíšte
            slovo <strong>{CONFIRM_PHRASE}</strong>.
          </p>
          <div className="space-y-3 max-w-sm">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Vaše heslo"
              className={inputCls}
            />
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder={`Napíšte ${CONFIRM_PHRASE}`}
              className={inputCls}
            />
            <button
              type="button"
              onClick={disable}
              disabled={loading || !password || confirmText !== CONFIRM_PHRASE}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 text-white px-6 py-3 font-medium transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Power className="w-4 h-4" />
              )}
              Vypnúť web
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border-2 border-cream-dark rounded-2xl p-5">
          <h3 className="font-serif text-xl text-charcoal mb-2">
            Znova zapnúť web
          </h3>
          <p className="text-sm text-charcoal-light mb-4">
            Web je momentálne vypnutý. Kliknutím ho znova sprístupníte
            návštevníkom.
          </p>
          <button
            type="button"
            onClick={enable}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-forest text-white px-6 py-3 font-medium transition hover:bg-forest-light disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Power className="w-4 h-4" />
            )}
            Znova zapnúť web
          </button>
        </div>
      )}

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
}
