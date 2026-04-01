import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CtaBanner } from "@/components/marketing/MarketingBlocks";

export const metadata: Metadata = {
  title: "お問い合わせ | Flownote",
  description: "Flownoteへのお問い合わせはこちら。導入相談やデモのご依頼を受け付けています。",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        description="導入相談やデモのご依頼はこちらから。現在はSNSからのご連絡を受け付けています。"
      />

      <section className="px-6 sm:px-8 pb-16">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-[28px] p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">ご相談方法</h2>
          <p className="text-sm sm:text-base text-text-secondary font-medium leading-relaxed mb-6">
            Flownoteの導入相談やデモのご依頼は、公式SNSのメッセージからご連絡ください。
            いただいた内容を確認し、担当者よりご案内します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://twitter.com/flownote_app"
              target="_blank"
              rel="noreferrer"
              className="bg-accent text-primary-foreground font-bold text-sm sm:text-base px-5 py-2.5 rounded-full hover:bg-accent-hover transition"
            >
              公式Xで連絡する
            </a>
            <Link
              href="/#download"
              className="bg-card text-foreground font-bold text-sm sm:text-base px-5 py-2.5 rounded-full border border-border hover:bg-muted transition"
            >
              アプリをダウンロード
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="商談中の即答力を体験しませんか？"
        description="Flownoteは会議の隣で、必要な答えを即座に引き出します。"
      />
    </main>
  );
}
