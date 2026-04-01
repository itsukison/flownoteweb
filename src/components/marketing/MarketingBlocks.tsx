import React from 'react';
import Link from 'next/link';

export type SummaryItem = {
  label: string;
  value: string;
};

export type KeyFact = {
  label: string;
  value: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="pt-28 pb-12 px-6 sm:px-8 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-muted bg-card border border-border px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            {eyebrow}
          </div>
        ) : null}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#download"
            className="bg-accent text-primary-foreground font-bold text-sm sm:text-base px-6 py-3 rounded-full hover:bg-accent-hover transition-all shadow-lg shadow-accent/15"
          >
            アプリをダウンロード
          </Link>
          <Link
            href="/#pricing"
            className="bg-card text-foreground font-bold text-sm sm:text-base px-6 py-3 rounded-full border border-border hover:bg-muted transition-all"
          >
            料金を見る
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AnswerSummary({ title, items }: { title: string; items: SummaryItem[] }) {
  return (
    <section className="px-6 sm:px-8 pb-10">
      <div className="max-w-5xl mx-auto bg-card border border-border rounded-[28px] p-6 sm:p-8">
        <div className="text-xs sm:text-sm font-semibold text-text-muted mb-3">答え先出し</div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">{title}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.label} className="bg-secondary border border-border rounded-2xl p-4">
              <div className="text-xs font-semibold text-text-muted mb-2">{item.label}</div>
              <div className="text-sm sm:text-base text-foreground font-semibold leading-relaxed">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KeyFacts({ items }: { items: KeyFact[] }) {
  return (
    <section className="px-6 sm:px-8 pb-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-sm font-semibold text-text-muted mb-3">Key Facts</div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.label} className="bg-secondary border border-border rounded-2xl p-4">
              <div className="text-xs font-semibold text-text-muted mb-2">{item.label}</div>
              <div className="text-sm sm:text-base text-foreground font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureList({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: string[];
}) {
  return (
    <section className="px-6 sm:px-8 pb-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{title}</h2>
        {description ? (
          <p className="text-text-secondary text-sm sm:text-base mb-6 font-medium">{description}</p>
        ) : null}
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item} className="bg-card border border-border rounded-2xl p-4">
              <div className="text-sm text-foreground font-semibold leading-relaxed">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <section className="px-6 sm:px-8 pb-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">よくある質問</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.question} className="bg-secondary border border-border rounded-2xl p-4">
              <div className="text-sm sm:text-base font-semibold text-foreground mb-2">{item.question}</div>
              <div className="text-sm text-text-secondary leading-relaxed font-medium">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InlineLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section className="px-6 sm:px-8 pb-14">
      <div className="max-w-5xl mx-auto bg-card border border-border rounded-[24px] p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-secondary border border-border rounded-full px-4 py-2 text-sm text-foreground font-semibold hover:bg-muted transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner({ title, description }: { title: string; description: string }) {
  return (
    <section className="px-6 sm:px-8 pb-20">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-accent/15 to-transparent border border-border rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-text-secondary font-medium">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/#download"
            className="bg-accent text-primary-foreground font-bold text-sm sm:text-base px-5 py-2.5 rounded-full hover:bg-accent-hover transition"
          >
            今すぐダウンロード
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
  );
}
