const logoSources = {
  webp: '/hero.webp 1x, /hero@2x.webp 2x',
  png: '/hero.png 1x, /hero@2x.png 2x',
}

function LogoImage({ className }) {
  return (
    <picture>
      <source type="image/webp" srcSet={logoSources.webp} />
      <img
        src="/hero.png"
        srcSet={logoSources.png}
        alt="SMAFT Technology Solutions"
        width={1024}
        height={961}
        decoding="async"
        className={`logo-crisp object-contain object-left ${className}`}
      />
    </picture>
  )
}

const plateStyles = {
  dark: 'rounded-xl bg-[#eef2f6] px-2.5 py-1.5 shadow-lg shadow-black/25 ring-1 ring-white/15',
  light: '',
  hero: 'rounded-2xl bg-[#eef2f6] px-8 py-6 shadow-2xl shadow-navy-950/50 ring-1 ring-white/20 sm:px-10 sm:py-8',
}

export default function Logo({
  className = 'h-11 w-auto max-w-[220px]',
  showText = false,
  textClassName = '',
  variant = 'dark',
}) {
  const plate = plateStyles[variant] ?? plateStyles.dark

  return (
    <div className={`flex items-center gap-3 ${textClassName}`}>
      <div className={plate}>
        <LogoImage className={className} />
      </div>
      {showText && (
        <div>
          <span className="block text-lg font-bold tracking-tight text-white">SMAFT</span>
          <span className="block text-[10px] font-medium uppercase tracking-widest text-accent-light/80">
            Technology Solutions
          </span>
        </div>
      )}
    </div>
  )
}

export function LogoMark({ className = 'h-16 w-auto max-w-[180px]', variant = 'light' }) {
  const plate = plateStyles[variant] ?? plateStyles.light

  return (
    <div className={plate}>
      <LogoImage className={className} />
    </div>
  )
}
