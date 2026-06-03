const features = [
  'Industry-focused technical expertise',
  'Professional communication from start to finish',
  'Engineering expertise across design and analysis',
  'Practical and cost-effective solutions',
  'Clear reports and actionable recommendations',
  'Flexible support for startups, manufacturers, and industrial clients',
  'Clear communication and project transparency',
  'Cost-effective support for startups and established firms',
  'Practical solutions aligned with business goals',
  'Fast support and reliable service',
  'Scalable systems for small and growing teams',
  'Clear communication and transparent delivery',
  'Strong focus on security, uptime, and performance',
]

const icons = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  <path key="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  <path key="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Why Work With Us
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:bg-gradient-to-br hover:from-white hover:to-accent/[0.04] hover:shadow-xl hover:shadow-accent/10 lg:p-9"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/0 transition-all duration-500 group-hover:bg-accent/10" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-light shadow-md shadow-navy-900/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/30">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icons[index % icons.length]}
                  </svg>
                </div>
                <span className="text-sm font-bold tabular-nums leading-none text-navy-300 transition-colors duration-300 group-hover:text-accent/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <p className="relative mt-6 text-lg font-semibold leading-[1.65] text-navy-900 transition-colors duration-300 group-hover:text-navy-800 sm:text-base sm:leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium text-navy-600">
          Our goal is to help clients make better engineering decisions with confidence.
        </p>
      </div>
    </section>
  )
}
