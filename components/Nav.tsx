'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Wordmark } from './Wordmark'

export function Nav() {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  function closeMenu() {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  function toggleMenu() {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#stack',    label: 'Stack' },
    { href: '#about',    label: 'About' },
    { href: '#process',  label: 'Process' },
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] border-b"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
          transition: 'background var(--transition), border-color var(--transition)',
        }}
      >
        <div
          className="max-w-[1200px] mx-auto px-10 flex items-center justify-between gap-8"
          style={{ padding: '14px 40px' }}
        >
          {/* Logo */}
          <a href="#hero">
            <Wordmark size="nav" id="wm-nav" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase transition-colors duration-200 hover:text-[var(--brass)]"
                style={{ color: 'var(--text-dim)', fontWeight: 400 }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 rounded-full px-3 py-1 border cursor-pointer transition-colors duration-200 hover:border-[var(--brass)]"
                style={{
                  border: '1px solid var(--border-mid)',
                  background: 'var(--card-bg)',
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.5 10A6 6 0 016 2.5a.5.5 0 00-.6.65A6 6 0 1013.35 10.6a.5.5 0 00-.65-.6z"
                      fill="currentColor"
                      opacity="0.7"
                      style={{ color: 'var(--text-dim)' }}
                    />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.8" style={{ color: 'var(--text-dim)' }} />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                      const rad = (deg * Math.PI) / 180
                      const x1 = 8 + 5 * Math.cos(rad)
                      const y1 = 8 + 5 * Math.sin(rad)
                      const x2 = 8 + 6.5 * Math.cos(rad)
                      const y2 = 8 + 6.5 * Math.sin(rad)
                      return (
                        <line
                          key={i}
                          x1={x1} y1={y1} x2={x2} y2={y2}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity="0.6"
                          style={{ color: 'var(--text-dim)' }}
                        />
                      )
                    })}
                  </svg>
                )}
                <span
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: 'var(--text-dim)' }}
                >
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </span>
              </button>
            )}

            {/* CTA — desktop only */}
            <a
              href="#contact"
              className="hidden md:block text-[11px] tracking-widest uppercase px-5 py-2 rounded-sm border transition-all duration-200"
              style={{
                border: '1px solid var(--brass)',
                color: 'var(--brass)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = 'var(--brass)'
                el.style.color = '#0D1821'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'transparent'
                el.style.color = 'var(--brass)'
              }}
            >
              Work With Me
            </a>

            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer-inner" style={{ fontFamily: 'var(--font-jakarta)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-nav-link mobile-nav-cta"
            onClick={closeMenu}
          >
            Work With Me
          </a>
        </div>
      </div>
    </>
  )
}
