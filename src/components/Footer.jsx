import Logo from './Logo'

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              Engineering Services and Consultancy for Reliable &amp; Smarter Industrial Solutions
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
                <a href="mailto:Connect@smaft.com" className="transition-colors hover:text-accent-light">
                  Connect@smaft.com
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
            &copy; {currentYear} SMAFT Technology Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Engineering Services · Industrial Automation · IT Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
