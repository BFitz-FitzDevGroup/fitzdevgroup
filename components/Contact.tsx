'use client'

import { useEffect, useState, Suspense } from 'react'

function ContactInner() {
  const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        if (params.get('submitted') === 'true') {
          setSubmitted(true)
          window.history.replaceState({}, '', window.location.pathname)
          // Scroll to contact section after a brief delay for render
          setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }, 300)
        }
      }
    }, [])


  const details = [
    {
      label: 'Location',
      value: 'Sacramento, California',
      href: null,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/brentfitzpatrick',
      href: 'https://www.linkedin.com/in/brentfitzpatrick/',
    },
    {
      label: 'Response',
      value: 'Within one business day',
      href: null,
    },
  ]

  const inputStyle = {
    background: 'var(--card-bg)',
    border: '1px solid var(--border-mid)',
    borderRadius: '3px',
    padding: '12px 16px',
    fontSize: '14px',
    color: 'var(--text)',
    fontFamily: 'var(--font-outfit)',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
  <>
    {/* Toast notification */}
    {submitted && (
      <div
        className="fixed top-6 left-1/2 z-[200] flex items-center gap-3 px-6 py-4 rounded-sm shadow-lg"
        style={{
          transform: 'translateX(-50%)',
          background: '#0D1821',
          border: '1px solid var(--brass)',
          fontFamily: 'var(--font-outfit)',
          minWidth: '300px',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
          <path d="M4 10l4.5 4.5 8-8" stroke="#C9952A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[13px] tracking-wide" style={{ color: '#F0EBE0' }}>
          Message received — I&apos;ll be in touch within one business day.
        </span>
      </div>
    )}

    <section
      id="contact"
      className="border-t"
      style={{
        padding: '100px 0',
        background: 'var(--bg-3)',
        borderColor: 'var(--border)',
        transition: 'background var(--transition), border-color var(--transition)',
      }}
    >
      <div className="container">
        <div className="two-col-grid">

          {/* Left */}
          <div>
            <div className="section-label">Contact</div>
            <div className="section-rule" />
            <h2
              className="section-headline mb-5"
              style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--text)' }}
            >
              Let&apos;s talk about{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--brass)' }}>your project</em>
            </h2>
            <p
              className="body-text mb-9"
              style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
            >
              Whether you have a defined project or just a problem you need to think through,
              reach out. Initial conversations are always free and informal.
            </p>

            <div>
              {details.map((d, i) => (
                <div
                  key={d.label}
                  className="flex items-center gap-3 py-3.5 border-b text-[14px]"
                  style={{
                    borderColor: 'var(--border)',
                    borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                    color: 'var(--text-dim)',
                    transition: 'border-color var(--transition)',
                    fontFamily: 'var(--font-outfit)',
                  }}
                >
                  <span
                    className="text-[9.5px] tracking-widest uppercase min-w-[80px]"
                    style={{ color: 'var(--brass)', opacity: 0.8, fontFamily: 'var(--font-outfit)' }}
                  >
                    {d.label}
                  </span>
                  {d.href ? (
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 hover:text-[var(--brass)]"
                      style={{ color: 'var(--text-dim)' }}
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form or thank you */}
          <div>
            {submitted ? (
              /* ── Thank you state ── */
              <div
                className="flex flex-col justify-center gap-6 p-10 border rounded-sm h-full"
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--card-bg)',
                  minHeight: '360px',
                }}
              >
                {/* Brass checkmark */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                  style={{ borderColor: 'var(--brass)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10l4.5 4.5 8-8"
                      stroke="#C9952A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3
                    className="text-[28px] font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--text)' }}
                  >
                    Message received.
                  </h3>
                  <p
                    className="text-[16px] font-light leading-relaxed"
                    style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-outfit)' }}
                  >
                    I&apos;ll be in touch within one business day. In the meantime, feel free
                    to connect on{' '}
                    <a
                      href="https://www.linkedin.com/in/brentfitzpatrick/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                      style={{ color: 'var(--brass)' }}
                    >
                      LinkedIn
                    </a>
                    .
                  </p>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="self-start text-[11px] tracking-widest uppercase px-6 py-2.5 rounded-sm border transition-colors duration-200 hover:border-[var(--brass)] hover:text-[var(--brass)]"
                  style={{
                    border: '1px solid var(--border-mid)',
                    color: 'var(--text-dimmer)',
                    fontFamily: 'var(--font-outfit)',
                    cursor: 'pointer',
                    background: 'transparent',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* ── Contact form ── */
              <form
                action="https://formsubmit.co/brent@fitzdevgroup.com"
                method="POST"
                className="flex flex-col gap-4"
              >
                {/* FormSubmit config */}
                <input type="text"   name="_honey"    style={{ display: 'none' }} />
                <input type="hidden" name="_captcha"  value="false" />
                <input type="hidden" name="_subject"  value="New FitzDevGroup Contact Form Submission" />
                <input type="hidden" name="_next"     value="https://fitzdevgroup.com/?submitted=true" />
                <input type="hidden" name="_template" value="table" />

                {/* Name row */}
                <div className="contact-name-grid grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  {[
                    { name: 'firstName', label: 'First Name', placeholder: 'First name' },
                    { name: 'lastName',  label: 'Last Name',  placeholder: 'Last name'  },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label
                        className="text-[10px] tracking-widest uppercase"
                        style={{ color: 'var(--text-dimmer)', fontFamily: 'var(--font-outfit)' }}
                      >
                        {f.label}
                      </label>
                      <input
                        name={f.name}
                        type="text"
                        placeholder={f.placeholder}
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--brass)')}
                        onBlur={(e)  => (e.target.style.borderColor = 'var(--border-mid)')}
                      />
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: 'var(--text-dimmer)', fontFamily: 'var(--font-outfit)' }}
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--brass)')}
                    onBlur={(e)  => (e.target.style.borderColor = 'var(--border-mid)')}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: 'var(--text-dimmer)', fontFamily: 'var(--font-outfit)' }}
                  >
                    What are you working on?
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project — what you're building, what's broken, or what decision you're trying to make."
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--brass)')}
                    onBlur={(e)  => (e.target.style.borderColor = 'var(--border-mid)')}
                  />
                </div>

                <button
                  type="submit"
                  className="self-start text-[11px] tracking-widest uppercase px-7 py-3 rounded-sm font-medium transition-opacity hover:opacity-85"
                  style={{
                    background: 'var(--brass)',
                    color: '#0D1821',
                    fontFamily: 'var(--font-outfit)',
                    cursor: 'pointer',
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  </>  
  )
}

export function Contact() {
  return (
    <Suspense fallback={null}>
      <ContactInner />
    </Suspense>
  )
}