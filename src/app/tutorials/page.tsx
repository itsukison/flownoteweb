import Link from 'next/link'
import { FileText, Zap, GitBranch, SlidersHorizontal, ArrowRight, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'チュートリアル概要 | Flownote',
  description: 'Flownoteの使い方ガイド一覧。文字起こし、質問検出、ワークフロー、プロンプト設定の4つのチュートリアルで基本操作をマスターしましょう。',
}

const tutorials = [
  {
    href: '/tutorials/transcription',
    icon: FileText,
    number: '01',
    title: '文字起こしモード',
    description:
      'リアルタイムで会話を記録し、クイックプロンプトや手入力でAIに質問する基本的な使い方を学びます。',
    time: '約5分',
    topics: ['聴くボタンで録音開始', 'クイックプロンプト', '手動で質問を入力', '過去の回答を振り返る'],
  },
  {
    href: '/tutorials/question-detection',
    icon: Zap,
    number: '02',
    title: '質問検出モード',
    description:
      '相手の発言から質問を自動で検出し、AI回答を素早く生成する方法とコスト管理について解説します。',
    time: '約4分',
    topics: ['検出トグルの操作', '質問タブへの切り替え', 'ドキュメントの変更', 'コスト節約のコツ'],
  },
  {
    href: '/tutorials/workflow',
    icon: GitBranch,
    number: '03',
    title: 'ワークフロー',
    description:
      '会議後の自動処理を設定します。テンプレート、Slack連携、変数の使い方まで丁寧に解説します。',
    time: '約8分',
    topics: ['テンプレートで即スタート', 'トリガーの設定', '変数（ピル）の挿入', 'Slack連携'],
  },
  {
    href: '/tutorials/prompts',
    icon: SlidersHorizontal,
    number: '04',
    title: 'プロンプト設定',
    description:
      'システム・クイック・文字起こし・サマリープロンプトの役割と作り方を分かりやすく解説します。',
    time: '約6分',
    topics: ['ベース・RAG・文字起こし', 'クイックプロンプト', 'サマリープロンプト', '作成・編集方法'],
  },
]

export default function TutorialsPage() {
  return (
    <article id="tutorial-content" className="max-w-2xl mx-auto px-6 md:px-10 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-xs font-medium text-[#A78BFA] mb-6">
          ドキュメント
        </div>
        <h1
          id="overview"
          className="text-3xl font-bold text-[#F5F5F5] mb-4 tracking-tight"
        >
          Flownoteの使い方
        </h1>
        <p className="text-[#B8B8BE] text-base leading-relaxed">
          Flownoteを最大限に活用するための4つのガイドです。順番に読むか、必要なトピックから始めてください。
        </p>
      </div>

      {/* Tutorial cards */}
      <div className="space-y-4">
        {tutorials.map((t) => {
          const Icon = t.icon
          return (
            <Link
              key={t.href}
              href={t.href}
              className="group block p-6 rounded-2xl border border-[#2A2A2E] bg-[#111113] hover:border-[#A78BFA]/35 hover:bg-[#A78BFA]/[0.03] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1C1C1F] border border-[#2A2A2E] flex items-center justify-center group-hover:border-[#A78BFA]/30 transition-colors">
                  <Icon
                    size={18}
                    className="text-[#8A8A93] group-hover:text-[#A78BFA] transition-colors"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest">
                      {t.number}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-[#8A8A93]">
                      <Clock size={10} />
                      {t.time}
                    </span>
                  </div>
                  <h2 className="font-semibold text-[#F5F5F5] mb-1.5 group-hover:text-[#A78BFA] transition-colors text-base">
                    {t.title}
                  </h2>
                  <p className="text-sm text-[#8A8A93] leading-relaxed mb-4">{t.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded-full bg-[#1C1C1F] border border-[#2A2A2E] text-[10px] text-[#8A8A93]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#8A8A93] group-hover:text-[#A78BFA] group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
                />
              </div>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
