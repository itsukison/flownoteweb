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
  title: "営業商談でのFlownote活用 | 商談AIアシスタント",
  description:
    "営業商談での質問対応をリアルタイムに支援。Flownoteは商談中の回答を即時提示する商談AIアシスタントです。",
  alternates: {
    canonical: "/use-cases/sales",
  },
};

export default function SalesUseCasePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="用途"
        title="営業商談でのFlownote活用"
        description="価格や導入効果の質問に即応し、提案の説得力を高めます。Flownoteは商談中のリアルタイム回答アシスタントです。"
      />

      <AnswerSummary
        title="営業商談での課題と解決"
        items={[
          {
            label: "よくある課題",
            value: "価格・条件・競合比較の質問に即答できず、商談テンポが落ちる。",
          },
          {
            label: "Flownoteの役割",
            value: "資料に基づく回答を即時提示し、説明の一貫性を保つ。",
          },
          {
            label: "対象チーム",
            value: "フィールドセールス、インサイドセールス",
          },
          {
            label: "対応環境",
            value: "Mac / Windows（デスクトップアプリ）",
          },
        ]}
      />

      <KeyFacts
        items={[
          { label: "用途", value: "営業商談の即時回答支援" },
          { label: "扱う資料", value: "提案書・価格表・競合比較資料" },
          { label: "期待効果", value: "商談テンポ維持・説明の一貫性向上" },
          { label: "プロダクト", value: "商談AIアシスタント（デスクトップアプリ）" },
        ]}
      />

      <FeatureList
        title="営業商談で役立つポイント"
        description="会話の流れを止めずに、正確な情報を届けます。"
        items={[
          "価格や契約条件の質問に即答できる",
          "提案書の要点をその場で引用可能",
          "商談内容に合わせて回答のトーンを調整",
          "担当者ごとの説明ブレを抑制",
        ]}
      />

      <InlineLinks
        title="関連機能"
        links={[
          { label: "会議中のリアルタイム回答", href: "/features/real-time-answers" },
          { label: "資料理解", href: "/features/document-intelligence" },
          { label: "フローティングウィンドウ", href: "/features/floating-window" },
        ]}
      />

      <FaqList
        items={[
          {
            question: "営業資料は事前に準備が必要ですか？",
            answer: "商談前に資料をアップロードするだけで準備完了です。",
          },
          {
            question: "商談中に画面共有をしていても使えますか？",
            answer: "フローティングウィンドウで必要なときに確認できます。",
          },
          {
            question: "営業チーム全体で使えますか？",
            answer: "はい。チーム向けプランで複数人で利用できます。",
          },
        ]}
      />

      <CtaBanner
        title="商談の即答力をチームの武器に"
        description="Flownoteで営業商談の説得力を高めましょう。"
      />
    </main>
  );
}
