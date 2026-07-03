import { LogoMark } from './Logo'

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

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="animate-fade-in-up lg:max-w-xl xl:max-w-2xl lg:py-2 xl:pr-6">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-light">
                SMAFT Technology Solutions
              </span>
            </div>

            <h1 className="max-w-[16.5em] text-[2.35rem] font-extrabold leading-[1.15] tracking-tight text-pretty text-white sm:max-w-none sm:text-[2.75rem] sm:leading-[1.1] md:text-6xl lg:text-[3.75rem] lg:leading-[1.08] xl:text-[4.125rem]">
              <span className="block sm:inline">Engineering Services and Consultancy for </span>
              <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent sm:inline">
                Reliable &amp; Smarter{' '}
              </span>
              <span className="block sm:inline">Industrial Solutions</span>
            </h1>

            <p className="mt-10 max-w-xl text-lg font-medium leading-relaxed text-white/70 sm:mt-12">
              Specialized support in Design, Analysis, Simulation, Automation and Technical Consulting
              for Industrial and Mechanical Projects including IT Services.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55 lg:max-w-lg">
              We help businesses solve engineering challenges with practical design support, analysis,
              automation and consultancy services including IT Services that improve performance,
              reliability, and efficiency.
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
                { value: 'FEA', label: 'Analysis' },
                { value: 'IT', label: 'Services' },
                { value: '24×7', label: 'Support' },
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

          <div className="relative hidden lg:flex lg:min-h-[32rem] lg:flex-1 lg:items-center lg:justify-center xl:min-h-[36rem]">
            <div className="absolute top-1/2 left-1/2 h-[95%] w-[95%] max-h-[520px] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl animate-pulse-glow" />
            <div className="animate-float-subtle relative w-full max-w-[45rem] xl:max-w-[52.5rem]">
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800/90 to-navy-900/90 shadow-2xl shadow-navy-950/60 backdrop-blur-sm ring-1 ring-white/5" />

              <div className="relative flex w-full flex-col items-center justify-center px-6 py-10 xl:px-10 xl:py-12">
                <LogoMark
                  variant="hero"
                  className="max-h-[20rem] w-full max-w-[min(100%,20rem)] xl:max-h-[22rem] xl:max-w-[min(100%,22rem)]"
                />
                <p className="mt-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  Engineering Automation Consultancy
                </p>
              </div>

              <div className="absolute -top-5 -right-5 rounded-xl border border-accent/30 bg-navy-800/95 px-5 py-3.5 shadow-lg shadow-navy-950/40 backdrop-blur-sm">
                <div className="text-xs text-white/50">Focus</div>
                <div className="text-lg font-bold text-accent-light">Industrial</div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-accent/30 bg-navy-800/95 px-5 py-3.5 shadow-lg shadow-navy-950/40 backdrop-blur-sm">
                <div className="text-xs text-white/50">Expertise</div>
                <div className="text-lg font-bold text-accent-light">Design &amp; IT</div>
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
