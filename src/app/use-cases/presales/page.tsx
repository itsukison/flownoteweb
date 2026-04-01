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
  title: "プリセールスでのFlownote活用 | 商談AIアシスタント",
  description:
    "技術的な質問にも即応。Flownoteは資料に基づく回答を提示する商談AIアシスタントです。",
  alternates: {
    canonical: "/use-cases/presales",
  },
};

export default function PresalesUseCasePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="用途"
        title="プリセールスでのFlownote活用"
        description="技術的な質問が増えるプリセールスの場面でも、仕様書やFAQから回答を即時提示できます。"
      />

      <AnswerSummary
        title="プリセールスでの課題と解決"
        items={[
          {
            label: "よくある課題",
            value: "仕様や制約の質問が多く、その場での確認に時間がかかる。",
          },
          {
            label: "Flownoteの役割",
            value: "仕様書やFAQを参照し、正確な回答の要点を即提示する。",
          },
          {
            label: "対象チーム",
            value: "プリセールス、技術営業",
          },
          {
            label: "対応環境",
            value: "Mac / Windows（デスクトップアプリ）",
          },
        ]}
      />

      <KeyFacts
        items={[
          { label: "用途", value: "技術的質問への即応" },
          { label: "扱う資料", value: "仕様書・FAQ・技術資料" },
          { label: "期待効果", value: "説明の正確性と信頼性の向上" },
          { label: "プロダクト", value: "商談AIアシスタント（デスクトップアプリ）" },
        ]}
      />

      <FeatureList
        title="プリセールスで役立つポイント"
        description="難しい質問にも、根拠ある回答を素早く提示します。"
        items={[
          "仕様書・技術資料を参照して回答を提示",
          "回答の根拠が明確で、説明の信頼性が上がる",
          "質問の論点を自動抽出し、対応漏れを防止",
          "担当者の経験に依存しない説明が可能",
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
            question: "技術資料が多くても使えますか？",
            answer: "主要な仕様書やFAQをアップロードするだけで活用できます。",
          },
          {
            question: "回答の根拠を示せますか？",
            answer: "はい。資料の要点に基づいた回答候補を提示します。",
          },
          {
            question: "専門用語が多い場合は？",
            answer: "専門用語を含む資料を理解し、文脈に沿って提示します。",
          },
        ]}
      />

      <CtaBanner
        title="技術的な質疑応答を、よりスムーズに"
        description="Flownoteでプリセールスの回答精度を高めましょう。"
      />
    </main>
  );
}
