import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { CASES } from "@/lib/content";

export default function Cases() {
  return (
    <section id="cases" className="py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Lo que construimos
          </h2>
          <p className="mt-4 text-muted">
            Tipos de proyectos en los que solemos trabajar.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CASES.map((item, index) => (
            <Reveal key={item.title} delay={index * 75}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-white/30">
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                />
                <h3 className="relative text-lg font-semibold">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
