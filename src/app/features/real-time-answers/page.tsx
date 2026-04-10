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
  title: "会議中のリアルタイム回答 | Flownote",
  description:
    "Flownoteは会議中の質問を検出し、資料に基づいた回答をリアルタイムに提示する商談AIアシスタントです。",
  alternates: {
    canonical: "/features/real-time-answers",
    languages: { "ja-JP": "/features/real-time-answers" },
  },
};

export default function RealTimeAnswersPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="機能"
        title="会議中のリアルタイム回答"
        description="Flownoteは会話中の質問を検出し、資料を参照して最適な回答を即時に提示します。商談のテンポを崩さず、正確な説明を支援します。"
      />

      <AnswerSummary
        title="リアルタイム回答で得られる成果"
        items={[
          {
            label: "どんな課題を解決するか",
            value:
              "商談中の想定外の質問に、即座に答えられない不安を解消します。",
          },
          {
            label: "対象職種",
            value: "営業・プリセールス・CS・コンサル",
          },
          {
            label: "回答の根拠",
            value: "提案書・価格表・FAQなどの資料を参照して提示します。",
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
          { label: "主要価値", value: "会議中の質問に即応" },
          { label: "利用シーン", value: "商談、提案、顧客対応" },
          { label: "想定成果", value: "説明の一貫性と商談スピード向上" },
        ]}
      />

      <FeatureList
        title="リアルタイム回答の特徴"
        description="会議の流れを止めずに、正確な回答を支援します。"
        items={[
          "会話音声から質問と論点を検出",
          "質問内容に合わせて資料の要点を提示",
          "話し言葉に整えた回答でそのまま口頭説明が可能",
          "回答内容の一貫性を保ち、担当者間の差を減らす",
        ]}
      />

      <InlineLinks
        title="あわせて読まれるページ"
        links={[
          { label: "資料理解", href: "/features/document-intelligence" },
          { label: "フローティングウィンドウ", href: "/features/floating-window" },
          { label: "営業商談での使い方", href: "/use-cases/sales" },
        ]}
      />

      <FaqList
        items={[
          {
            question: "質問の検出は自動ですか？",
            answer:
              "はい。会話音声から質問や論点を自動で検出し、候補回答を提示します。",
          },
          {
            question: "回答はどこから作られますか？",
            answer: "アップロードした提案書やFAQなどの資料を参照して生成します。",
          },
          {
            question: "会議中に画面を邪魔しませんか？",
            answer: "フローティングウィンドウで必要なときだけ確認できます。",
          },
        ]}
      />

      <CtaBanner
        title="商談中の即答力を、チームの標準に。"
        description="Flownoteで会議の隣にいるAIを体験してください。"
      />
    </main>
  );
}
