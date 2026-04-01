
import React from 'react';
import { Rocket, User, Briefcase, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Badge from './ui/Badge';

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    period: string;
    icon: React.ReactNode;
    theme: 'white' | 'violet' | 'blue' | 'dark';
    features: string[];
    buttonText: string;
    buttonHref: string;
    badge?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, period, icon, theme, features, buttonText, buttonHref, badge }) => {
    const isFree = theme === 'white';
    const isStandard = theme === 'violet';
    const isBusiness = theme === 'blue';
    const isEnterprise = theme === 'dark';

    const bgClass = isFree
        ? 'bg-card border-border'
        : isStandard
            ? 'bg-feature-stealth-bg border-accent/30'
            : isBusiness
                ? 'bg-card border-blue-500/30'
                : 'bg-card border-feature-realtime-accent/40 shadow-[0_0_40px_rgba(180,140,255,0.05)]';
    const textClass = 'text-text-secondary';
    const titleClass = 'text-foreground';

    const buttonClass = isStandard
        ? 'bg-accent text-primary-foreground hover:bg-accent-hover shadow-lg shadow-accent/15'
        : isBusiness
            ? 'bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-500/15'
            : isEnterprise
                ? 'bg-feature-realtime-accent text-white hover:brightness-110 shadow-[0_8px_20px_rgba(180,140,255,0.25)]'
                : 'bg-muted border border-border text-foreground hover:bg-hover-bg';

    const showPeriod = Boolean(period) && price !== '要相談';

    return (
        <div className={`rounded-[32px] p-6 sm:p-8 border ${bgClass} flex flex-col h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}>
            {badge && (
                <div className={`absolute top-0 right-0 text-primary-foreground text-[11px] font-black px-4 py-1.5 rounded-bl-2xl shadow-sm ${isStandard ? 'bg-accent' : 'bg-blue-500'}`}>
                    {badge}
                </div>
            )}

            <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors ${
                    isFree ? 'border-border bg-muted' :
                    isStandard ? 'border-accent/20 bg-accent/5' :
                    isBusiness ? 'border-blue-500/20 bg-blue-500/5' :
                    'border-feature-realtime-accent/20 bg-feature-realtime-accent/5'
                }`}>
                    {React.cloneElement(icon as React.ReactElement<any>, {
                        size: 20,
                        className: isFree ? "text-text-muted" : isStandard ? "text-accent" : isBusiness ? "text-blue-400" : "text-feature-realtime-accent"
                    })}
                </div>
                <div>
                    <h3 className={`text-lg sm:text-xl font-bold ${titleClass}`}>{title}</h3>
                    <p className={`text-xs ${textClass} font-medium mt-1`}>{description}</p>
                </div>
            </div>

            <div className="mb-6 flex items-baseline gap-1">
                <span className={`text-3xl sm:text-4xl font-bold tracking-tight ${titleClass}`}>{price}</span>
                {showPeriod ? <span className={`text-sm ${textClass}`}> / {period}</span> : null}
            </div>

            <div className="border-b border-border mb-6"></div>

            <div className="flex-1 mb-8">
                <ul className="space-y-3">
                    {features.map((feat, i) => (
                        <li key={i} className={`flex items-start gap-3 text-xs sm:text-sm font-medium ${textClass}`}>
                            <CheckCircle size={18} className={
                                isStandard ? "text-accent shrink-0" :
                                isBusiness ? "text-blue-400 shrink-0" :
                                isEnterprise ? "text-feature-realtime-accent shrink-0" :
                                "text-text-muted shrink-0"
                            } />
                            <span className="leading-tight">{feat}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Link href={buttonHref} className="w-full mt-auto">
                <button className={`w-full py-3 sm:py-4 rounded-full font-bold text-sm transition-all transform active:scale-[0.98] ${buttonClass}`}>
                    {buttonText}
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
                <p className="text-text-secondary max-w-2xl mx-auto font-medium text-base sm:text-lg">個人でもチームでも、あなたに合ったプランを選べます。</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <PricingCard
                    title="フリー"
                    description="まずは無料で試す"
                    price="無料"
                    period=""
                    icon={<User />}
                    theme="white"
                    features={[
                        "トライアルクレジット付き",
                        "リアルタイム質問検出",
                        "ドキュメントRAG",
                        "文字起こし",
                    ]}
                    buttonText="無料で始める"
                    buttonHref="/register"
                />
                <PricingCard
                    title="パーソナル Pro"
                    description="個人での本格利用"
                    price="¥1,500"
                    period="月"
                    icon={<Rocket />}
                    theme="violet"
                    badge="POPULAR"
                    features={[
                        "フリーの全機能",
                        "毎月¥300相当のクレジット",
                        "会議回数 無制限",
                        "ワークフロー自動化",
                        "メールサポート",
                    ]}
                    buttonText="今すぐ始める"
                    buttonHref="/subscription?plan=pro"
                />
                <PricingCard
                    title="ビジネスチーム"
                    description="チーム・法人向け"
                    price="¥1,250"
                    period="席/月"
                    icon={<Users />}
                    theme="blue"
                    badge="TEAM"
                    features={[
                        "Proの全機能",
                        "最低3席から",
                        "チーム管理ダッシュボード",
                        "アクティベーションコード",
                        "メンバー使用量管理",
                    ]}
                    buttonText="チームで始める"
                    buttonHref="/subscription?plan=business"
                />
                <PricingCard
                    title="エンタープライズ"
                    description="大規模組織向け"
                    price="要相談"
                    period=""
                    icon={<Briefcase />}
                    theme="dark"
                    features={[
                        "ビジネスの全機能",
                        "カスタムトークン上限",
                        "専任オンボーディング",
                        "請求書払い対応",
                        "優先サポート",
                    ]}
                    buttonText="お問い合わせ"
                    buttonHref="/contact"
                />
            </div>
        </section>
    );
};

export default Pricing;
