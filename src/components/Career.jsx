export default function Career() {
  return (
    <section id="careers" className="relative bg-white py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Join Our Team</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Careers</h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-navy-900/10 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm lg:p-12">
            <h3 className="text-xl font-bold text-navy-900">Our Career Philosophy</h3>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              At Smaft, we believe great careers are built on three pillars: continuous learning, meaningful
              projects, and tangible impact. We don&apos;t just hire employees—we partner with passionate
              professionals who want to grow while delivering exceptional engineering and IT solutions to
              clients across India and globally.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { label: 'Continuous Learning', icon: '📚' },
                { label: 'Meaningful Projects', icon: '🔧' },
                { label: 'Tangible Impact', icon: '🚀' },
              ].map((pillar) => (
                <div
                  key={pillar.label}
                  className="rounded-xl border border-navy-900/10 bg-white p-5 text-center shadow-sm"
                >
                  <div className="text-2xl">{pillar.icon}</div>
                  <p className="mt-3 text-sm font-semibold text-navy-900">{pillar.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-4 border-t border-navy-900/10 pt-10">
              <p className="text-base leading-relaxed text-navy-600">
                We strive to retain a caring culture that focuses on employee satisfaction, development,
                diversity, growth, and commitment.
              </p>
              <p className="text-base leading-relaxed text-navy-600">
                We maintain an environment where individuals are treated with respect and provided with equality
                of opportunity based on merit.
              </p>
            </div>

            <div className="mt-10 rounded-xl bg-navy-900 p-8 text-center text-white">
              <p className="text-sm font-medium uppercase tracking-wider text-white/60">Interested in joining us?</p>
              <p className="mt-3 text-lg text-white/80">Send your CV to</p>
              <a
                href="mailto:connect@smaft.in"
                className="mt-2 inline-block text-2xl font-bold text-accent-light transition-colors hover:text-white"
              >
                connect@smaft.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
