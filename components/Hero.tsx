import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { ArrowRightIcon } from "./ui/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-white/10 blur-[140px]"
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted">
            Agencia digital todo en uno
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight sm:text-7xl">
            Nexora
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Desarrollo Web · Inteligencia Artificial · Automatizaciones · Marketing Digital
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="#cta">
              Comenzar
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href="#services" variant="secondary">
              Ver servicios
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
