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
        <div className="hero-grid">

          {/* Left — wordmark (hidden on mobile, shown on md+) */}
          <div className="fade-up fade-up-1 hero-wordmark-col">
            <p
              className="hero-eyebrow"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Sacramento, CA &nbsp;·&nbsp; Available for Engagements
            </p>
            <Wordmark size="hero" id="wm-hero" />
          </div>

          {/* Right — statement */}
          <div className="hero-right-col">
            {/* Mobile-only eyebrow */}
            <p
              className="hero-eyebrow-mobile"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Sacramento, CA &nbsp;·&nbsp; Available for Engagements
            </p>

            <p
              className="fade-up fade-up-2 hero-statement"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Senior technology consulting for organizations that need someone who{' '}
              <strong style={{ color: 'var(--brass)', fontWeight: 600 }}>
                builds what they recommend
              </strong>{' '}
              — not just decks and timelines.
            </p>

            <p
              className="fade-up fade-up-3 hero-body"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              2+ decades building on the web — from the early commercial internet through
              today&apos;s AI-native stack. I work directly with founders, CTOs, and operations
              teams — no account managers, no handoffs, no surprises.
            </p>

            <div className="fade-up fade-up-4 hero-actions">
              <a href="#services" className="btn-primary">View Services</a>
              <a href="#contact" className="btn-ghost">Start a Conversation</a>
            </div>

            <div className="hero-scroll" style={{ fontFamily: 'var(--font-outfit)' }}>
              <div className="scroll-line" />
              Scroll to explore
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
