import type { Metadata, Viewport } from 'next'
import './globals.css'
import 'aos/dist/aos.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#031c3f',
}

export const metadata: Metadata = {
  title: 'JRS International School | Empowering Future Leaders',
  description:
    'JRS International School, Uppal, Hyderabad. Committed to providing quality education with CBSE curriculum, world-class infrastructure, and holistic development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 antialiased font-sans overflow-x-hidden min-h-screen w-full">
        {children}
      </body>
    </html>
  )
}
