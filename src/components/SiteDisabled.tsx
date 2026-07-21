// Čierna stránka zobrazená keď je web vypnutý (siteEnabled === false).
export default function SiteDisabled() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl">
          Stránka nie je k dispozícii
        </h1>
        <p className="mt-4 text-white/50">
          Táto webová stránka je momentálne nedostupná.
        </p>
      </div>
    </div>
  );
}
