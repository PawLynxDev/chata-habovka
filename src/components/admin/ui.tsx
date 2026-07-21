"use client";

import type { ReactNode } from "react";
import { ICON_KEYS } from "@/lib/icons";

export const inputCls =
  "w-full rounded-lg border border-cream-dark bg-white px-3 py-2 text-charcoal text-sm focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition";

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-charcoal mb-1">
        {label}
      </span>
      {children}
      {hint && (
        <span className="block text-xs text-charcoal-light/70 mt-1">{hint}</span>
      )}
    </label>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={inputCls}
    />
  );
}

export function TextArea({
  value,
  onChange,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className={`${inputCls} resize-y`}
    />
  );
}

export function NumberInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <input
      type="number"
      value={Number.isFinite(value) ? value : 0}
      onChange={(e) => onChange(Number(e.target.value))}
      className={inputCls}
    />
  );
}

export function IconSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={inputCls}
    >
      {ICON_KEYS.map((k) => (
        <option key={k} value={k}>
          {k}
        </option>
      ))}
    </select>
  );
}

/** Karta sekcie v admine. */
export function Card({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-cream-dark p-5 shadow-sm">
      {title && (
        <h3 className="font-serif text-xl text-charcoal mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}
