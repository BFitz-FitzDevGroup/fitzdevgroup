import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fitzpatrick Development Group — Web Development & Technology Strategy',
  description:
    'Senior web development, technology strategy, and site support from Sacramento, CA. PHP, Python, Vue.js, Next.js, React, and Rails.',
  metadataBase: new URL('https://fitzdevgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://fitzdevgroup.com',
    title: 'Fitzpatrick Development Group — Web Development & Technology Strategy',
    description:
      'Senior web development, technology strategy, and site support. 20+ years building on the web. Sacramento, CA.',
    siteName: 'Fitzpatrick Development Group',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fitzpatrick Development Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitzpatrick Development Group',
    description:
      'Senior web development, technology strategy, and site support. 20+ years building on the web.',
    images: ['/og-image.png'],
  },
  authors: [{ name: 'Brent Fitzpatrick' }],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${outfit.variable}`}
    >
      <head>
        {/* Favicon — geometric F */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' rx='28' fill='%230D1821'/%3E%3Crect x='44' y='38' width='36' height='136' rx='6' fill='%23C9952A'/%3E%3Crect x='44' y='38' width='116' height='36' rx='6' fill='%23C9952A'/%3E%3Crect x='44' y='105' width='88' height='30' rx='6' fill='%23C9952A'/%3E%3C/svg%3E"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' rx='28' fill='%230D1821'/%3E%3Crect x='44' y='38' width='36' height='136' rx='6' fill='%23C9952A'/%3E%3Crect x='44' y='38' width='116' height='36' rx='6' fill='%23C9952A'/%3E%3Crect x='44' y='105' width='88' height='30' rx='6' fill='%23C9952A'/%3E%3C/svg%3E"
        />
        {/* GA4 Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-483FM7S69Z`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-483FM7S69Z');
            `,
          }}
        />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Fitzpatrick Development Group',
              alternateName: 'FitzDevGroup',
              description:
                'Senior web development, technology strategy, and site support for organizations that need someone who builds what they recommend.',
              url: 'https://fitzdevgroup.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Sacramento',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              founder: {
                '@type': 'Person',
                name: 'Brent Fitzpatrick',
                jobTitle: 'Principal Consultant',
                sameAs: 'https://www.linkedin.com/in/brentfitzpatrick/',
              },
              knowsAbout: [
                'PHP', 'Laravel', 'Python', 'Vue.js', 'Next.js', 'React',
                'Ruby on Rails', 'Web Development', 'Technology Strategy',
                'Software Architecture', 'CTO Advisory',
              ],
              sameAs: ['https://www.linkedin.com/in/brentfitzpatrick/'],
            }),
          }}
        />
      </head>
      <body className={`${outfit.className} antialiased`}>
        {/* Blocking theme script — prevents flash on reload */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
