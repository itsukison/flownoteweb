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
  title: "カスタマーサクセスでのFlownote活用 | 商談AIアシスタント",
  description:
    "顧客からの質問に即応し、回答の一貫性を保つ。FlownoteはCS向けの商談AIアシスタントです。",
  alternates: {
    canonical: "/use-cases/customer-success",
    languages: { "ja-JP": "/use-cases/customer-success" },
  },
};

export default function CustomerSuccessUseCasePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="用途"
        title="カスタマーサクセスでのFlownote活用"
        description="顧客からの細かな質問にも、FAQや契約条件に沿って回答を提示。CSの応対品質を安定させます。"
      />

      <AnswerSummary
        title="CS現場の課題と解決"
        items={[
          {
            label: "よくある課題",
            value: "回答内容にばらつきが出てしまい、顧客体験が不安定。",
          },
          {
            label: "Flownoteの役割",
            value: "FAQや契約条件に沿った回答を会議中に提示する。",
          },
          {
            label: "対象チーム",
            value: "カスタマーサクセス、カスタマーサポート",
          },
          {
            label: "対応環境",
            value: "Mac / Windows（デスクトップアプリ）",
          },
        ]}
      />

      <KeyFacts
        items={[
          { label: "用途", value: "顧客対応の即時回答支援" },
          { label: "扱う資料", value: "FAQ・運用ガイド・契約条件" },
          { label: "期待効果", value: "回答品質の標準化と安心感向上" },
          { label: "プロダクト", value: "商談AIアシスタント（デスクトップアプリ）" },
        ]}
      />

      <FeatureList
        title="CSで役立つポイント"
        description="顧客対応の品質を均一化し、安心感を提供します。"
        items={[
          "FAQや運用ガイドに沿った回答を提示",
          "契約条件の質問に正確に即応",
          "回答のトーンを整え、顧客コミュニケーションを安定化",
          "担当者交代時でも説明の一貫性を保つ",
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
            question: "FAQが多くても使えますか？",
            answer: "主要なFAQをアップロードすれば会議中に即応できます。",
          },
          {
            question: "顧客とのオンラインミーティングでも使えますか？",
            answer: "はい。オンライン会議中に回答候補を提示します。",
          },
          {
            question: "回答の品質を統一できますか？",
            answer: "資料に沿った回答を提示するため、説明の一貫性が向上します。",
          },
        ]}
      />

      <CtaBanner
        title="顧客対応の品質を、チームで底上げ"
        description="FlownoteでCSの回答品質を安定させましょう。"
      />
    </main>
  );
}
