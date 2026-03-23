import { Wordmark } from './Wordmark'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        background: 'var(--bg)',
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          opacity: 0.4,
        }}
      />

      {/* Brass glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px',
          right: '-120px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(201,149,42,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 w-full">
        <div
          className="grid gap-20 items-center"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Left — wordmark */}
          <div className="fade-up fade-up-1">
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-12"
              style={{ color: 'var(--brass)', opacity: 0.85, fontFamily: 'var(--font-outfit)' }}
            >
              Sacramento, CA &nbsp;·&nbsp; Available for Engagements
            </p>
            <Wordmark size="hero" id="wm-hero" />
          </div>

          {/* Right — statement */}
          <div className="flex flex-col gap-8">
            <p
              className="fade-up fade-up-2 text-[22px] leading-relaxed"
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontWeight: 400,
                color: 'var(--text)',
              }}
            >
              Senior technology consulting for organizations that need someone who{' '}
              <strong style={{ color: 'var(--brass)', fontWeight: 600 }}>
                builds what they recommend
              </strong>{' '}
              — not just decks and timelines.
            </p>

            <p
              className="fade-up fade-up-3 text-[17px] leading-[1.8]"
              style={{
                color: 'var(--text-dim)',
                fontWeight: 300,
                fontFamily: 'var(--font-outfit)',
              }}
            >
              2+ decades building on the web — from the early commercial internet through
              today&apos;s AI-native stack. I work directly with founders, CTOs, and operations
              teams — no account managers, no handoffs, no surprises.
            </p>

            <div className="fade-up fade-up-4 flex flex-wrap items-center gap-5">
              <a
                href="#services"
                className="text-[11px] tracking-widest uppercase px-7 py-3 rounded-sm font-medium cursor-pointer transition-opacity hover:opacity-85"
                style={{
                  background: 'var(--brass)',
                  color: '#0D1821',
                  fontFamily: 'var(--font-outfit)',
                }}
              >
                View Services
              </a>
              <a
                href="#contact"
                className="text-[11px] tracking-widest uppercase px-7 py-3 rounded-sm border cursor-pointer transition-colors duration-200 hover:border-[var(--brass)] hover:text-[var(--brass)]"
                style={{
                  border: '1px solid var(--border-mid)',
                  color: 'var(--text-dim)',
                  fontFamily: 'var(--font-outfit)',
                }}
              >
                Start a Conversation
              </a>
            </div>

            <div
              className="flex items-center gap-3 text-[10px] tracking-[0.16em] uppercase mt-2"
              style={{ color: 'var(--text-dimmer)', fontFamily: 'var(--font-outfit)' }}
            >
              <div className="w-6 h-px" style={{ background: 'var(--text-dimmer)' }} />
              Scroll to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
