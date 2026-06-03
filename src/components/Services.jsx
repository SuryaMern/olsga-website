import { useState } from 'react'

const serviceIcons = [
  <path key="a" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />,
  <path key="b" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
  <path key="c" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
  <path key="d" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  <path key="e" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
  <path key="f" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
]

const categories = [
  {
    id: 'engineering',
    title: 'Engineering Services',
    description:
      'Mechanical Design Services, Product Development Support, Technical Consulting, and Failure Analysis for industrial projects.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
    services: [
      'Engineering Design Support',
      'Finite Element Analysis (FEA)',
      'CAD Modeling and Drafting',
      'Product Development Support',
      'AI-Driven Design Optimization',
      'OEM Collaboration & Third-Party Support',
      'Technical Consulting and Review',
      'Engineering Process Improvement',
      'Design and Simulation Support',
      'Technical Documentation and Reporting',
      'Failure Analysis and Troubleshooting',
      'Custom Engineering Solution Development',
    ],
  },
  {
    id: 'automation',
    title: 'Automation Services',
    description:
      'Engineering Automation Consultancy, Industrial Automation Services, and Manufacturing Automation Solutions.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    ),
    services: [
      'Digital Transformation in Valve Manufacturing',
      'Preventive Maintenance Program Development',
      'Industrial Automation Consulting',
    ],
  },
  {
    id: 'it',
    title: 'IT Services',
    description:
      'Technology strategy, managed support, and software solutions for small businesses and growing industrial teams.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    services: [
      'IT Consulting and Technology Strategy',
      'Managed IT Services and Support',
      'Software Development and Web Solutions',
      'Network Setup and System Maintenance',
      'IT Help Desk and User Support',
      'IT Training and Process Improvement',
    ],
  },
]

function ServiceCard({ title, index }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-navy-800 hover:shadow-xl hover:shadow-accent/10">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent/10" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light ring-1 ring-accent/20 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {serviceIcons[index % serviceIcons.length]}
          </svg>
        </div>
        <h3 className="text-sm font-semibold leading-snug text-white">{title}</h3>
      </div>
    </div>
  )
}

export default function Services() {
  const [activeId, setActiveId] = useState(categories[0].id)
  const activeCategory = categories.find((c) => c.id === activeId) ?? categories[0]

  return (
    <section id="services" className="relative bg-navy-900 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">Our Services</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Comprehensive Engineering Services, Mechanical Design Services, Product Development Support,
            Technical Consulting, Failure Analysis, Industrial Automation Services, and Manufacturing
            Automation Solutions — plus IT capabilities for modern industrial teams.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {categories.map((category) => {
            const isActive = category.id === activeId
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveId(category.id)}
                className={`group rounded-2xl border p-6 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-accent/50 bg-navy-800 shadow-xl shadow-accent/10 ring-1 ring-accent/30'
                    : 'border-white/10 bg-navy-800/40 hover:border-accent/30 hover:bg-navy-800/70'
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-accent text-white shadow-lg shadow-accent/30'
                      : 'bg-accent/10 text-accent-light ring-1 ring-accent/20 group-hover:bg-accent/20'
                  }`}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {category.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{category.description}</p>
                <span
                  className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider ${
                    isActive ? 'text-accent-light' : 'text-white/30 group-hover:text-white/50'
                  }`}
                >
                  {category.services.length} services
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            )
          })}
        </div>

        <div
          className="mt-6 flex gap-2 overflow-x-auto rounded-xl border border-white/10 bg-navy-950/50 p-1.5 sm:hidden"
          role="tablist"
          aria-label="Service categories"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={category.id === activeId}
              onClick={() => setActiveId(category.id)}
              className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                category.id === activeId
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          className="mt-10 rounded-2xl border border-white/10 bg-navy-950/40 p-6 backdrop-blur-sm lg:p-8"
        >
          <div className="mb-8 flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{activeCategory.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-white/50">{activeCategory.description}</p>
            </div>
            <span className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-light">
              {activeCategory.services.length} offerings
            </span>
          </div>

          <div
            className={`grid gap-4 ${
              activeCategory.services.length <= 3
                ? 'sm:grid-cols-2 lg:grid-cols-3'
                : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}
          >
            {activeCategory.services.map((title, index) => (
              <ServiceCard key={title} title={title} index={index} />
            ))}
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-white/60">
          Whether you need a one-time analysis or ongoing engineering support, we provide solutions
          tailored to your project needs.
        </p>
      </div>
    </section>
  )
}
