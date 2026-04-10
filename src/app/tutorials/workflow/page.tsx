import type { Metadata } from 'next'
import { Zap, GitBranch, MessageSquare, Filter, CheckCircle } from 'lucide-react'
import {
  Step,
  StepLast,
  Callout,
  UITag,
  ImagePlaceholder,
  NextTutorial,
  SectionDivider,
  Breadcrumb,
} from '@/components/docs/TutorialComponents'

export const metadata: Metadata = {
  title: 'ワークフローの設定と使い方 | Flownote チュートリアル',
  description:
    'テンプレートを使ったワークフロー設定、Slack連携、変数の使い方、実行履歴の確認方法を解説します。',
  alternates: {
    canonical: '/tutorials/workflow',
    languages: { 'ja-JP': '/tutorials/workflow' },
  },
}

export default function WorkflowPage() {
  return (
    <article id="tutorial-content" className="max-w-2xl mx-auto px-6 md:px-10 py-12">
      <Breadcrumb
        items={[
          { label: 'チュートリアル', href: '/tutorials' },
          { label: 'ワークフロー' },
        ]}
      />

      {/* Page header */}
      <div className="mb-10">
        <h1 id="page-title" className="text-3xl font-bold text-[#F5F5F5] mb-4 tracking-tight">
          ワークフローの設定と使い方
        </h1>
        <p className="text-[#B8B8BE] text-base leading-relaxed">
          ワークフローを使うと、会議終了後や特定のスケジュールで自動処理を実行できます。AIによる要約生成、条件分岐、Slackへの自動送信を組み合わせて、会議後のフォローアップをすべて自動化できます。
        </p>
      </div>

      <SectionDivider />

      {/* ── 1. ワークフローとは ── */}
      <h2 id="overview" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        ワークフローとは
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        ワークフローは「トリガー（いつ）」と「ステップ（何をする）」を組み合わせた自動処理フローです。ビジュアルなブロック操作で、コーディング不要で設定できます。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-5 mb-8">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-4">ワークフローの構造</p>
        <div className="space-y-2">
          {[
            { icon: Zap, label: 'トリガー', desc: 'ワークフローを開始するイベント（会議終了・スケジュール）', accent: true },
            { icon: GitBranch, label: 'AI処理ステップ', desc: '文字起こしや変数を使ってAIがテキストを生成', accent: false },
            { icon: Filter, label: '条件分岐ステップ', desc: '特定のキーワードや条件で処理を分岐', accent: false },
            { icon: MessageSquare, label: 'Slack送信ステップ', desc: '指定チャンネルにメッセージを自動送信', accent: false },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`flex items-start gap-3 p-3 rounded-xl border ${
                  item.accent
                    ? 'border-[#A78BFA]/20 bg-[#A78BFA]/5'
                    : 'border-[#2A2A2E] bg-[#1C1C1F]'
                }`}
              >
                <Icon
                  size={14}
                  className={`mt-0.5 shrink-0 ${item.accent ? 'text-[#A78BFA]' : 'text-[#8A8A93]'}`}
                />
                <div>
                  <p className="text-xs font-semibold text-[#F5F5F5] mb-0.5">{item.label}</p>
                  <p className="text-[11px] text-[#8A8A93]">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <SectionDivider />

      {/* ── 2. テンプレートから始める ── */}
      <h2 id="templates" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        テンプレートから始める
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        ワークフローページを初めて開くと、すぐに使えるテンプレートが表示されます。テンプレートを選ぶと、すでに動作する設定が入った状態でエディターが開きます。
      </p>

      <div className="space-y-3 mb-8">
        {[
          {
            title: '会議終了 → 評価レポートをSlackへ',
            desc: '会議の内容をAIが評価し、改善点をSlackに自動送信します。',
          },
          {
            title: '会議終了 → ネクストアクションをSlackへ',
            desc: '会議で決まったアクションアイテムを整理してSlackに送信します。',
          },
          {
            title: '毎朝7時 → 前日の会議サマリーをSlackへ',
            desc: '前日の会議内容を朝にダイジェストとして受け取れます。',
          },
        ].map((t) => (
          <div
            key={t.title}
            className="flex items-start gap-4 p-4 rounded-xl border border-[#2A2A2E] bg-[#1C1C1F]"
          >
            <CheckCircle size={14} className="text-[#A78BFA] mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#F5F5F5] mb-0.5">{t.title}</p>
              <p className="text-xs text-[#8A8A93] leading-relaxed">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="tip" title="テンプレートをそのまま使う">
        テンプレートを選択後、Slackチャンネルを指定して「有効化」するだけで動作します。最初は編集せずそのまま試してみましょう。
      </Callout>

      <SectionDivider />

      {/* ── 3. トリガーを設定する ── */}
      <h2 id="triggers" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-4 tracking-tight">
        トリガーを設定する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        トリガーはワークフローの「起点」です。エディター最上部に常に1つだけ配置され、削除できません。ドロップダウンからトリガーの種類を選択します。
      </p>

      <h3 id="trigger-meeting-end" className="text-base font-semibold text-[#F5F5F5] mb-2 mt-6">
        会議終了トリガー
      </h3>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-4">
        オーバーレイを閉じる（会議セッションを終了する）タイミングで自動実行されます。文字起こし全文が変数として利用可能になります。最も一般的なトリガーです。
      </p>

      <h3 id="trigger-schedule" className="text-base font-semibold text-[#F5F5F5] mb-2 mt-6">
        スケジュールトリガー
      </h3>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        毎日・毎週など指定した日時に自動実行されます。インラインで時間と曜日のピッカーが表示されます。前日の複数の会議を朝にまとめて処理するといった使い方に適しています。
      </p>

      <SectionDivider />

      {/* ── 4. ステップを追加する ── */}
      <h2 id="steps" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-4 tracking-tight">
        ステップを追加する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        トリガーの下にステップを積み重ねて処理を構築します。ステップ間の「+」ボタンをクリックすると任意の位置にステップを追加できます。
      </p>

      <h3 id="step-ai" className="text-base font-semibold text-[#F5F5F5] mb-2 mt-6">
        AI処理ステップ
      </h3>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-4">
        AIにテキストを生成させます。プロンプトを入力し、変数（文字起こし結果など）を埋め込むことで、会議内容に合わせた柔軟な出力が得られます。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-4 mb-6">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-3">AI処理ステップ — プロンプト例</p>
        <div className="bg-[#1C1C1F] border border-[#2A2A2E] rounded-xl p-3 text-xs text-[#B8B8BE] leading-relaxed font-mono">
          以下の商談内容を分析し、主要な質問と担当者のコメントを箇条書きにまとめてください。
          <br /><br />
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#A78BFA]/15 border border-[#A78BFA]/30 text-[#C4B5FD] text-[11px] not-italic font-sans">
            文字起こし
          </span>
        </div>
      </div>

      <h3 id="step-condition" className="text-base font-semibold text-[#F5F5F5] mb-2 mt-6">
        条件分岐ステップ
      </h3>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-4">
        上流のステップの出力内容によって後続の処理を変えることができます。難しい論理式は不要で、フォーム形式で設定できます。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-4 mb-6">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-3">条件分岐の設定例</p>
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-[#8A8A93]">もし</span>
          <span className="px-2 py-1 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] text-[#B8B8BE]">ステップ1の結果 ▼</span>
          <span className="text-[#8A8A93]">が</span>
          <span className="px-2 py-1 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] text-[#B8B8BE]">含む ▼</span>
          <input
            readOnly
            className="px-2 py-1 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] text-[#B8B8BE] w-24 outline-none"
            value="課題"
          />
          <span className="text-[#8A8A93]">なら</span>
          <span className="px-2 py-1 rounded-lg bg-[#1C1C1F] border border-[#2A2A2E] text-[#B8B8BE]">続ける ▼</span>
        </div>
      </div>

      <h3 id="step-slack" className="text-base font-semibold text-[#F5F5F5] mb-2 mt-6">
        Slack送信ステップ
      </h3>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-4">
        指定したSlackチャンネルに自動でメッセージを送信します。送信前にプレビューで確認できます。
      </p>

      <Callout type="info" title="Slack未連携の場合">
        Slack送信ステップを追加すると、未連携の場合はステップ内に「Slackを連携する」ボタンが表示されます。クリックするとOAuth画面が開き、完了後に自動で元の作業に戻ります。
      </Callout>

      <SectionDivider />

      {/* ── 5. 変数を使う ── */}
      <h2 id="variables" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        変数を使う
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        各ステップの出力は変数として後続のステップで使えます。変数は「{'{}'} 」ボタンから挿入でき、プロンプトやSlackメッセージの中に色付きのピル（タグ）として表示されます。コードを書く必要はありません。
      </p>

      <ImagePlaceholder
        label="変数ピル — プロンプトエディター内の表示"
        aspectRatio="4/1"
        description="紫色のピルが変数を表す。クリックで削除・編集が可能"
      />

      <div className="space-y-4 mb-6">
        <div className="p-4 rounded-xl border border-[#2A2A2E] bg-[#111113]">
          <p className="text-xs font-semibold text-[#F5F5F5] mb-1">変数の挿入方法</p>
          <p className="text-xs text-[#8A8A93] leading-relaxed">
            プロンプトやメッセージ作成欄の <UITag>{'{ }'}</UITag> ボタンをクリックすると、使用可能な変数のリストがパネルで表示されます。選択するとカーソル位置にピルが挿入されます。
          </p>
        </div>
        <div className="p-4 rounded-xl border border-[#2A2A2E] bg-[#111113]">
          <p className="text-xs font-semibold text-[#F5F5F5] mb-1">ピルが赤くなった場合</p>
          <p className="text-xs text-[#8A8A93] leading-relaxed">
            参照先のステップが削除された場合、ピルが赤くなりエラー状態になります。ワークフローを有効化するには、その変数を削除するか別のステップを参照し直してください。
          </p>
        </div>
      </div>

      <Callout type="tip" title="変数の名前を変更できます">
        各ステップには「ステップ1の結果」のように自動で名前が付きます。ステップの名前フィールドを編集することで変数名を分かりやすく変更できます（例：「要約テキスト」）。
      </Callout>

      <SectionDivider />

      {/* ── 6. Slackを連携する ── */}
      <h2 id="slack" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        Slackを連携する
      </h2>

      <Step number={1} title="Slack送信ステップを追加する">
        <p>
          ワークフローエディターで「+」ボタンをクリックし、<UITag>Slack送信</UITag>を選択します。
        </p>
      </Step>

      <Step number={2} title="Slackを連携する">
        <p>
          ステップ内の <UITag>Slackを連携する</UITag> ボタンをクリックします。OAuth認証画面がモーダルで開くので、ワークスペースを選択して「許可する」をクリックします。
        </p>
      </Step>

      <StepLast number={3} title="チャンネルを選択する">
        <p>
          連携が完了すると、チャンネルのドロップダウンが使用可能になります。送信先のチャンネルを選んでください（パブリックチャンネルとプライベートチャンネルの両方が表示されます）。
        </p>
        <p className="mt-2">
          <UITag>プレビュー</UITag> ボタンをクリックすると、実際に送信されるSlackメッセージの見た目を事前に確認できます。
        </p>
      </StepLast>

      <SectionDivider />

      {/* ── 7. 有効化する ── */}
      <h2 id="activate" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        ワークフローを有効化する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        ワークフローを保存してから有効化することでトリガーが待機状態になります。
      </p>

      <Step number={1} title="名前をつけて保存する">
        <p>
          エディター上部の名前フィールドに分かりやすい名前を入力し（例：「商談後レポート送信」）、<UITag>保存</UITag> ボタンをクリックします。
        </p>
      </Step>

      <StepLast number={2} title="有効化トグルをオンにする">
        <p>
          保存後、エディター上部の <UITag>有効化</UITag> トグルが操作可能になります。オンにするとワークフローが有効になり、トリガー条件が満たされるたびに自動実行されます。
        </p>
        <p className="mt-2 text-xs text-[#8A8A93]">
          一覧ページのカード上のトグルからもオン/オフを切り替えられます。エディターを開かなくても一時停止できます。
        </p>
      </StepLast>

      <SectionDivider />

      {/* ── 8. 実行履歴 ── */}
      <h2 id="run-history" className="text-xl font-semibold text-[#F5F5F5] mt-10 mb-2 tracking-tight">
        実行履歴を確認する
      </h2>
      <p className="text-sm text-[#B8B8BE] leading-relaxed mb-6">
        ワークフロー一覧ページの各カードには最終実行日時とステータスが表示されます。エラーが発生した場合はカードのステータスが赤になります。
      </p>

      <div className="rounded-2xl border border-[#2A2A2E] bg-[#111113] p-5 mb-6">
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-4">ワークフローカードのステータス</p>
        <div className="space-y-2">
          {[
            { dot: 'bg-green-400', label: '正常', desc: '最後の実行が正常に完了しました' },
            { dot: 'bg-red-400', label: 'エラー', desc: 'エラーが発生しました。カードをクリックして詳細を確認してください' },
            { dot: 'bg-[#8A8A93]', label: '未設定', desc: 'まだ有効化されていません' },
          ].map((s) => (
            <div key={s.label} className="flex items-start gap-3 text-xs">
              <span className={`w-2 h-2 rounded-full ${s.dot} mt-1.5 shrink-0`} />
              <div>
                <span className="font-semibold text-[#F5F5F5] mr-2">{s.label}</span>
                <span className="text-[#8A8A93]">{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Callout type="tip" title="実行内容を確認する">
        カードをクリックしてエディターを開くと、最後の実行結果（各ステップの入出力）を確認できます。Slackに何が送信されたかも記録に残ります。
      </Callout>

      {/* Next tutorial */}
      <NextTutorial
        href="/tutorials/prompts"
        label="プロンプト設定"
        description="システム・クイック・文字起こし・サマリープロンプトの使い分けを学びます"
      />
    </article>
  )
}
