import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { CheckIcon, ShieldIcon, TargetIcon, UsersIcon } from "./ui/icons";
import { BENEFITS } from "@/lib/content";

const ICONS = {
  target: TargetIcon,
  shield: ShieldIcon,
  users: UsersIcon,
  check: CheckIcon,
} as const;

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Por qué Nexora
          </h2>
          <p className="mt-4 text-muted">
            Lo que nos diferencia a la hora de llevar un proyecto adelante.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {BENEFITS.map((benefit, index) => {
            const Icon = ICONS[benefit.icon];
            return (
              <Reveal key={benefit.title} delay={index * 75} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {benefit.description}
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
