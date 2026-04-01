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
  title: "Flownoteとは | 商談中のリアルタイム回答アシスタント",
  description:
    "Flownoteは商談中のリアルタイム回答を支援する商談AIアシスタント（デスクトップアプリ）。資料を理解し、会話中の質問に即応します。",
  alternates: {
    canonical: "/flownote",
  },
};

export default function FlownoteAboutPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Flownoteとは"
        title="商談中のリアルタイム回答アシスタント"
        description="Flownoteは商談・提案・顧客対応に特化した商談AIアシスタント（デスクトップアプリ）。資料を理解し、会話中の質問に即応できる答えを提示します。"
      />

      <AnswerSummary
        title="まずは結論：Flownoteでできること"
        items={[
          {
            label: "Flownoteは何か",
            value:
              "Flownote = 商談AIアシスタント（デスクトップアプリ）。会議の隣で回答をリアルタイムに提示します。",
          },
          {
            label: "誰向けか",
            value:
              "営業・プリセールス・カスタマーサクセス・コンサルなどB2B商談チーム向け。",
          },
          {
            label: "何ができるか",
            value:
              "提案書やFAQを理解し、質問に対する要点を会議中に即提示。",
          },
          {
            label: "対応環境・料金",
            value: "Mac/Windows対応。無料プランあり、チーム向けプランも用意。",
          },
        ]}
      />

      <KeyFacts
        items={[
          { label: "プロダクト種別", value: "商談AIアシスタント（デスクトップアプリ）" },
          { label: "対応OS", value: "Mac / Windows" },
          { label: "主な用途", value: "商談中のリアルタイム回答、資料検索、提案支援" },
          { label: "対象職種", value: "営業・プリセールス・CS・コンサル" },
        ]}
      />

      <FeatureList
        title="Flownoteの強み"
        description="議事録作成ではなく、会議中の即応力を高めるための機能設計です。"
        items={[
          "会議音声から質問を検出し、回答の要点をリアルタイム提示",
          "提案書・価格表・FAQなどの資料理解で文脈に沿った回答を生成",
          "フローティングウィンドウで会議の邪魔をせずに確認",
          "自然な話し言葉で回答を整えるため、そのまま口頭で使える",
        ]}
      />

      <InlineLinks
        title="関連ページ"
        links={[
          { label: "会議中のリアルタイム回答", href: "/features/real-time-answers" },
          { label: "資料理解", href: "/features/document-intelligence" },
          { label: "フローティングウィンドウ", href: "/features/floating-window" },
          { label: "AI GIJIROKU 代替", href: "/alternatives/ai-gijiroku" },
        ]}
      />

      <FaqList
        items={[
          {
            question: "FlownoteはAI議事録ツールですか？",
            answer:
              "議事録作成よりも、商談中の回答支援に特化した商談AIアシスタントです。",
          },
          {
            question: "オンライン会議でも使えますか？",
            answer:
              "はい。オンライン会議中でも質問に対する回答候補を即時に提示します。",
          },
          {
            question: "どんな資料に対応していますか？",
            answer:
              "提案書、製品資料、価格表、契約条件、FAQなど商談で使うドキュメントに対応します。",
          },
        ]}
      />

      <CtaBanner
        title="商談中の回答精度を、今日から高めませんか？"
        description="Flownoteは会議の隣で、必要な答えを即座に引き出します。"
      />
    </main>
  );
}
