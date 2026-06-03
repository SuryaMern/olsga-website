import { Fragment } from 'react'

const steps = [
  {
    title: 'Understand your business or technical challenge',
    description:
      'We align on your goals, constraints, and success criteria before any technical work begins.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
  },
  {
    title: 'Review requirements, drawings, data, or workflows',
    description:
      'We assess specifications, CAD, operational data, and existing workflows to define scope.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: 'Develop an engineering or automation solution',
    description:
      'We propose practical design, automation, or consultancy approaches tailored to your needs.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
  {
    title: 'Test, refine, and document the result',
    description:
      'We validate outcomes through iteration, verification, and clear technical documentation.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
  },
  {
    title: 'Perform the necessary analysis or design work',
    description:
      'We execute FEA, simulation, detailed design, and engineering analysis to required standards.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    ),
  },
  {
    title: 'Share results and recommendations',
    description:
      'We deliver actionable reports, findings, and guidance your team can implement with confidence.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
  },
  {
    title: 'Support implementation and follow-up if needed',
    description:
      'We remain available for deployment support, refinements, and follow-up throughout your project.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
  },
]

const rowOne = steps.slice(0, 4)
const rowTwo = steps.slice(4, 7)

function FlowArrow() {
  return (
    <div className="hidden shrink-0 items-center justify-center px-1 lg:flex" aria-hidden="true">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
        <svg className="h-4 w-4 text-accent/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

function ProcessCard({ step, stepNumber }) {
  return (
    <article className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-navy-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-accent/35 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-accent/10 lg:min-h-[300px] lg:p-7">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-all duration-500 group-hover:bg-accent/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <span className="inline-flex h-8 min-w-[2rem] items-center justify-center rounded-lg border border-accent/25 bg-accent/10 px-2 text-xs font-bold tabular-nums text-accent-light">
          {String(stepNumber).padStart(2, '0')}
        </span>
        <span className="text-[4.5rem] font-bold leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-accent/[0.08]">
          {stepNumber}
        </span>
      </div>

      <div className="relative mt-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-navy-800/60 text-accent-light ring-1 ring-accent/20 transition-all duration-300 group-hover:scale-105 group-hover:border-accent/30 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/25">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {step.icon}
        </svg>
      </div>

      <h3 className="relative mt-5 flex-1 text-base font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-accent-light">
        {step.title}
      </h3>

      <p className="relative mt-3 text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/65">
        {step.description}
      </p>
    </article>
  )
}

function ProcessRow({ rowSteps, startIndex, showArrows }) {
  return (
    <div className="flex items-stretch">
      {rowSteps.map((step, index) => (
        <Fragment key={step.title}>
          <div className="flex min-w-0 flex-1">
            <ProcessCard step={step} stepNumber={startIndex + index + 1} />
          </div>
          {showArrows && index < rowSteps.length - 1 && <FlowArrow />}
        </Fragment>
      ))}
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-navy-600/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">Our Process</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">How We Work</h2>
          <p className="mt-4 text-lg text-white/50">
            A clear, collaborative workflow from discovery through delivery — built for engineering and
            technology projects alike.
          </p>
        </div>

        {/* Mobile & tablet: stacked cards */}
        <div className="mt-14 flex flex-col gap-5 lg:hidden">
          {steps.map((step, index) => (
            <ProcessCard key={step.title} step={step} stepNumber={index + 1} />
          ))}
        </div>

        {/* Desktop: 4 + 3 grid with flow arrows */}
        <div className="mt-14 hidden flex-col gap-8 lg:flex">
          <ProcessRow rowSteps={rowOne} startIndex={0} showArrows />

          <div className="flex justify-center" aria-hidden="true">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <svg className="h-5 w-5 rotate-90 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[calc(75%-1.5rem)]">
            <ProcessRow rowSteps={rowTwo} startIndex={4} showArrows />
          </div>
        </div>
      </div>
    </section>
  )
}
