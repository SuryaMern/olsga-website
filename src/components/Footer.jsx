const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span className="block text-lg font-bold text-white">OLSGA</span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-accent-light/80">
                  Technology Solutions
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              Specialized engineering consultancy for precision valve design and finite element analysis.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors duration-300 hover:text-accent-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/40">
              <li>Salem, Tamil Nadu, India</li>
              <li>
                <a href="mailto:Connect@olsga.com" className="transition-colors hover:text-accent-light">
                  Connect@olsga.com
                </a>
              </li>
              <li>
                <a href="tel:+919342821035" className="transition-colors hover:text-accent-light">
                  +91 9342821035
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-white/30">
            &copy; {currentYear} OLSGA Technology Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Precision Valve Design & FEA Engineering Services
          </p>
        </div>
      </div>
    </footer>
  )
}
