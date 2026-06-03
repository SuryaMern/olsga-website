export default function Logo({ className = 'h-11 w-auto max-w-[220px]', showText = false, textClassName = '' }) {
  return (
    <div className={`flex items-center gap-3 ${textClassName}`}>
      <img
        src="/hero.png"
        alt="SMAFT Technology Solutions"
        className={`${className} object-contain object-left`}
      />
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
