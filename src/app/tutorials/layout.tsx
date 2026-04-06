import type { Metadata } from 'next'
import Navbar from '@/components/landing-page/Navbar'
import DocsSidebar from '@/components/docs/DocsSidebar'
import TableOfContents from '@/components/docs/TableOfContents'

export const metadata: Metadata = {
  title: 'チュートリアル | Flownote',
  description:
    'Flownoteの使い方ガイド。文字起こしモード、質問検出、ワークフロー、プロンプト設定の詳細な手順を解説します。',
}

export default function TutorialsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F0F10]">
      <Navbar />
      <DocsSidebar />
      <TableOfContents />
      <main className="pl-0 md:pl-64 xl:pr-52 pt-20 min-h-screen">
        {children}
      </main>
    </div>
  )
}
