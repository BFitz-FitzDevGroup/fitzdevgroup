export function Stack() {
  const groups = [
    { label: 'Backend',        items: ['PHP', 'Laravel', 'Python', 'Ruby on Rails', 'Node.js'] },
    { label: 'Frontend',       items: ['Vue.js', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { label: 'Data',           items: ['MySQL', 'PostgreSQL', 'Redis', 'SQLite'] },
    { label: 'Infrastructure', items: ['Vercel', 'AWS', 'GitHub', 'Docker', 'Linux'] },
  ]

  return (
    <section
      id="stack"
      className="border-t"
      style={{
        padding: '100px 0',
        background: 'var(--bg)',
        borderColor: 'var(--border)',
        transition: 'border-color var(--transition)',
      }}
    >
      <div className="container">
        <div className="grid gap-20" style={{ gridTemplateColumns: '1fr 2fr' }}>
          {/* Left */}
          <div>
            <div className="section-label">The Stack</div>
            <div className="section-rule" />
            <h2
              className="text-[36px] font-semibold leading-tight mb-5"
              style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--text)' }}
            >
              Tools I work with daily
            </h2>
            <p
              className="text-[16px] leading-[1.85] font-light"
              style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
            >
              I&apos;m technology-pragmatic rather than technology-tribal. The right tool for the
              job, chosen for maintainability and fit — not résumé-padding.
            </p>
          </div>

          {/* Right */}
          <div>
            {groups.map((group, i) => (
              <div
                key={group.label}
                className="grid items-center gap-8 py-5 border-b"
                style={{
                  gridTemplateColumns: '140px 1fr',
                  borderColor: 'var(--border)',
                  borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                  transition: 'border-color var(--transition)',
                }}
              >
                <span
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: 'var(--brass)', opacity: 0.75, fontFamily: 'var(--font-outfit)' }}
                >
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[14px] font-medium px-3.5 py-1.5 rounded-sm border cursor-default transition-colors duration-200 hover:border-[var(--brass)] hover:text-[var(--brass)]"
                      style={{
                        fontFamily: 'var(--font-jakarta)',
                        color: 'var(--text)',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
