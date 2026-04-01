import type { Metadata } from "next";
import {
  PageHero,
  AnswerSummary,
  KeyFacts,
  FeatureList,
  FaqList,
  InlineLinks,
  CtaBanner,
} from "@/components/marketing/MarketingBlocks";

export const metadata: Metadata = {
  title: "フローティングウィンドウ | Flownote",
  description:
    "Flownoteのフローティングウィンドウは会議の隅に常駐し、必要なときだけ回答を確認できる商談AIアシスタントの機能です。",
  alternates: {
    canonical: "/features/floating-window",
  },
};

export default function FloatingWindowPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="機能"
        title="フローティングウィンドウ"
        description="会議の邪魔をせず、必要な瞬間だけ情報を確認できる小さなウィンドウ。商談の流れを途切れさせずに回答を参照できます。"
      />

      <AnswerSummary
        title="フローティングウィンドウで実現できること"
        items={[
          {
            label: "特徴",
            value: "会議の隅に常駐し、必要なときだけ開く設計です。",
          },
          {
            label: "使いどころ",
            value: "価格・契約条件・導入効果などの質問に即応したい場面。",
          },
          {
            label: "対象職種",
            value: "営業・プリセールス・CS・コンサル",
          },
          {
            label: "対応環境",
            value: "Mac / Windows（デスクトップアプリ）",
          },
        ]}
      />

      <KeyFacts
        items={[
          { label: "プロダクト", value: "商談AIアシスタント（デスクトップアプリ）" },
          { label: "UIの特徴", value: "会議の邪魔をしない常駐ウィンドウ" },
          { label: "利用シーン", value: "商談中の即時回答・資料確認" },
          { label: "成果", value: "会議のテンポを維持しながら回答精度を向上" },
        ]}
      />

      <FeatureList
        title="フローティングUIの利点"
        description="自然な会話を保ちながら、必要な情報だけをすぐ参照できます。"
        items={[
          "視線移動を最小限に抑え、会議の集中を維持",
          "回答候補を瞬時に確認し、口頭で即応できる",
          "画面共有時でも邪魔にならないサイズ感",
          "会議後の振り返りにも活用可能",
        ]}
      />

      <InlineLinks
        title="関連ページ"
        links={[
          { label: "会議中のリアルタイム回答", href: "/features/real-time-answers" },
          { label: "資料理解", href: "/features/document-intelligence" },
          { label: "カスタマーサクセスでの活用", href: "/use-cases/customer-success" },
        ]}
      />

      <FaqList
        items={[
          {
            question: "会議中の画面共有で邪魔になりませんか？",
            answer: "小さなウィンドウとして常駐し、必要なときだけ開いて確認できます。",
          },
          {
            question: "どのタイミングで開くのが良いですか？",
            answer: "質問が来たタイミングで開き、回答候補を確認する使い方が最適です。",
          },
          {
            question: "フローティングウィンドウはオフにできますか？",
            answer: "必要に応じて表示を切り替えられる設計です。",
          },
        ]}
      />

      <CtaBanner
        title="会議の邪魔をしないAIアシスタント"
        description="Flownoteのフローティングウィンドウを体験してください。"
      />
    </main>
  );
}
