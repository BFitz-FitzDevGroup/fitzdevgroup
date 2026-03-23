'use client'

export function Contact() {
  const details = [
    { label: 'Location', value: 'Sacramento, California' },
    { label: 'LinkedIn', value: 'linkedin.com/in/brentfitzpatrick' },
    { label: 'Response', value: 'Within one business day' },
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
        <div className="grid gap-20" style={{ gridTemplateColumns: '1fr 1fr' }}>

          {/* Left */}
          <div>
            <div className="section-label">Contact</div>
            <div className="section-rule" />
            <h2
              className="text-[36px] font-semibold leading-tight mb-5"
              style={{ fontFamily: 'var(--font-jakarta)', color: 'var(--text)' }}
            >
              Let&apos;s talk about{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--brass)' }}>your project</em>
            </h2>
            <p
              className="text-[16px] leading-[1.85] font-light mb-9"
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
                  {d.value}
                </div>
              ))}
            </div>
          </div>

          {/* Right — FormSubmit */}
          <div>
            <form
              action="https://formsubmit.co/brent@fitzdevgroup.com"
              method="POST"
              className="flex flex-col gap-4"
            >
              {/* FormSubmit hidden config */}
              <input type="text"   name="_honey"    style={{ display: 'none' }} />
              <input type="hidden" name="_captcha"  value="false" />
              <input type="hidden" name="_subject"  value="New FitzDevGroup Contact Form Submission" />
              <input type="hidden" name="_next"     value="https://fitzdevgroup.com/?submitted=true" />
              <input type="hidden" name="_template" value="table" />

              {/* Name row */}
              <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {[
                  { name: 'firstName', label: 'First Name', placeholder: 'Brent'      },
                  { name: 'lastName',  label: 'Last Name',  placeholder: 'Fitzpatrick' },
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
                  placeholder="you@yourcompany.com"
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
          </div>

        </div>
      </div>
    </section>
  )
}