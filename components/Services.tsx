// Services.tsx
export function Services() {
  const services = [
    {
      num: '01',
      title: 'Development',
      body: 'Full-stack web development from greenfield to legacy modernization. I build applications that are maintainable, well-documented, and built to last — not just to ship.',
      tags: ['PHP / Laravel', 'Python', 'Vue.js', 'Next.js', 'React', 'Rails'],
    },
    {
      num: '02',
      title: 'Strategy',
      body: 'Technology strategy grounded in how systems actually behave at scale. I help organizations make build vs. buy decisions, evaluate vendors, and plan migrations without the consulting-firm theater.',
      tags: ['Architecture Review', 'Tech Roadmaps', 'CTO Advisory', 'Platform Selection'],
    },
    {
      num: '03',
      title: 'Support',
      body: 'Ongoing technical support for organizations without in-house development depth. I keep existing systems healthy, handle escalations, and document what your team inherits.',
      tags: ['Site Maintenance', 'Performance', 'Security Audits', 'Documentation'],
    },
  ]

  return (
    <section
      id="services"
      className="border-t"
      style={{
        padding: '100px 0',
        background: 'var(--bg-2)',
        borderColor: 'var(--border)',
        transition: 'background var(--transition), border-color var(--transition)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="grid gap-20 mb-18" style={{ gridTemplateColumns: '1fr 2fr', marginBottom: '72px' }}>
          <div>
            <div className="section-label">What I Do</div>
            <div className="section-rule" />
            <h2
              className="text-[36px] font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--text)' }}
            >
              Three ways I can{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--brass)' }}>help</em>
            </h2>
          </div>
          <p
            className="self-end text-[16px] leading-[1.85] font-light"
            style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
          >
            Most consultants specialize in either strategy or execution. After two decades doing
            both, I&apos;ve found the best work happens when the person drawing the roadmap is the
            same one writing the code.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {services.map((s) => (
            <div
              key={s.num}
              className="relative border group cursor-default"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border)',
                padding: '40px 36px',
                transition: 'background 0.2s, border-color 0.2s',
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'var(--brass)' }}
              />
              <div
                className="text-[11px] tracking-wider mb-6"
                style={{ color: 'var(--brass)', opacity: 0.5, fontFamily: 'var(--font-outfit)' }}
              >
                {s.num}
              </div>
              <h3
                className="text-[22px] font-semibold mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--text)' }}
              >
                {s.title}
              </h3>
              <p
                className="text-[16px] leading-[1.8] font-light mb-7"
                style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
              >
                {s.body}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9.5px] tracking-widest uppercase px-2.5 py-1 rounded-sm border"
                    style={{
                      border: '1px solid var(--border-mid)',
                      color: 'var(--text-dimmer)',
                      fontFamily: 'var(--font-outfit)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
