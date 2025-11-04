export default function Preview() {
  return (
    <section id="preview" className="container py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Aperçu de l’app</h2>
          <p className="text-muted mt-2">Un design moderne inspiré de Spotify, avec une touche violette unique. Navigation simple, critique rapide, partage instantané.</p>
          <ul className="mt-6 space-y-2 text-muted list-disc pl-5">
            <li>Home avec l’activité de tes amis</li>
            <li>Fiches albums élégantes</li>
            <li>Profil avec tops & récap</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-80 rounded-3xl bg-hero-gradient opacity-90" />
          <div className="h-80 rounded-3xl bg-night border border-night" />
          <div className="h-80 rounded-3xl bg-night border border-night" />
          <div className="h-80 rounded-3xl bg-hero-gradient opacity-90" />
        </div>
      </div>
    </section>
  );
}
