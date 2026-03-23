export function Process() {
  const steps = [
    {
      num: '01',
      title: 'Conversation',
      body: 'We talk. You describe the problem, I ask questions. No intake forms, no NDAs on the first call.',
    },
    {
      num: '02',
      title: 'Proposal',
      body: 'A plain-English scope of work — what gets built, what it costs, what success looks like.',
    },
    {
      num: '03',
      title: 'Execution',
      body: 'Work happens with regular check-ins. You see progress, not just updates at milestones.',
    },
    {
      num: '04',
      title: 'Handoff',
      body: 'Documented, tested, and transferred so your team can own what we built together.',
    },
  ]

  return (
    <section
      id="process"
      className="border-t"
      style={{
        padding: '100px 0',
        background: 'var(--bg)',
        borderColor: 'var(--border)',
        transition: 'border-color var(--transition)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-[520px] mx-auto mb-18" style={{ marginBottom: '72px' }}>
          <div className="section-label" style={{ textAlign: 'center' }}>How It Works</div>
          <h2
            className="text-[36px] font-semibold mb-4"
            style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--text)' }}
          >
            Simple by design
          </h2>
          <p
            className="text-[16px] leading-relaxed font-light"
            style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
          >
            No RFPs, no discovery theater. A straightforward engagement from first conversation
            to delivered work.
          </p>
        </div>

        {/* Steps */}
        <div className="four-col-grid">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border p-9 group cursor-default transition-colors duration-200 hover:border-[var(--border-mid)]"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border)',
              }}
            >
              <div
                className="text-5xl font-bold leading-none mb-5 transition-opacity duration-200"
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  color: 'var(--brass)',
                  opacity: 0.18,
                }}
              >
                {step.num}
              </div>
              <h3
                className="text-[16px] font-semibold mb-2.5"
                style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--text)' }}
              >
                {step.title}
              </h3>
              <p
                className="text-[15px] leading-[1.75] font-light"
                style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
