import { LogoMark } from './Logo'

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">About Us</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              We are an engineering consultancy and IT Services focused on delivering accurate, efficient,
              and project-focused solutions for clients who need technical expertise they can trust.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Our work combines engineering knowledge, problem-solving, and clear communication to support
              projects from concept to completion.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <LogoMark variant="light" className="h-16 w-auto max-w-[180px]" />
              <div>
                <div className="font-semibold text-navy-900">SMAFT Technology Solutions</div>
                <div className="text-sm text-navy-500">Salem, Tamil Nadu, India</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-navy-900/10 bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white shadow-xl lg:p-10">
            <h3 className="text-xl font-semibold">Engineering &amp; IT Expertise</h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/70">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Engineering Services and Mechanical Design Services for industrial projects
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Engineering Automation Consultancy and Manufacturing Automation Solutions
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Product Development Support, Technical Consulting, and Failure Analysis
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Industrial Automation Services with integrated IT capabilities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
