const projects = [
  {
    title: 'Industrial Valve Design Optimization',
    category: 'Mechanical Design Services',
    description:
      'Example engagement covering engineering design support and simulation for improved valve performance and reliability.',
  },
  {
    title: 'Manufacturing Automation Assessment',
    category: 'Industrial Automation Services',
    description:
      'Example workflow review with Manufacturing Automation Solutions recommendations for process efficiency.',
  },
  {
    title: 'FEA Structural Validation Program',
    category: 'Engineering Services',
    description:
      'Example finite element analysis and Technical Consulting program for critical industrial components.',
  },
  {
    title: 'Product Development Engineering Support',
    category: 'Product Development Support',
    description:
      'Example end-to-end Product Development Support from concept through detailed design documentation.',
  },
  {
    title: 'Failure Analysis & Root Cause Review',
    category: 'Failure Analysis',
    description:
      'Example Failure Analysis investigation with actionable recommendations for operational reliability.',
  },
  {
    title: 'Digital Transformation Initiative',
    category: 'Engineering Automation Consultancy',
    description:
      'Example Engineering Automation Consultancy engagement for smarter industrial operations.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Portfolio</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Representative Project Examples
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Illustrative examples of the types of engineering and automation work we deliver — not a list of
            confidential client projects. Detailed case studies will be added as they become available.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/30">
                  <svg className="h-8 w-8 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-6">
                <span className="inline-flex w-fit rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-sm font-semibold uppercase leading-normal tracking-wider text-accent">
                  Example project
                </span>
                <span className="mt-3 text-sm font-semibold uppercase leading-normal tracking-wider text-navy-400">
                  {project.category}
                </span>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-navy-900 sm:mt-2 sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-[1.7] text-navy-500 sm:mt-3 sm:text-sm sm:leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
