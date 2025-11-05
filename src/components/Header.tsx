import Image from "next/image";

export default function Header() {
  return (
      <header className="border-b border-night/60">
        <div className="container flex items-center justify-between py-5">
          {/* Logo TrueBPM */}
          <div className="flex items-center gap-3">
            <Image
                src="/truebpm_logo.svg" // place ton SVG ici : /public/truebpm_logo.svg
                alt="TrueBPM Logo"
                width={140}
                height={40}
                priority
                className="select-none"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            <a href="#features" className="hover:text-ink transition-colors">
              Fonctionnalités
            </a>
            <a href="#preview" className="hover:text-ink transition-colors">
              Aperçu
            </a>
            <a href="#cta" className="hover:text-ink transition-colors">
              Accès bêta
            </a>
          </nav>

          {/* Bouton principal */}
          <a
              href="#footer"
              className="btn text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Rejoindre la bêta
          </a>
        </div>
      </header>
  );
}