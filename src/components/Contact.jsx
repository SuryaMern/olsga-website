const contactInfo = [
  {
    label: 'Location',
    value: 'Salem, Tamil Nadu, India',
    href: null,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'Connect@olsga.com',
    href: 'mailto:Connect@olsga.com',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 9342821035',
    href: 'tel:+919342821035',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative bg-navy-950 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">Contact Us</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s Discuss Your Engineering Needs
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Ready to optimize your valve designs or need expert FEA analysis? Reach out to our
              engineering team for a consultation.
            </p>

            <div className="mt-10 space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-white/40">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 block text-lg font-medium text-white transition-colors hover:text-accent-light"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-0.5 text-lg font-medium text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy-900/80 p-8 backdrop-blur-sm lg:p-10">
            <h3 className="text-xl font-semibold text-white">Send a Message</h3>
            <p className="mt-2 text-sm text-white/50">Fill out the form and we&apos;ll get back to you promptly.</p>

            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/70">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-accent/40 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
