import type { Metadata } from 'next'
import { FileText, BookOpen, Zap, ClipboardList, Plus, ToggleLeft } from 'lucide-react'
import {
  Step,
  StepLast,
  Callout,
  UITag,
  ImagePlaceholder,
  SectionDivider,
  Breadcrumb,
} from '@/components/docs/TutorialComponents'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'プロンプト設定 | Flownote チュートリアル',
  description:
    'システム・クイック・文字起こし・サマリープロンプトの役割と作り方。AIの回答品質を自分好みに最適化する方法を解説します。',
  alternates: {
    canonical: '/tutorials/prompts',
    languages: { 'ja-JP': '/tutorials/prompts' },
  },
}

export default function PromptsPage() {
  return (
    <article id="tutorial-content" className="max-w-2xl mx-auto px-6 md:px-10 py-12">
      <Breadcrumb
        items={[
          { label: 'チュートリアル', href: '/tutorials' },
          { label: 'プロンプト設定' },
        ]}
      />

      {/* Page header */}
      <div className="mb-10">
        <h1 id="page-title" className="text-3xl font-bold text-[#F5F5F5] mb-4 tracking-tight">
          プロンプト設定
        </h1>
        <p className="text-[#B8B8BE] text-base leading-relaxed">
          プロンプトはFlownoteのAIに「どのように振る舞うか」を指示する設定です。用途に合わせて複数種類のプロンプトを使い分けることで、より的確な回答が得られます。
        </p>
      </div>

      <SectionDivider />

      {/* ── 1. プロンプトの種類 ── */}
      <h2 id="overview" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-4 tracking-tight">
        プロンプトの種類
      </h2>

      <div className="space-y-3 mb-8">
        {[
          {
            icon: FileText,
            title: 'ベースプロンプト',
            category: 'システムプロンプト',
            desc: 'すべての回答に適用される基本的な振る舞いの指示。「営業アシスタントとして振る舞う」など。',
            tag: '1つ選択',
          },
          {
            icon: BookOpen,
            title: 'RAGプロンプト',
            category: 'システムプロンプト',
            desc: 'ドキュメントコンテキストを使って回答する際に上書きされるプロンプト。資料に基づいた回答に特化した指示を書く。',
            tag: '1つ選択',
          },
          {
            icon: FileText,
            title: '文字起こしプロンプト',
            category: 'システムプロンプト',
            desc: '文字起こしモードの入力欄から質問した際に使われるプロンプト。会話コンテキストを前提とした指示に適している。',
            tag: '1つ選択',
          },
          {
            icon: Zap,
            title: 'クイックプロンプト',
            category: 'ショートカット',
            desc: 'オーバーレイのワンタップボタンに登録するプロンプト。頻繁に使う定型処理を素早く実行できる。',
            tag: '複数作成・個別ON/OFF',
          },
          {
            icon: ClipboardList,
            title: 'サマリープロンプト',
            category: 'サマリー',
            desc: '会議後のサマリー生成に使われるプロンプト。どのような形式でまとめるかを指示する。',
            tag: '1つ選択',
          },
        ].map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="flex items-start gap-4 p-4 rounded-xl border border-[#2A2A2E] bg-[#111113]"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] flex items-center justify-center mt-0.5">
                <Icon size={14} className="text-[#8A8A93]" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <span className="text-sm font-semibold text-[#F5F5F5]">{item.title}</span>
                    <span className="ml-2 text-[10px] text-[#8A8A93]">{item.category}</span>
                  </div>
                  <span className="shrink-0 px-2 py-0.5 rounded-full bg-[#1C1C1F] border border-[#2A2A2E] text-[10px] text-[#8A8A93]">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-[#8A8A93] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      <Callout type="info" title="プロンプト設定ページの開き方">
        メインウィンドウ（<UITag>Cmd+Shift+M</UITag>）を開き、左サイドバーの「プロンプト」をクリックします。
      </Callout>

      <SectionDivider />

      {/* ── 2. システムプロンプト ── */}
      <h2 id="system-prompts" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        システムプロンプト
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        AIの基本的な人格・役割・回答スタイルを定義するプロンプトです。3種類あり、それぞれ使われる場面が異なります。
      </p>

      <ImagePlaceholder
        label="プロンプトページ — システムプロンプトセクション"
        aspectRatio="16/9"
        description="ベース・RAG・文字起こしの3セクションが縦に並ぶ"
      />

      <h3 id="base-prompt" className="text-base font-semibold text-[#F5F5F5] mb-2 mt-8">
        ベースプロンプト
      </h3>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-4">
        ドキュメントコンテキストが<span className="text-[#F5F5F5] font-medium">ない</span>場合に使われる基本プロンプトです。「どんな会議アシスタントであるか」を定義します。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-4 mb-6">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-2">例</p>
        <p className="text-xs text-[#B8B8BE] leading-relaxed font-mono">
          あなたは法人営業の専門アシスタントです。会議中の質問に対して、簡潔かつ説得力のある回答を日本語で提供してください。回答は3文以内にまとめてください。
        </p>
      </div>

      <h3 id="rag-prompt" className="text-base font-semibold text-[#F5F5F5] mb-2 mt-8">
        RAGプロンプト
      </h3>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-4">
        設定でドキュメントコレクションを選択している場合に使われます。ドキュメントの内容を参照して回答するよう指示するプロンプトを書きます。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-4 mb-6">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-2">例</p>
        <p className="text-xs text-[#B8B8BE] leading-relaxed font-mono">
          あなたは提供された製品資料に精通した営業アシスタントです。質問には必ず添付のドキュメントから根拠を引用しつつ回答してください。資料に記載がない場合は「資料に該当情報はありません」と明示してください。
        </p>
      </div>

      <h3 id="transcript-prompt" className="text-base font-semibold text-[#F5F5F5] mb-2 mt-8">
        文字起こしプロンプト
      </h3>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        文字起こしモードの入力欄やクイックプロンプトから質問した際に適用されます。会話のコンテキスト全体を踏まえた分析や要約に向いています。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-4 mb-6">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-2">例</p>
        <p className="text-xs text-[#B8B8BE] leading-relaxed font-mono">
          あなたは商談の記録を分析する専門家です。提供された会話の文字起こしを読み、指示された内容を簡潔に整理してください。回答は箇条書きを優先してください。
        </p>
      </div>

      <SectionDivider />

      {/* ── 3. クイックプロンプト ── */}
      <h2 id="quick-prompts-section" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        クイックプロンプト
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        文字起こしモードのオーバーレイにワンタップボタンとして表示されるプロンプトです。よく使う処理をあらかじめ登録しておくことで、会議中の操作を最小化できます。
      </p>

      <ImagePlaceholder
        label="オーバーレイ — クイックプロンプトバー"
        aspectRatio="4/1"
        description="⚡ アイコンとともに、有効化されたクイックプロンプトが横並びで表示"
      />

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-5 mb-6">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-4">クイックプロンプトの管理</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <ToggleLeft size={14} className="text-[#A78BFA] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-[#F5F5F5] mb-0.5">ON/OFFトグル</p>
              <p className="text-xs text-[#8A8A93]">各クイックプロンプトにはトグルがあり、オフにするとオーバーレイのボタンから非表示になります。プロンプト自体は削除されません。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Plus size={14} className="text-[#A78BFA] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-[#F5F5F5] mb-0.5">デフォルトプロンプト</p>
              <p className="text-xs text-[#8A8A93]">「要約する」「次のアクション」などのデフォルトプロンプトは常にオーバーレイに表示されます。カスタムプロンプトはその後に追加されます。</p>
            </div>
          </div>
        </div>
      </div>

      <Callout type="tip" title="クイックプロンプトの書き方のコツ">
        クイックプロンプトのコンテンツには文字起こし全体が自動で渡されます。「以下の会話を要約してください：」のような前置きは不要です。直接「3行で要約する」「課題と次のアクションを箇条書きにする」のように書くと簡潔です。
      </Callout>

      <SectionDivider />

      {/* ── 4. サマリープロンプト ── */}
      <h2 id="summary-prompts" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        サマリープロンプト
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        会議後のサマリー生成機能で使われるプロンプトです。議事録形式、アクションアイテム形式など、チームの運用に合わせた形式を指定できます。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-4 mb-6">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-2">例</p>
        <p className="text-xs text-[#B8B8BE] leading-relaxed font-mono">
          商談の文字起こしをもとに、以下の形式で議事録を作成してください：<br />
          <br />
          【商談概要】（2〜3行）<br />
          【顧客の主な質問・懸念点】（箇条書き）<br />
          【ネクストアクション】（担当者・期日つきで箇条書き）
        </p>
      </div>

      <SectionDivider />

      {/* ── 5. プロンプトを作成・編集する ── */}
      <h2 id="create-edit" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        プロンプトを作成・編集する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        プロンプトページで各セクションの「+ 追加」ボタンをクリックするとフォームが表示されます。
      </p>

      <Step number={1} title="追加ボタンをクリックする">
        <p>
          追加したいセクション（ベース・RAG・文字起こし・クイック・サマリー）のヘッダーにある <UITag><Plus size={10} />追加</UITag> ボタンをクリックします。
        </p>
      </Step>

      <Step number={2} title="名前とコンテンツを入力する">
        <p>
          <span className="text-[#F5F5F5] font-medium">名前</span>：プロンプトを識別するための表示名（クイックプロンプトの場合はボタンのラベルになります）
        </p>
        <p className="mt-2">
          <span className="text-[#F5F5F5] font-medium">コンテンツ</span>：AIへの指示文。自然な日本語で書いてください。
        </p>
      </Step>

      <StepLast number={3} title="保存して選択する">
        <p>
          「保存」をクリックするとリストに追加されます。システムプロンプト（ベース・RAG・文字起こし・サマリー）は一覧の中から1つを選択（ラジオボタン方式）して有効にします。選択中のプロンプトにはチェックマークが付きます。
        </p>
      </StepLast>

      <Callout type="info" title="デフォルトプロンプトについて">
        各種別には最初からデフォルトプロンプトが用意されています。デフォルトは編集・削除できません。新しいプロンプトを作成して選択することで、デフォルトを上書きできます。
      </Callout>

      <Callout type="warning" title="プランによる上限">
        プロンプトの作成数にはプランによる上限があります。上限に達した場合、「+ 追加」ボタンがグレーアウトして無効化されます。
      </Callout>

      {/* Back to overview */}
      <div className="mt-14 mb-10 p-5 rounded-2xl border border-[#2A2A2E] bg-[#111113]">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-3">
          すべてのチュートリアルを完了しました
        </p>
        <p className="text-sm text-[#B8B8BE] leading-relaxed mb-4">
          Flownoteの主要機能をひと通り学びました。困ったときはいつでもこのガイドに戻ってきてください。
        </p>
        <Link
          href="/tutorials"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#A78BFA] hover:text-[#C4B5FD] transition-colors"
        >
          チュートリアル一覧に戻る
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}
