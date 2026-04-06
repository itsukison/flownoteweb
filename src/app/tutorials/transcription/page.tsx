import type { Metadata } from 'next'
import { Mic, MicOff, Zap, History, Settings } from 'lucide-react'
import {
  Step,
  StepLast,
  Callout,
  UITag,
  Kbd,
  ImagePlaceholder,
  NextTutorial,
  SectionDivider,
  Breadcrumb,
} from '@/components/docs/TutorialComponents'

export const metadata: Metadata = {
  title: '文字起こしモードの使い方 | Flownote チュートリアル',
  description:
    'Flownoteの文字起こしモードを使ってリアルタイムで会話を記録し、クイックプロンプトや手入力でAIに質問する方法を解説します。',
}

export default function TranscriptionPage() {
  return (
    <article id="tutorial-content" className="max-w-2xl mx-auto px-6 md:px-10 py-12">
      <Breadcrumb
        items={[
          { label: 'チュートリアル', href: '/tutorials' },
          { label: '文字起こしモード' },
        ]}
      />

      {/* Page header */}
      <div className="mb-10">
        <h1 id="page-title" className="text-3xl font-bold text-[#F5F5F5] mb-4 tracking-tight">
          文字起こしモードの使い方
        </h1>
        <p className="text-[#B8B8BE] text-base leading-relaxed">
          文字起こしモードは商談中の会話をリアルタイムで記録し、AIに即座に質問できるFlownoteの中心機能です。クイックプロンプト、手動入力、過去の回答参照まで、この画面ですべて完結します。
        </p>
      </div>

      <SectionDivider />

      {/* ── 1. 文字起こしを開始する ── */}
      <h2 id="start" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        文字起こしを開始する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-8">
        フローティングオーバーレイの右上にある{' '}
        <UITag>
          <Mic size={10} />
          聴く
        </UITag>{' '}
        ボタンをクリックすることで文字起こしが始まります。
      </p>

      <Step number={1} title="オーバーレイを表示する">
        <p>
          グローバルショートカット <Kbd>Cmd+Shift+C</Kbd>（Windows: <Kbd>Ctrl+Shift+C</Kbd>）でオーバーレイを呼び出します。または、メインウィンドウのメニューから起動することもできます。
        </p>
      </Step>

      <Step number={2} title="聴くボタンをクリックする">
        <p>
          ヘッダー右側の{' '}
          <UITag>
            <Mic size={10} />
            聴く
          </UITag>{' '}
          ボタンを押します。初回のみ、マイクと画面録音の権限を求めるダイアログが表示されます。両方「許可」してください。
        </p>
      </Step>

      <StepLast number={3} title="LIVEインジケーターを確認する">
        <p>
          ヘッダー左側に{' '}
          <UITag>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 inline-block" />
            LIVE
          </UITag>{' '}
          が点滅表示されれば録音中です。しばらくすると会話の文字起こしが画面に流れ始めます。
        </p>
        <p className="mt-2">
          停止するときは同じボタン（停止中は{' '}
          <UITag>
            <MicOff size={10} />
            停止
          </UITag>{' '}
          と表示）を再クリックします。
        </p>
      </StepLast>

      <ImagePlaceholder
        label="オーバーレイ — 文字起こし中の画面"
        aspectRatio="3/2"
        description="LIVEインジケーター、聴くボタン、文字起こしエリアの位置関係"
      />

      <Callout type="info" title="マイクと画面録音の両方が必要です">
        Flownoteはあなたのマイク（自分の声）と画面録音（相手の音声）を同時にキャプチャします。どちらかが許可されていない場合、発話者の識別が正確に行われません。
      </Callout>

      <SectionDivider />

      {/* ── 2. 文字起こし画面を読む ── */}
      <h2 id="reading-transcript" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        文字起こし画面を読む
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        録音が始まると、会話がリアルタイムでテキストとして表示されます。各発言には話者ラベルとタイムスタンプが付きます。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-5 mb-6 space-y-4">
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-[10px] font-bold text-[#B8B8BE]">あなた</span>
            <span className="text-[10px] text-[#8A8A93]">00:00</span>
          </div>
          <p className="text-xs text-[#D4D4D8]">弊社のプランについてご説明させていただきます。</p>
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-[10px] font-bold text-[#8A8A93]">相手</span>
            <span className="text-[10px] text-[#8A8A93]">00:18</span>
          </div>
          <p className="text-xs text-[#D4D4D8]">導入にはどれくらい時間がかかりますか？</p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        <li className="flex gap-3 text-sm text-[#B8B8BE]">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2" />
          <span>
            <span className="font-semibold text-[#F5F5F5]">あなた</span> ― あなた自身の発言（マイク入力）
          </span>
        </li>
        <li className="flex gap-3 text-sm text-[#B8B8BE]">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#8A8A93] mt-2" />
          <span>
            <span className="font-semibold text-[#F5F5F5]">相手</span> ― 会議相手の発言（画面録音入力）
          </span>
        </li>
        <li className="flex gap-3 text-sm text-[#B8B8BE]">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#8A8A93] mt-2" />
          <span>
            <span className="font-semibold text-[#F5F5F5]">タイムスタンプ</span> ― 録音開始からの経過時間（mm:ss）
          </span>
        </li>
      </ul>

      <Callout type="tip" title="自動スクロール">
        文字起こし中は最新の発言に自動スクロールします。ウィンドウを手動でスクロールアップすると自動スクロールが一時停止し、下まで戻ると再開します。
      </Callout>

      <SectionDivider />

      {/* ── 3. クイックプロンプトを使う ── */}
      <h2 id="quick-prompts" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        クイックプロンプトを使う
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        文字起こしが始まると、入力欄の上に{' '}
        <UITag>
          <Zap size={10} />
        </UITag>{' '}
        アイコンとともにクイックプロンプトのボタンが並びます。これは「現在の文字起こし全体を使ってこのプロンプトを実行する」ワンタップボタンです。
      </p>

      <ImagePlaceholder
        label="クイックプロンプトバー — 入力欄の上部"
        aspectRatio="4/1"
        description="⚡ アイコンと横並びのボタン群"
      />

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-5 mb-6">
        <p className="text-xs font-semibold text-[#8A8A93] uppercase tracking-widest mb-3">デフォルトのクイックプロンプト例</p>
        <div className="flex flex-wrap gap-2">
          {['要約する', '次のアクション', '懸念点を整理', 'フォローアップ文を作成'].map((label) => (
            <span
              key={label}
              className="px-2.5 py-1 text-[11px] text-[#B8B8BE] bg-[#1C1C1F] border border-[#2A2A2E] rounded-md"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        クイックプロンプトはプロンプト設定ページでカスタマイズ・追加できます。詳しくは{' '}
        <a href="/tutorials/prompts#quick-prompts-section" className="text-[#A78BFA] hover:text-[#C4B5FD] underline underline-offset-2 transition-colors">
          プロンプト設定チュートリアル
        </a>{' '}
        を参照してください。
      </p>

      <Callout type="tip" title="プロンプトページへのナビゲーション">
        クイックプロンプトをカスタマイズしたい場合は、メインウィンドウ（<Kbd>Cmd+Shift+M</Kbd>）を開き、サイドバーの「プロンプト」をクリックしてください。
      </Callout>

      <SectionDivider />

      {/* ── 4. 質問を手入力する ── */}
      <h2 id="manual-input" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        質問を手入力する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        クイックプロンプト以外にも、入力ボックスに自由に質問を入力してAIに問いかけることができます。文字起こしの内容が自動的にコンテキストとして使われます。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-4 mb-6 flex items-center gap-3">
        <div className="flex-1 text-xs text-[#8A8A93]">文字起こしについて質問する…</div>
        <div className="w-6 h-6 rounded-md bg-[#1C1C1F] border border-[#2A2A2E] flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#8A8A93]">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>

      <ul className="space-y-3 mb-6 text-sm text-[#B8B8BE]">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2" />
          テキストを入力し、<Kbd>Enter</Kbd> または右の送信ボタンをクリックします。
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2" />
          回答が生成されている最中は入力ボックスが無効化されます。
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2" />
          設定でドキュメント（コレクション）を選択している場合、その内容も回答に反映されます。
        </li>
      </ul>

      <Callout type="info" title="文字起こしが始まってから質問できます">
        入力ボックスとクイックプロンプトは、文字起こしが開始されて会話が記録されてから表示されます。まだ録音していない場合は先に<UITag><Mic size={10} />聴く</UITag>ボタンを押してください。
      </Callout>

      <SectionDivider />

      {/* ── 5. AI回答を確認する ── */}
      <h2 id="ai-response" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        AI回答を確認する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        質問を送信すると、文字起こしビューがAI回答ビューに切り替わります。回答はMarkdown形式でストリーミング表示されます。
      </p>

      <ImagePlaceholder
        label="AI回答ビュー — 質問と回答の表示"
        aspectRatio="3/2"
        description="上部に質問テキスト、下部に回答がストリーミング表示される"
      />

      <ul className="space-y-3 mb-6 text-sm text-[#B8B8BE]">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2" />
          ヘッダー左の <UITag>←</UITag> ボタンまたはキーボードの <Kbd>Escape</Kbd> で文字起こし画面に戻ります。
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2" />
          この回答は自動的に履歴に保存されます。会議中に複数回質問しても、すべて記録されます。
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2" />
          回答生成中でも録音は継続しています。会議の流れを妨げません。
        </li>
      </ul>

      <SectionDivider />

      {/* ── 6. 過去の回答を振り返る ── */}
      <h2 id="history" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        過去の回答を振り返る
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        会議中に生成したすべてのAI回答は「履歴」タブに蓄積されます。会議終盤の振り返りや、後から内容を確認するときに活用できます。
      </p>

      <Step number={1} title="履歴タブを開く">
        <p>
          ヘッダー左端のFlownoteロゴボタンをクリックします。これが履歴タブの開閉トグルです。
          クリックすると画面が「履歴」ビューに切り替わり、このセッション中に生成した回答の一覧が新しい順に表示されます。
        </p>
      </Step>

      <StepLast number={2} title="回答をタップして展開する">
        <p>
          一覧の中の質問テキストをクリックすると、その回答の全文が表示されます。
          再度ロゴボタンをクリック（または <Kbd>←</Kbd> ボタン）で一覧に戻ります。
        </p>
      </StepLast>

      <Callout type="warning" title="履歴はセッション内のみ保持されます">
        オーバーレイを閉じると、履歴はリセットされます。重要な回答はコピーしてメモなどに保存しておきましょう。ワークフロー機能を使うと、会議終了後に自動でSlackへ送信することもできます。
      </Callout>

      {/* Next tutorial */}
      <NextTutorial
        href="/tutorials/question-detection"
        label="質問検出モード"
        description="相手の発言から質問を自動検出してAI回答を生成する方法を学びます"
      />
    </article>
  )
}
