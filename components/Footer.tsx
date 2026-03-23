export function Footer() {
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#stack',    label: 'Stack'    },
    { href: '#about',    label: 'About'    },
    { href: '#contact',  label: 'Contact'  },
  ]

  return (
    <footer
      className="border-t"
      style={{
        padding: '40px 0',
        borderColor: 'var(--border)',
        transition: 'border-color var(--transition)',
      }}
    >
      <div className="container">
        <div className="flex justify-between items-center gap-6 flex-wrap">
          {/* Brand mark + copy */}
          <div className="flex items-center gap-3">
            {/* Geometric F favicon */}
            <svg width="22" height="22" viewBox="0 0 200 200">
              <rect width="200" height="200" rx="28" fill="#0D1821" />
              <rect x="44" y="38" width="36" height="136" rx="6" fill="#C9952A" />
              <rect x="44" y="38" width="116" height="36" rx="6" fill="#C9952A" />
              <rect x="44" y="105" width="88" height="30" rx="6" fill="#C9952A" />
            </svg>
            <span
              className="text-[11px] tracking-wider"
              style={{ color: 'var(--text-dimmer)', fontFamily: 'var(--font-outfit)', letterSpacing: '0.08em' }}
            >
              © {new Date().getFullYear()} Fitzpatrick Development Group &nbsp;·&nbsp; Sacramento, CA
            </span>
          </div>

          {/* Nav links */}
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-widest uppercase transition-colors duration-200 hover:text-[var(--brass)]"
                style={{ color: 'var(--text-dimmer)', fontFamily: 'var(--font-outfit)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
