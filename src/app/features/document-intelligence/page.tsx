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
  title: "資料理解（提案書・FAQ・価格表） | Flownote",
  description:
    "Flownoteは提案書・価格表・FAQを理解し、会議中の質問に根拠ある回答を提示する商談AIアシスタントです。",
  alternates: {
    canonical: "/features/document-intelligence",
  },
};

export default function DocumentIntelligencePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="機能"
        title="資料理解（提案書・FAQ・価格表）"
        description="Flownoteは商談資料を読み込み、会話の流れに沿った回答を生成します。資料の内容を正しく伝えることで提案の精度を高めます。"
      />

      <AnswerSummary
        title="資料理解で得られる価値"
        items={[
          {
            label: "何ができるか",
            value:
              "提案書やFAQの要点を理解し、質問に対して根拠ある回答を提示します。",
          },
          {
            label: "対応資料",
            value: "提案書・製品資料・価格表・契約条件・FAQ",
          },
          {
            label: "誰向けか",
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
          { label: "中核機能", value: "ドキュメント理解と文脈保持" },
          { label: "利用シーン", value: "価格・条件・導入効果の質問対応" },
          { label: "成果", value: "説明の一貫性と正確性の向上" },
        ]}
      />

      <FeatureList
        title="資料理解の特徴"
        description="会議中の回答を、資料に沿った正確な表現に整えます。"
        items={[
          "資料をアップロードするだけで文脈を保持",
          "質問内容に一致する要点を素早く抽出",
          "営業担当者ごとの説明ブレを抑える",
          "FAQや契約条件に基づいた回答で安心感を提供",
        ]}
      />

      <InlineLinks
        title="関連ページ"
        links={[
          { label: "会議中のリアルタイム回答", href: "/features/real-time-answers" },
          { label: "フローティングウィンドウ", href: "/features/floating-window" },
          { label: "プリセールスでの使い方", href: "/use-cases/presales" },
        ]}
      />

      <FaqList
        items={[
          {
            question: "どんな形式の資料を使えますか？",
            answer: "提案書、製品資料、価格表、契約条件、FAQなどに対応します。",
          },
          {
            question: "資料の内容は会議中にどう使われますか？",
            answer: "質問内容に一致する要点を提示し、根拠として提示します。",
          },
          {
            question: "機密情報の扱いが心配です。",
            answer: "取り扱い方針は導入時に共有します。詳細はお問い合わせください。",
          },
        ]}
      />

      <CtaBanner
        title="資料に沿った正確な回答を、会議中に。"
        description="Flownoteで提案の一貫性と信頼性を高めましょう。"
      />
    </main>
  );
}
