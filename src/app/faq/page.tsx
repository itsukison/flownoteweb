import type { Metadata } from "next";
import { PageHero, FaqList, CtaBanner } from "@/components/marketing/MarketingBlocks";

export const metadata: Metadata = {
  title: "よくある質問 | Flownote",
  description:
    "Flownoteに関するよくある質問。商談中のリアルタイム回答、対応OS、資料理解についてまとめています。",
  alternates: {
    canonical: "/faq",
    languages: { "ja-JP": "/faq" },
  },
};

const faqItems = [
  {
    question: "Flownoteはどんなツールですか？",
    answer:
      "商談中のリアルタイム回答を支援する商談AIアシスタント（デスクトップアプリ）です。",
  },
  {
    question: "対応OSは？",
    answer: "MacとWindowsに対応しています。",
  },
  {
    question: "どんな資料に対応していますか？",
    answer: "提案書、製品資料、価格表、契約条件、FAQなどに対応します。",
  },
  {
    question: "オンライン会議でも使えますか？",
    answer: "はい。オンライン会議中の質問にも即時に回答候補を提示します。",
  },
  {
    question: "料金プランはありますか？",
    answer: "無料プランとチーム向けプランをご用意しています。詳しくは料金ページをご覧ください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja",
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="よくある質問"
        description="Flownoteの使い方や対応範囲について、よくいただく質問をまとめました。"
      />

      <FaqList items={faqItems} />

      <CtaBanner
        title="さらに詳しく知りたい方へ"
        description="導入や活用方法についてはお問い合わせください。"
      />
    </main>
  );
}
