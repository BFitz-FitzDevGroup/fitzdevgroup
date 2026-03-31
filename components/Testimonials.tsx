'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote:
      "I've worked with Brent for over a decade, from the initial development of our website to the annual updates of our pension and member contribution rate calculators. He interprets complex actuarial data with precision and minimal direction, and is consistently responsive and professional. Genuinely a pleasure to work with.",
    name:    'Shannon Langston',
    title:   'Communications Coordinator',
    company: 'CCCERA',
  },
  {
    quote:
      "Working with Brent across several projects has been excellent from start to finish. Responsive, knowledgeable, and able to quickly adapt to evolving needs — his support made a meaningful difference in both my workload and client satisfaction. A trusted partner for ongoing work.",
    name:    'Lauren Valdez',
    title:   'Chief Operations Officer',
    company: 'The Wheeler Company',
  },
  {
    quote:
      "I've brought Brent in on custom development work across a wide range of client engagements over the years, and he's never once let me down. He's the person I call when a project needs someone who can think through a problem architecturally and then actually build it. Clients trust him immediately, and that reflects well on everyone involved.",
    name:    'Carsen Anthonisen',
    title:   'Principal',
    company: 'Strata Marketing Group',
  },
  {
    quote:
      "I've worked with Brent across multiple engagements spanning more than two decades — from building Relocation Planner from the ground up to re-architecting it years later when the business had outgrown its original foundation. He has a rare ability to understand what a product needs to do for the business, not just what the spec says to build. I trust him completely.",
    name:    'Dan Carpenter',
    title:   'Principal',
    company: 'Benchmark Consulting Services, LTD',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section
      id="testimonials"
      className="border-t"
      style={{
        padding: '100px 0',
        background: 'var(--bg)',
        borderColor: 'var(--border)',
        transition: 'background var(--transition), border-color var(--transition)',
      }}
    >
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div className="section-label">What Clients Say</div>
          <div className="section-rule" />
          <h2
            className="section-headline"
            style={{ fontFamily: 'var(--font-jakarta)', maxWidth: '480px' }}
          >
            Trusted by teams who ship
          </h2>
        </div>

        {/* Quote card */}
        <div
          className="border"
          style={{
            background: 'var(--card-bg)',
            borderColor: 'var(--border)',
            padding: '52px 60px',
            borderRadius: '2px',
            position: 'relative',
            transition: 'background var(--transition), border-color var(--transition)',
            marginBottom: '32px',
          }}
        >
          {/* Large brass quote mark */}
          <div
            style={{
              position: 'absolute',
              top: '28px',
              left: '48px',
              fontFamily: 'var(--font-jakarta)',
              fontSize: '96px',
              lineHeight: 1,
              color: 'var(--brass)',
              opacity: 0.15,
              fontWeight: 700,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <blockquote
            style={{
              fontFamily: 'var(--font-jakarta)',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--text)',
              margin: 0,
              paddingTop: '16px',
              transition: 'color var(--transition)',
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div
            style={{
              marginTop: '36px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Brass accent line */}
            <div
              style={{
                width: '24px',
                height: '2px',
                background: 'var(--brass)',
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  transition: 'color var(--transition)',
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '12px',
                  color: 'var(--text-dim)',
                  marginTop: '2px',
                  transition: 'color var(--transition)',
                }}
              >
                {t.title}
                <span style={{ color: 'var(--brass)', margin: '0 6px' }}>·</span>
                {t.company}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots + arrows */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Dots */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View testimonial ${i + 1}`}
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === active ? 'var(--brass)' : 'var(--border-mid)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.25s ease, background 0.2s ease',
                }}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              style={{
                width: '40px',
                height: '40px',
                border: '1px solid var(--border-mid)',
                borderRadius: '3px',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-dim)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brass)'
                e.currentTarget.style.color = 'var(--brass)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-mid)'
                e.currentTarget.style.color = 'var(--text-dim)'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setActive((active + 1) % testimonials.length)}
              aria-label="Next testimonial"
              style={{
                width: '40px',
                height: '40px',
                border: '1px solid var(--border-mid)',
                borderRadius: '3px',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-dim)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brass)'
                e.currentTarget.style.color = 'var(--brass)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-mid)'
                e.currentTarget.style.color = 'var(--text-dim)'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}