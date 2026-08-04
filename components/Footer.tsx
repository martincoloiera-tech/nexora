import Container from "./ui/Container";
import { NAV_LINKS } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <span className="text-sm font-semibold tracking-tight">Nexora</span>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Enlaces del footer">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted">© {year} Nexora. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}
