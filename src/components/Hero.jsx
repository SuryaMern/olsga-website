export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />

      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-navy-600/20 blur-3xl animate-pulse-glow" />

      <div className="absolute top-1/4 right-0 hidden h-px w-1/3 bg-gradient-to-l from-accent/50 to-transparent lg:block" />
      <div className="absolute bottom-1/3 left-0 hidden h-px w-1/4 bg-gradient-to-r from-accent/30 to-transparent lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-light">
                Engineering Excellence
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Precision Valve Design &{' '}
              <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                Finite Element Analysis
              </span>{' '}
              Engineering Services and Solutions
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Specialized engineering consultancy delivering reliable valve solutions and advanced FEA
              simulations for industrial applications under extreme conditions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-light hover:shadow-accent/50"
              >
                Explore Services
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {[
                { value: 'API 600', label: 'Standards' },
                { value: 'FEA', label: 'Simulation' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-sm" />

              <svg viewBox="0 0 400 400" className="relative h-full w-full p-8" fill="none">
                <circle cx="200" cy="200" r="160" stroke="rgba(59,130,246,0.2)" strokeWidth="1" strokeDasharray="8 4" />
                <circle cx="200" cy="200" r="120" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
                <circle cx="200" cy="200" r="80" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />

                <rect x="140" y="170" width="120" height="60" rx="4" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.5)" strokeWidth="2" />
                <rect x="110" y="185" width="30" height="30" rx="2" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
                <rect x="260" y="185" width="30" height="30" rx="2" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="15" fill="rgba(59,130,246,0.3)" stroke="rgba(96,165,250,0.8)" strokeWidth="2" />

                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                  const rad = (angle * Math.PI) / 180
                  const x1 = 200 + 80 * Math.cos(rad)
                  const y1 = 200 + 80 * Math.sin(rad)
                  const x2 = 200 + 160 * Math.cos(rad)
                  const y2 = 200 + 160 * Math.sin(rad)
                  return (
                    <line
                      key={angle}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(59,130,246,0.15)"
                      strokeWidth="1"
                    />
                  )
                })}

                <text x="200" y="340" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="2">
                  VALVE ENGINEERING
                </text>
              </svg>

              <div className="absolute -top-4 -right-4 rounded-lg border border-accent/30 bg-navy-800/90 px-4 py-3 backdrop-blur-sm">
                <div className="text-xs text-white/50">Pressure Rating</div>
                <div className="text-lg font-bold text-accent-light">Class 2500</div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-lg border border-accent/30 bg-navy-800/90 px-4 py-3 backdrop-blur-sm">
                <div className="text-xs text-white/50">Analysis Type</div>
                <div className="text-lg font-bold text-accent-light">Nonlinear FEA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
