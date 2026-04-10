import type { Metadata } from 'next'
import { Mic, Settings } from 'lucide-react'
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
  title: '質問検出モードの使い方 | Flownote チュートリアル',
  description:
    '相手の発言から質問を自動検出してAI回答を生成する方法と、コスト管理について解説します。',
  alternates: {
    canonical: '/tutorials/question-detection',
    languages: { 'ja-JP': '/tutorials/question-detection' },
  },
}

export default function QuestionDetectionPage() {
  return (
    <article id="tutorial-content" className="max-w-2xl mx-auto px-6 md:px-10 py-12">
      <Breadcrumb
        items={[
          { label: 'チュートリアル', href: '/tutorials' },
          { label: '質問検出モード' },
        ]}
      />

      {/* Page header */}
      <div className="mb-10">
        <h1 id="page-title" className="text-3xl font-bold text-[#F5F5F5] mb-4 tracking-tight">
          質問検出モードの使い方
        </h1>
        <p className="text-[#B8B8BE] text-base leading-relaxed">
          質問検出モードは、会議相手の発言をリアルタイムで分析し「質問」と判断された発言を自動的にリストアップします。気づいたタイミングでクリックするだけでAI回答を生成できます。
        </p>
      </div>

      {/* Cost callout — shown upfront */}
      <Callout type="warning" title="コストについて">
        質問検出はOpenAI Realtime APIを使用するため、文字起こしよりもAPIクレジットを消費します。
        使わない時間帯はオフにしておくことをおすすめします。
      </Callout>

      <SectionDivider />

      {/* ── 1. 前提条件 ── */}
      <h2 id="prerequisites" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        前提条件：まず文字起こしを開始する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        質問検出は文字起こし（リスニング）が有効なときだけオンにできます。先に{' '}
        <UITag>
          <Mic size={10} />
          聴く
        </UITag>{' '}
        ボタンで録音を開始してください。
      </p>

      <div className="flex items-center gap-4 p-4 rounded-xl border border-[#2A2A2E] bg-[#111113] mb-8">
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-8 h-8 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/25 flex items-center justify-center">
            <span className="text-xs font-bold text-[#A78BFA]">1</span>
          </div>
          <div className="w-px h-6 bg-[#2A2A2E]" />
          <div className="w-8 h-8 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/25 flex items-center justify-center">
            <span className="text-xs font-bold text-[#A78BFA]">2</span>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-[#F5F5F5] mb-0.5">文字起こしを開始する</p>
            <p className="text-xs text-[#8A8A93]">
              <UITag>
                <Mic size={10} />
                聴く
              </UITag>{' '}
              ボタンをクリック → LIVEインジケーターが点灯
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#F5F5F5] mb-0.5">質問検出をオンにする</p>
            <p className="text-xs text-[#8A8A93]">ヘッダーのトグルスイッチをオンに切り替え</p>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* ── 2. 質問検出をオンにする ── */}
      <h2 id="enable" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        質問検出をオンにする
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        文字起こしが有効になったら、ヘッダー右側にあるiOSスタイルのトグルスイッチで質問検出を有効化します。
      </p>

      <ImagePlaceholder
        label="ヘッダー — 質問検出トグルの位置"
        aspectRatio="4/1"
        description="ヘッダー右側：QDトグル → 聴くボタン → 設定 → 閉じる の順"
      />

      <ul className="space-y-3 mb-6 text-sm text-[#B8B8BE]">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2" />
          トグルが<span className="text-[#F5F5F5] font-medium">白（オン）</span>になると質問検出が開始されます。
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2" />
          トグルにカーソルを合わせると「質問検出」というラベルが表示されます。
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#8A8A93] mt-2" />
          文字起こしが停止している場合、トグルはグレーアウトして操作できません。
        </li>
      </ul>

      <SectionDivider />

      {/* ── 3. 質問タブに切り替える ── */}
      <h2 id="switch-to-questions" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        質問タブに切り替える
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        文字起こしタブと質問タブは画面右上の小さなボタンで切り替えます。
        質問タブには検出された質問がカード形式で並びます。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest">質問タブ（例）</span>
          <span className="px-2 py-0.5 text-[10px] rounded-md bg-[#1C1C1F] border border-[#2A2A2E] text-[#8A8A93]">
            文字起こし
          </span>
        </div>
        <div className="space-y-2">
          {[
            '導入にはどれくらい時間がかかりますか？',
            'セキュリティ対応はどのようになっていますか？',
            '他社との連携はできますか？',
          ].map((q) => (
            <div
              key={q}
              className="px-3 py-2.5 rounded-xl bg-[#1C1C1F] border border-[#2A2A2E] text-xs text-[#B8B8BE]"
            >
              {q}
            </div>
          ))}
        </div>
      </div>

      <Callout type="tip" title="バッジで未読数を確認">
        質問タブを開いていない間に新しい質問が検出されると、文字起こしタブにいても件数バッジが表示されます。会話の流れを止めずに、タイミングを見て切り替えましょう。
      </Callout>

      <SectionDivider />

      {/* ── 4. 回答を生成する ── */}
      <h2 id="generate-answer" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        質問をクリックして回答を生成する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        質問タブに表示された質問カードをクリックすると、AIが即座に回答を生成し始めます。
      </p>

      <Step number={1} title="質問カードをクリックする">
        <p>
          一覧から回答したい質問をクリックします。選択された質問はハイライト表示になります。
        </p>
      </Step>

      <Step number={2} title="回答をストリーミングで確認する">
        <p>
          画面が回答ビューに切り替わり、AIの回答がリアルタイムで流れてきます。
          回答はMarkdown形式でレンダリングされ、箇条書きや太字も正しく表示されます。
        </p>
      </Step>

      <StepLast number={3} title="一覧に戻る">
        <p>
          ヘッダー左の <UITag>←</UITag> ボタンまたは <Kbd>Escape</Kbd> / <Kbd>Backspace</Kbd> で質問リストに戻ります。
          ほかの質問を選んでそのまま回答を生成できます。
        </p>
      </StepLast>

      <ImagePlaceholder
        label="質問検出 — 質問リストと回答ビューの切り替え"
        aspectRatio="3/2"
        description="質問カードをクリック → 回答ビューへ遷移"
      />

      <Callout type="tip" title="一覧をリセットする">
        質問が増えすぎた場合は、タブ左端の <UITag>クリア</UITag> ボタンで一覧をリセットできます（履歴には残ります）。
      </Callout>

      <SectionDivider />

      {/* ── 5. ドキュメントを変更する ── */}
      <h2 id="change-document" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        ドキュメントを変更する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        AIが回答を生成するとき、アップロードした社内ドキュメントをコンテキストとして参照させることができます。
        使用するドキュメントコレクションは設定パネルから切り替えます。
      </p>

      <Step number={1} title="設定パネルを開く">
        <p>
          ヘッダー右の <UITag><Settings size={10} /></UITag> ボタンをクリックします。
          ヘッダー直下に設定パネルがスライドして表示されます。
        </p>
      </Step>

      <StepLast number={2} title="コレクションを選択する">
        <p>
          ドロップダウンから使用するコレクション（ドキュメントセット）を選択します。
          「コンテキストなし」を選ぶと、ドキュメントを参照せずに汎用的な回答を生成します。
        </p>
        <p className="mt-2 text-xs text-[#8A8A93]">
          コレクションの追加・管理はメインウィンドウの「ドキュメント」ページから行います。
        </p>
      </StepLast>

      <Callout type="info" title="コレクションが表示されない場合">
        メインウィンドウでドキュメントをアップロードしてコレクションを作成してください。コレクション一覧は設定パネルを開いたときに自動更新されます。
      </Callout>

      <SectionDivider />

      {/* ── 6. コスト管理 ── */}
      <h2 id="cost" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        使わないときはオフにする
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        質問検出はOpenAI Realtime APIへの常時接続を維持します。接続中はAPI使用量が発生し続けるため、会議の序盤（アイスブレイクなど）や質問が出ない場面ではオフにしておくことを推奨します。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-5 mb-6 space-y-3">
        <p className="text-xs font-semibold text-[#8A8A93] uppercase tracking-widest">推奨の使い方</p>
        <div className="space-y-2">
          {[
            { label: '製品説明フェーズ', hint: 'オフでOK — 質問は少ない', color: 'text-[#8A8A93]' },
            { label: '質疑応答フェーズ', hint: 'オンにする — 質問が集中する', color: 'text-[#A78BFA]' },
            { label: '価格・契約交渉フェーズ', hint: 'オフでOK — 機密性が高い', color: 'text-[#8A8A93]' },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between text-xs">
              <span className="text-[#B8B8BE]">{row.label}</span>
              <span className={`font-medium ${row.color}`}>{row.hint}</span>
            </div>
          ))}
        </div>
      </div>

      <Callout type="warning" title="使用上限に達した場合">
        プランの使用上限に達すると、オーバーレイに警告が表示され録音が自動停止します。プランのアップグレードは<a href="/subscription" className="text-[#A78BFA] underline underline-offset-2">サブスクリプションページ</a>から行えます。
      </Callout>

      {/* Next tutorial */}
      <NextTutorial
        href="/tutorials/workflow"
        label="ワークフロー"
        description="会議終了後の自動処理をテンプレートで素早く設定する方法を学びます"
      />
    </article>
  )
}
