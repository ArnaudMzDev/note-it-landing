const items = [
  { title: "Noter & critiquer", desc: "Donne une note ★ et écris une critique courte ou longue pour chaque album." },
  { title: "Feed social", desc: "Suis tes amis et découvre ce qu’ils écoutent en temps réel." },
  { title: "Découverte authentique", desc: "Recommandations basées sur les goûts de ta communauté, pas un algorithme opaque." },
  { title: "Intégration Spotify", desc: "Recherche instantanée d’albums & artistes via l’API Spotify." },
];

export default function Features() {
  return (
    <section id="features" className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold">Fonctionnalités clés</h2>
      <p className="text-muted mt-2 max-w-2xl">Tout ce qu’il faut pour transformer ton écoute en conversation.</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card">
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="text-muted mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
