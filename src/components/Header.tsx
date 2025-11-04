export default function Header() {
  return (
    <header className="border-b border-night/60">
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-hero-gradient" />
          <span className="text-lg font-bold">Note-It</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#features" className="hover:text-ink">Fonctionnalités</a>
          <a href="#preview" className="hover:text-ink">Aperçu</a>
          <a href="#cta" className="hover:text-ink">Accès bêta</a>
        </nav>
        <a href="#waitlist" className="btn">Rejoindre la bêta</a>
      </div>
    </header>
  );
}
