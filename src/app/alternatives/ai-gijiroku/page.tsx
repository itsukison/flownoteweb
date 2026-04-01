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
  title: "AI GIJIROKU 代替ツール | Flownote",
  description:
    "AI GIJIROKUの代替を探している方向けに、Flownoteの特徴と選び方を整理。商談中のリアルタイム回答に強い商談AIアシスタントです。",
  alternates: {
    canonical: "/alternatives/ai-gijiroku",
  },
};

export default function AiGijirokuAlternativePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="比較・代替"
        title="AI GIJIROKU 代替ツールを探している方へ"
        description="AI GIJIROKUのサービス終了に伴い、代替ツールを検討する方向けに、商談中の即応力という視点でFlownoteを紹介します。"
      />

      <AnswerSummary
        title="Flownoteが向いているケース"
        items={[
          {
            label: "向いている用途",
            value: "商談中の質問に即応し、会議のテンポを維持したいチーム。",
          },
          {
            label: "強み",
            value: "資料理解 × リアルタイム回答 × フローティングウィンドウ。",
          },
          {
            label: "対象職種",
            value: "営業・プリセールス・カスタマーサクセス・コンサル",
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
          { label: "利用シーン", value: "商談中の即時回答・資料確認" },
          { label: "中核機能", value: "資料理解とリアルタイム回答" },
          { label: "主な対象", value: "B2B商談チーム" },
        ]}
      />

      <FeatureList
        title="代替ツール選定のポイント"
        description="議事録作成だけでなく、商談中の即応力も重視する場合に重要です。"
        items={[
          "会議中の質問に即応できるか",
          "提案書・FAQなどの資料に基づいた回答ができるか",
          "会議の流れを止めないUI（フローティングウィンドウ）があるか",
          "営業・CSなど商談業務に特化しているか",
        ]}
      />

      <InlineLinks
        title="Flownoteの関連機能"
        links={[
          { label: "会議中のリアルタイム回答", href: "/features/real-time-answers" },
          { label: "資料理解", href: "/features/document-intelligence" },
          { label: "フローティングウィンドウ", href: "/features/floating-window" },
        ]}
      />

      <FaqList
        items={[
          {
            question: "AI GIJIROKUの代替として何を重視すべきですか？",
            answer: "商談中に即応できるか、資料に基づいた回答ができるかが重要です。",
          },
          {
            question: "Flownoteは議事録作成ツールですか？",
            answer: "議事録作成よりも商談中の回答支援に特化した商談AIアシスタントです。",
          },
          {
            question: "無料で試せますか？",
            answer: "無料プランから試せます。詳細は料金ページをご確認ください。",
          },
        ]}
      />

      <CtaBanner
        title="商談中の即応力を重視するならFlownote"
        description="会議の隣で回答を引き出す体験を、今すぐお試しください。"
      />
    </main>
  );
}
