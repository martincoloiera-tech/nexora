import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Sobre Nexora
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Somos una agencia digital que combina desarrollo de software,
            inteligencia artificial y automatización para ayudar a negocios a
            operar de forma más eficiente y crecer con una presencia digital
            sólida.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Trabajamos como un equipo extendido: entendemos el problema de
            negocio antes de escribir una línea de código, y medimos cada
            proyecto por el impacto que genera, no solo por lo que entregamos.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm font-medium">Enfoque en producto</p>
              <p className="mt-2 text-sm text-muted">
                Cada proyecto se piensa como un producto, no como una entrega
                puntual.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm font-medium">Stack moderno</p>
              <p className="mt-2 text-sm text-muted">
                Next.js, TypeScript e integraciones de IA aplicadas con
                criterio.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 col-span-2">
              <p className="text-sm font-medium">Comunicación directa</p>
              <p className="mt-2 text-sm text-muted">
                Hablás con quien construye el proyecto, sin capas
                intermedias.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
