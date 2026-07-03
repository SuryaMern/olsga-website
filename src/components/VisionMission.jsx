const missionPillars = [
  {
    title: 'Precision Engineering',
    description:
      'Delivering 95% all Engineering activities + accurate FEA simulations that prevent costly failures before manufacturing',
  },
  {
    title: 'Affordable Access',
    description: 'Providing 30–50% cost savings compared to traditional consultancies',
  },
  {
    title: 'Fast Response',
    description:
      'Ensuring 2–3 week turnaround for standard simulation projects and 1–2 week for all Engineering activities',
  },
  {
    title: 'Dual Expertise',
    description: 'Offering unique engineering + IT combination for complete business solutions',
  },
  {
    title: 'Local Advantage',
    description: 'Leveraging India-based expertise for cost-effective global service',
  },
  {
    title: 'Continuous Learning',
    description: 'Adapting rapidly to new tools, AI-driven design, and industry best practices',
  },
]

const coreValues = [
  {
    title: 'Precision & Quality',
    description: 'Excellence in every simulation, design, and code deployment',
  },
  {
    title: 'Accessibility',
    description: 'Making enterprise engineering affordable for SMEs',
  },
  {
    title: 'Safety First',
    description: 'Preventing failures before they happen through predictive analysis',
  },
  {
    title: 'Innovation',
    description: 'Embracing AI-driven tools and continuous self-learning',
  },
  {
    title: 'Transparency',
    description: 'Open communication, no hidden costs, honest timelines',
  },
  {
    title: 'Client Success',
    description: 'Your project success is our reputation',
  },
  {
    title: 'Integrity',
    description: 'Ethical practices, NDA-protected confidentiality, reliable delivery',
  },
  {
    title: 'Collaboration',
    description: 'Building partnerships, not just transactions',
  },
]

export default function VisionMission() {
  return (
    <section id="vision-mission" className="relative bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Our Purpose</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Vision &amp; Mission
          </h2>
          <p className="mt-4 text-lg font-medium italic text-navy-600">
            &ldquo;Engineering Your Success, Digitally Transforming Your Business&rdquo;
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm lg:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-navy-900">Vision Statement</h3>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              To be India&apos;s most accessible engineering activities &amp; simulation and digital solutions
              partner, transforming how small and mid-sized businesses approach mechanical design, valve
              engineering, and IT infrastructure through affordable precision engineering and innovative
              technology.
            </p>
          </div>

          <div className="rounded-2xl border border-navy-900/10 bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white shadow-xl lg:p-10">
            <h3 className="text-xl font-bold">Mission Statement</h3>
            <p className="mt-6 text-sm leading-relaxed text-white/75">
              Our mission is to deliver exceptional engineering activities &amp; simulation and IT consultancy
              services by combining advanced FEA analysis, optimized mechanical design for oil &amp; gas valves,
              and comprehensive web/IT solutions. We empower small and mid-sized businesses to achieve
              enterprise-level quality at startup-friendly prices.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              We prioritize client success, safety, quality, and transparency while fostering lasting
              partnerships built on integrity and mutual growth.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-navy-900">How We Deliver</h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {missionPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/10"
              >
                <span className="text-sm font-bold tabular-nums text-navy-300 group-hover:text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-3 font-semibold text-navy-900">{pillar.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">What We Stand For</span>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-navy-900">Core Values</h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/35 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-sm font-bold text-accent-light">
                  {index + 1}
                </div>
                <h4 className="mt-4 font-semibold text-navy-900">{value.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
