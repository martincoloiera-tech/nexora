import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { PROCESS_STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-muted">
            Un proceso simple y transparente, de punta a punta.
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 75}>
              <li className="h-full rounded-2xl border border-border bg-surface p-8">
                <span className="text-sm font-mono text-muted">{step.number}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
