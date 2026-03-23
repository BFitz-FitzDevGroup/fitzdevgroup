export function About() {
  const credentials = [
    {
      text: (
        <>
          <strong>Former CTO</strong> — commercial B2B SaaS startup, full product lifecycle
          from architecture to launch
        </>
      ),
    },
    {
      text: (
        <>
          <strong>Enterprise systems experience</strong> — large-scale data infrastructure,
          membership systems, and communications platforms
        </>
      ),
    },
    {
      text: (
        <>
          <strong>20+ years</strong> building web applications — from early commercial internet
          infrastructure through modern full-stack development
        </>
      ),
    },
    {
      text: (
        <>
          <strong>fitzdevgroup.com</strong> operating since 2010 — an established practice,
          not a new shingle
        </>
      ),
    },
  ]

  const stats = [
    { number: '20+', label: 'Years on the web' },
    { number: '6',   label: 'Core languages'   },
    { number: '3',   label: 'Service areas'    },
  ]

  return (
    <section
      id="about"
      className="border-t"
      style={{
        padding: '100px 0',
        background: 'var(--bg-2)',
        borderColor: 'var(--border)',
        transition: 'background var(--transition), border-color var(--transition)',
      }}
    >
      <div className="container">
        <div className="grid gap-20" style={{ gridTemplateColumns: '2fr 1fr' }}>
          {/* Left */}
          <div>
            <div className="section-label">About</div>
            <div className="section-rule" />
            <h2
              className="text-[36px] font-semibold leading-tight mb-7"
              style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--text)' }}
            >
              Senior technical leadership,{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--brass)' }}>
                without the overhead
              </em>
            </h2>
            <p
              className="text-[16px] leading-[1.9] font-light mb-5"
              style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
            >
              FitzDevGroup is the consulting practice of Brent Fitzpatrick — a senior
              technologist with experience spanning commercial startups, enterprise
              organizations, and large-scale government systems.
            </p>
            <p
              className="text-[16px] leading-[1.9] font-light"
              style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
            >
              I work through a tight network of trusted partners. When a project needs more
              than one set of hands, I bring in people I&apos;ve worked with directly — not a
              bench of contractors I&apos;ve never met.
            </p>

            {/* Credentials */}
            <div className="mt-10">
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="flex gap-4 py-5 border-b"
                  style={{
                    borderColor: 'var(--border)',
                    borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                    transition: 'border-color var(--transition)',
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: 'var(--brass)', opacity: 0.7 }}
                  />
                  <p
                    className="text-[14px] leading-relaxed font-light"
                    style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
                  >
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col gap-0.5 mt-[52px]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border p-7"
                style={{
                  background: 'var(--card-bg)',
                  borderColor: 'var(--border)',
                  transition: 'background var(--transition), border-color var(--transition)',
                }}
              >
                <div
                  className="text-5xl font-bold leading-none mb-1.5"
                  style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--brass)' }}
                >
                  {s.number}
                </div>
                <div
                  className="text-[11px] tracking-widest uppercase"
                  style={{ color: 'var(--text-dimmer)', fontFamily: 'var(--font-outfit)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
