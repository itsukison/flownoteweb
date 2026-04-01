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
  title: "コンサルでのFlownote活用 | 商談AIアシスタント",
  description:
    "クライアントとの会議で即時に資料参照。Flownoteはコンサル向けの商談AIアシスタントです。",
  alternates: {
    canonical: "/use-cases/consulting",
  },
};

export default function ConsultingUseCasePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="用途"
        title="コンサルでのFlownote活用"
        description="過去資料や分析結果を即座に参照し、クライアントとの議論をスムーズに進めます。"
      />

      <AnswerSummary
        title="コンサル現場の課題と解決"
        items={[
          {
            label: "よくある課題",
            value: "過去資料の確認に時間がかかり、議論が止まってしまう。",
          },
          {
            label: "Flownoteの役割",
            value: "資料の要点を即時提示し、議論の流れを止めない。",
          },
          {
            label: "対象チーム",
            value: "コンサルタント、PMO、アドバイザリー",
          },
          {
            label: "対応環境",
            value: "Mac / Windows（デスクトップアプリ）",
          },
        ]}
      />

      <KeyFacts
        items={[
          { label: "用途", value: "クライアント会議での即時回答" },
          { label: "扱う資料", value: "分析資料・過去提案・レポート" },
          { label: "期待効果", value: "議論のテンポ維持と信頼感向上" },
          { label: "プロダクト", value: "商談AIアシスタント（デスクトップアプリ）" },
        ]}
      />

      <FeatureList
        title="コンサルで役立つポイント"
        description="過去資料を即座に参照し、議論の質を高めます。"
        items={[
          "過去資料や分析結果をその場で検索",
          "議論の文脈に合わせて要点を提示",
          "説明の一貫性を保ち、信頼感を向上",
          "会議のテンポを崩さず進行できる",
        ]}
      />

      <InlineLinks
        title="関連機能"
        links={[
          { label: "資料理解", href: "/features/document-intelligence" },
          { label: "会議中のリアルタイム回答", href: "/features/real-time-answers" },
          { label: "フローティングウィンドウ", href: "/features/floating-window" },
        ]}
      />

      <FaqList
        items={[
          {
            question: "過去の提案資料も活用できますか？",
            answer: "はい。必要な資料をアップロードすれば即座に参照できます。",
          },
          {
            question: "会議中に資料検索をしても失礼になりませんか？",
            answer: "フローティングウィンドウで視線移動を最小限にできます。",
          },
          {
            question: "議論のスピードは落ちませんか？",
            answer: "質問に合わせて要点を即時提示するため、議論が止まりません。",
          },
        ]}
      />

      <CtaBanner
        title="議論の質を高める、会議中の即答力"
        description="Flownoteでコンサルの説明精度を底上げしましょう。"
      />
    </main>
  );
}
