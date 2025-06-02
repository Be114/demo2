import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NTTコムウェア ソリューション',
  description: 'NTTコムウェアの様々なソリューションを紹介し、企業の課題解決に貢献するためのWebサイト',
  keywords: 'NTTコムウェア, ソリューション, DX, デジタル変革, システム開発, クラウド, AI',
  authors: [{ name: 'NTTコムウェア' }],
  robots: 'index, follow',
  openGraph: {
    title: 'NTTコムウェア ソリューション',
    description: 'NTTコムウェアの様々なソリューションを紹介し、企業の課題解決に貢献するためのWebサイト',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}