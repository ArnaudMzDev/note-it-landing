export default function Hero() {
  return (
      <section className="relative overflow-hidden">
        {/* calque décoratif : ne capte plus les clics */}
        <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                  'radial-gradient(600px 400px at 20% 20%, #9B5CFF22, transparent), radial-gradient(600px 400px at 80% 30%, #5E17EB22, transparent)'
            }}
        />
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="badge mb-4">Nouveau • Bêta privée</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Ton <span className="text-primary">carnet musical</span> social.
            </h1>
            <p className="mt-4 text-lg text-muted">
              Découvre et partage ta passion pour la musique. Une expérience mobile élégante, pensée pour la communauté.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#footer" className="btn text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition">
                Rejoindre la bêta
              </a>
              <a href="#preview" className="btn !bg-night hover:bg-night/80 border border-night">Voir l’aperçu</a>
            </div>
            <p className="mt-3 text-sm text-muted">Gratuit au lancement. iOS & Android.</p>
          </div>
        </div>
      </section>
  );
}