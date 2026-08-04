import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { ArrowRightIcon } from "./ui/icons";
import { CONTACT_EMAIL } from "@/lib/content";

export default function CTA() {
  return (
    <section id="cta" className="py-24 sm:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]"
          />
          <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Listo para escalar tu negocio?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            Contanos tu proyecto y te ayudamos a definir el mejor camino para
            llevarlo adelante.
          </p>
          <div className="relative mt-8 flex justify-center">
            <Button href={`mailto:${CONTACT_EMAIL}`}>
              Escribinos
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
