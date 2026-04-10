import type { Metadata } from 'next'
import Navbar from '@/components/landing-page/Navbar'
import Footer from '@/components/landing-page/Footer'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | Flownote',
  description: '株式会社Core7が提供するFlownoteの特定商取引法に基づく表記ページです。販売事業者・所在地・連絡先・料金・支払方法などを記載しています。',
  alternates: {
    canonical: '/tokushoho',
    languages: { 'ja-JP': '/tokushoho' },
  },
}

export default function TokushohoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F0F10] flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
