'use client'

import { useEffect, useRef } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
})

interface WordmarkProps {
  size: 'nav' | 'hero'
  id: string
}

export function Wordmark({ size, id }: WordmarkProps) {
  const devRowRef = useRef<HTMLDivElement>(null)
  const ruleRef  = useRef<HTMLDivElement>(null)
  const tagRef   = useRef<HTMLDivElement>(null)

  function matchWidths() {
    if (!devRowRef.current || !ruleRef.current || !tagRef.current) return
    const vw = Math.min(window.innerWidth, document.documentElement.clientWidth)
    const container = devRowRef.current.closest('.container') as HTMLElement | null
    const maxW = container ? container.getBoundingClientRect().width : vw - 40
    const w = Math.min(devRowRef.current.getBoundingClientRect().width, maxW)
    ruleRef.current.style.width  = `${w}px`
    ruleRef.current.style.maxWidth = '100%'
    tagRef.current.style.width   = `${w}px`
    tagRef.current.style.maxWidth = '100%'
  }

  useEffect(() => {
    // Wait for fonts
    document.fonts.ready.then(() => setTimeout(matchWidths, 80))
    window.addEventListener('resize', matchWidths)
    return () => window.removeEventListener('resize', matchWidths)
  }, [])

  const sizeClass = size === 'nav' ? 'wm-nav' : 'wm-hero'
  const Tag = size === 'hero' ? 'h1' : 'div'

  return (
    <Tag className={`wordmark ${sizeClass} ${jakarta.className}`} id={id}>
      {/* FITZPATRICK */}
      <div className="wm-row row-1">
        <span className="chi">F</span>
        <span className="ch2">I</span>
        <span className="chr">TZPATRICK</span>
      </div>
      {/* DEVELOPMENT */}
      <div className="wm-row row-2" ref={devRowRef}>
        <span className="chi">D</span>
        <span className="ch2">E</span>
        <span className="chr">VELOPMENT</span>
      </div>
      {/* GROUP */}
      <div className="wm-row row-3">
        <span className="chi">G</span>
        <span className="ch2">R</span>
        <span className="chr">OUP</span>
      </div>
      <div className="wm-rule" ref={ruleRef} />
      <div className="wm-tag" ref={tagRef}>
        <span>Development</span>
        <span className="dot">&#9679;</span>
        <span>Strategy</span>
        <span className="dot">&#9679;</span>
        <span>Support</span>
      </div>
    </Tag>
  )
}
