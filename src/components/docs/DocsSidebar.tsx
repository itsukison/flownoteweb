'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, Zap, GitBranch, SlidersHorizontal, LayoutGrid } from 'lucide-react'

const navItems = [
  { href: '/tutorials/transcription', label: '文字起こしモード', icon: FileText },
  { href: '/tutorials/question-detection', label: '質問検出モード', icon: Zap },
  { href: '/tutorials/workflow', label: 'ワークフロー', icon: GitBranch },
  { href: '/tutorials/prompts', label: 'プロンプト設定', icon: SlidersHorizontal },
]

export default function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen overflow-y-auto border-r border-[#2A2A2E] bg-[#0F0F10] z-40 pt-20 hidden md:block">
      <nav className="px-3 py-6">
        <Link
          href="/tutorials"
          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors mb-2 ${
            pathname === '/tutorials'
              ? 'bg-[#A78BFA]/10 text-[#A78BFA] font-medium'
              : 'text-[#8A8A93] hover:text-[#F5F5F5] hover:bg-white/5'
          }`}
        >
          <LayoutGrid size={14} className="shrink-0" />
          チュートリアル概要
        </Link>

        <div className="mt-4 pt-4 border-t border-[#2A2A2E]">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8A8A93] mb-2 px-3">
            使い方ガイド
          </p>
          <div className="space-y-0.5 mt-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-[#A78BFA]/10 text-[#A78BFA] font-medium'
                      : 'text-[#B8B8BE] hover:text-[#F5F5F5] hover:bg-white/5'
                  }`}
                >
                  <Icon size={14} className="shrink-0" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </aside>
  )
}
