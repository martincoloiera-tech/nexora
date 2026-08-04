import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { BoltIcon, BrainIcon, CodeIcon, MegaphoneIcon } from "./ui/icons";
import { SERVICES } from "@/lib/content";

const ICONS = {
  code: CodeIcon,
  brain: BrainIcon,
  bolt: BoltIcon,
  megaphone: MegaphoneIcon,
} as const;

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Qué hacemos
          </h2>
          <p className="mt-4 text-muted">
            Cuatro disciplinas que combinamos según lo que tu negocio necesite.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={index * 75}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/30">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-white/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
