import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サブスクリプション | Flownote",
  description: "Flownoteのサブスクリプションについてのご案内ページです。",
  alternates: {
    canonical: "/subscription",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SubscriptionPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="pt-28 pb-16 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-[28px] p-6 sm:p-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">サブスクリプション</h1>
          <p className="text-sm sm:text-base text-text-secondary font-medium leading-relaxed mb-6">
            サブスクリプションの購入・管理はアプリ内で行えます。まずはアプリをダウンロードしてください。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#download"
              className="bg-accent text-primary-foreground font-bold text-sm sm:text-base px-5 py-2.5 rounded-full hover:bg-accent-hover transition"
            >
              アプリをダウンロード
            </Link>
            <Link
              href="/contact"
              className="bg-card text-foreground font-bold text-sm sm:text-base px-5 py-2.5 rounded-full border border-border hover:bg-muted transition"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
