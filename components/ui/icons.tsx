import type { SVGProps } from "react";

// Minimal hand-drawn line icons (24x24, stroke-based) so the project
// doesn't depend on an icon library for a handful of glyphs.

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8 4.5 12 9 16M15 8l4.5 4-4.5 4M13.5 6l-3 12" />
    </svg>
  );
}

export function BrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8.25" strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75V20.25M8 8.5c0 1.1.9 2 2 2M16 8.5c0 1.1-.9 2-2 2M8 15.5c0-1.1.9-2 2-2M16 15.5c0-1.1-.9-2-2-2" />
    </svg>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5L13 3Z" />
    </svg>
  );
}

export function MegaphoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5v3a1.5 1.5 0 0 0 1.5 1.5H6l3.5 4.5v-15L6 8.5H4.5A1.5 1.5 0 0 0 3 10.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 8.25c1.5 1.1 1.5 6.4 0 7.5M17.25 5.5c2.8 2.9 2.8 10.1 0 13" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 5 5 10-11" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 5 6v5.5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6l-7-2.5Z" />
    </svg>
  );
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M15.5 6.75a2.75 2.75 0 1 1 0 5.5M17.5 14.25c2.3.4 3.5 1.9 3.5 4.25" />
    </svg>
  );
}

export function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}
