export default function Footer() {
  return (
    <footer className="border-t border-night/60">
      <div className="container py-8 text-sm text-muted flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Note-It. Tous droits réservés.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-ink">Mentions légales</a>
          <a href="#" className="hover:text-ink">Contact</a>
        </div>
      </div>
    </footer>
  );
}
