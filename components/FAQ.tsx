import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { ChevronDownIcon } from "./ui/icons";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-surface">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 50}>
              <details className="group px-6 py-5 sm:px-8 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium marker:content-none">
                  {faq.question}
                  <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
