const categories = [
  { label: "Čistota", score: 10 },
  { label: "Vybavenie", score: 10 },
  { label: "Služby", score: 10 },
  { label: "Personál", score: 10 },
  { label: "Poloha", score: 9.9 },
  { label: "Aktivity a atrakcie", score: 10 },
  { label: "Pomer ceny a kvality", score: 10 },
] as const;

export default function RatingBadge() {
  return (
    <div className="bg-cream rounded-2xl border border-cream-dark p-6 sm:p-8 max-w-md w-full">
      {/* Overall Score */}
      <div className="text-center mb-6">
        <p className="font-serif text-lg font-semibold text-charcoal mb-1">
          Výnimočné
        </p>
        <span className="font-serif text-5xl font-bold text-charcoal">
          10
        </span>
        <span className="font-serif text-2xl text-charcoal/50 ml-1">
          /10
        </span>
        <p className="text-sm font-sans text-charcoal/60 mt-1">
          7 recenzií
        </p>
      </div>

      {/* Category Bars */}
      <div className="space-y-3">
        {categories.map(({ label, score }) => (
          <div key={label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-sans text-charcoal/70">
                {label}
              </span>
              <span className="text-sm font-sans font-medium text-charcoal">
                {score}/10
              </span>
            </div>
            <div className="w-full h-2 bg-cream-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-500"
                style={{ width: `${(score / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Source */}
      <p className="text-xs text-charcoal/40 text-center mt-6 font-sans">
        megaubytovanie.sk
      </p>
    </div>
  );
}
