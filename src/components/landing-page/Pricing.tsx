
import React from 'react';
import { Rocket, User, Briefcase, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Badge from './ui/Badge';

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    period: string;
    icon: React.ReactNode;
    theme: 'white' | 'violet' | 'dark';
    features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, period, icon, theme, features }) => {
    const isFree = theme === 'white';
    const isStandard = theme === 'violet';
    const isPro = theme === 'dark';

    const bgClass = isFree
        ? 'bg-card border-border'
        : isStandard
            ? 'bg-feature-stealth-bg border-accent/30'
            : 'bg-card border-feature-realtime-accent/40 shadow-[0_0_40px_rgba(180,140,255,0.05)]';
    const textClass = 'text-text-secondary';
    const titleClass = 'text-foreground';

    const buttonClass = isStandard
        ? 'bg-accent text-primary-foreground hover:bg-accent-hover shadow-lg shadow-accent/15'
        : isPro
            ? 'bg-feature-realtime-accent text-white hover:brightness-110 shadow-[0_8px_20px_rgba(180,140,255,0.25)]'
            : 'bg-muted border border-border text-foreground hover:bg-hover-bg';

    return (
        <div className={`rounded-[32px] p-6 sm:p-8 border ${bgClass} flex flex-col h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}>
            {isStandard && (
                <div className="absolute top-0 right-0 bg-accent text-primary-foreground text-[11px] font-black px-4 py-1.5 rounded-bl-2xl shadow-sm">
                    POPULAR
                </div>
            )}

            <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors ${isFree ? 'border-border bg-muted' : isStandard ? 'border-accent/20 bg-accent/5' : 'border-feature-realtime-accent/20 bg-feature-realtime-accent/5'}`}>
                    {React.cloneElement(icon as React.ReactElement<any>, {
                        size: 20,
                        className: isFree ? "text-text-muted" : isStandard ? "text-accent" : "text-feature-realtime-accent"
                    })}
                </div>
                <div>
                    <h3 className={`text-lg sm:text-xl font-bold ${titleClass}`}>{title}</h3>
                    <p className={`text-xs ${textClass} font-medium mt-1`}>{description}</p>
                </div>
            </div>

            <div className="mb-6 flex items-baseline gap-1">
                <span className={`text-3xl sm:text-4xl font-bold tracking-tight ${titleClass}`}>{price}</span>
                <span className={`text-sm ${textClass}`}> / {period}</span>
            </div>

            <div className="border-b border-border mb-6"></div>

            <div className="flex-1 mb-8">
                <ul className="space-y-3">
                    {features.map((feat, i) => (
                        <li key={i} className={`flex items-start gap-3 text-xs sm:text-sm font-medium ${textClass}`}>
                            <CheckCircle size={18} className={isStandard ? "text-accent shrink-0" : isPro ? "text-feature-realtime-accent shrink-0" : "text-text-muted shrink-0"} />
                            <span className="leading-tight">{feat}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Link href="/subscription" className="w-full mt-auto">
                <button className={`w-full py-3 sm:py-4 rounded-full font-bold text-sm transition-all transform active:scale-[0.98] ${buttonClass}`}>
                    今すぐ始める
                </button>
            </Link>
        </div>
    );
};

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-16 sm:py-20 md:py-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-8">
            <div className="text-center mb-10 sm:mb-12">
                <Badge text="Pricing" icon={<Rocket size={14} />} className="mb-6 bg-card border-border" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground leading-tight">シンプルな料金プラン</h2>
                <p className="text-text-secondary max-w-2xl mx-auto font-medium text-base sm:text-lg">長期利用がお得な年額プランをご用意しました。</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <PricingCard
                    title="フリー"
                    description="個人・小規模で試す"
                    price="無料"
                    period="月"
                    icon={<User />}
                    theme="white"
                    features={[
                        "会議5回/月まで",
                        "ドキュメント容量 1GB",
                        "基本的な回答生成"
                    ]}
                />
                <PricingCard
                    title="スタンダード"
                    description="営業・CS向け"
                    price="¥750"
                    period="月"
                    icon={<Rocket />}
                    theme="violet"
                    features={[
                        "会議回数 無制限",
                        "ドキュメント容量 10GB",
                        "リアルタイム質問検出",
                        "チーム共有ワークスペース",
                        "メールサポート"
                    ]}
                />
                <PricingCard
                    title="プロフェッショナル"
                    description="チーム運用"
                    price="¥2,500"
                    period="月"
                    icon={<Briefcase />}
                    theme="dark"
                    features={[
                        "スタンダードの全機能",
                        "チーム管理・権限設定",
                        "ワークスペース別の資料管理",
                        "専任オンボーディング",
                        "優先サポート"
                    ]}
                />
            </div>
        </section>
    );
};

export default Pricing;
