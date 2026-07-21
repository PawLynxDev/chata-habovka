"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/navigation";
import {
  Image as ImageIcon,
  Euro,
  Type,
  ShieldAlert,
  Save,
  LogOut,
  ExternalLink,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import type { SiteContent } from "@/lib/content-types";
import PhotosTab from "./PhotosTab";
import PricingTab from "./PricingTab";
import TextsTab from "./TextsTab";
import DangerTab from "./DangerTab";

type TabKey = "fotky" | "cennik" | "texty" | "danger";

const TABS = [
  { key: "fotky", label: "Fotky", icon: ImageIcon },
  { key: "cennik", label: "Cenník", icon: Euro },
  { key: "texty", label: "Texty", icon: Type },
  { key: "danger", label: "Vypnutie webu", icon: ShieldAlert },
] as const;

export default function AdminApp() {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent | null>(null);
  const [tab, setTab] = useState<TabKey>("fotky");
  const [loadError, setLoadError] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    fetch("/api/content")
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/login");
          return null;
        }
        if (!res.ok) throw new Error("load failed");
        return res.json();
      })
      .then((data) => {
        if (data) setContent(data);
      })
      .catch(() => setLoadError("Nepodarilo sa načítať obsah."));
  }, [router]);

  // Bezpečný setter pre taby (stav je SiteContent | null, taby pracujú s SiteContent).
  const updateContent: Dispatch<SetStateAction<SiteContent>> = (action) => {
    setContent((prev) => {
      if (prev === null) return prev;
      return typeof action === "function"
        ? (action as (p: SiteContent) => SiteContent)(prev)
        : action;
    });
  };

  async function save() {
    if (!content) return;
    setSaving(true);
    setSaveMsg("");
    setSaveError("");
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setContent(data);
        setSaveMsg("Uložené ✓");
        setTimeout(() => setSaveMsg(""), 3000);
      } else {
        setSaveError(data.error || "Uloženie zlyhalo");
      }
    } catch {
      setSaveError("Chyba spojenia.");
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  if (loadError) {
    return <div className="p-8 text-red-600">{loadError}</div>;
  }
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <Loader2 className="w-6 h-6 animate-spin text-forest" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="sticky top-0 z-20 bg-white border-b border-cream-dark">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <h1 className="font-serif text-xl text-charcoal whitespace-nowrap">
            Správa webu
          </h1>
          <div className="flex items-center gap-2">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-charcoal-light hover:text-forest transition px-3 py-2"
            >
              <ExternalLink className="w-4 h-4" /> Zobraziť web
            </a>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-1.5 text-sm text-charcoal-light hover:text-charcoal transition px-3 py-2 cursor-pointer"
            >
              <LogOut className="w-4 h-4" /> Odhlásiť
            </button>
            <button
              type="button"
              onClick={save}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-full bg-forest text-white px-5 py-2 text-sm font-medium transition hover:bg-forest-light disabled:opacity-50 cursor-pointer"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              Uložiť zmeny
            </button>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-2 flex gap-1 overflow-x-auto">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition whitespace-nowrap cursor-pointer ${
                  active
                    ? "border-forest text-forest"
                    : "border-transparent text-charcoal-light hover:text-charcoal"
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </div>
      </header>

      {(saveMsg || saveError) && (
        <div className="max-w-5xl mx-auto px-4 pt-4">
          {saveMsg && (
            <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 text-green-800 px-4 py-2 text-sm">
              <CheckCircle2 className="w-4 h-4" />
              {saveMsg}
            </div>
          )}
          {saveError && (
            <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-2 text-sm">
              {saveError}
            </div>
          )}
        </div>
      )}

      <main className="max-w-5xl mx-auto px-4 py-6">
        {tab === "fotky" && (
          <PhotosTab content={content} setContent={updateContent} />
        )}
        {tab === "cennik" && (
          <PricingTab content={content} setContent={updateContent} />
        )}
        {tab === "texty" && (
          <TextsTab content={content} setContent={updateContent} />
        )}
        {tab === "danger" && (
          <DangerTab content={content} setContent={updateContent} />
        )}
      </main>
    </div>
  );
}
