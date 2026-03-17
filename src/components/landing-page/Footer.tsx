
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-4 md:px-8 mt-12 mb-12">
            <div className="max-w-7xl mx-auto bg-card border border-border rounded-[40px] shadow-sm overflow-hidden">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between gap-12">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-0.5 mb-6">
                            <img src="/logo.png" alt="logo" className="w-8 h-8 object-contain" />
                            <span className="font-bold text-xl tracking-tight text-foreground">Flownote</span>
                        </div>
                        <p className="text-text-secondary leading-relaxed font-medium">
                            商談AIアシスタントで、会議の成果を最大化。<br />
                            いつでも隣にいるAIが、自信と結果をもたらします。
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-16 md:gap-32">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-foreground">ナビゲーション</h4>
                            <Link href="#features" className="text-text-secondary hover:text-foreground transition-colors font-medium">機能</Link>
                            <Link href="#testimonials" className="text-text-secondary hover:text-foreground transition-colors font-medium">お客様の声</Link>
                            <Link href="#pricing" className="text-text-secondary hover:text-foreground transition-colors font-medium">料金プラン</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-foreground">ダウンロード</h4>
                            <Link href="#download" className="text-text-secondary hover:text-foreground transition-colors font-medium">Mac版</Link>
                            <Link href="#download" className="text-text-secondary hover:text-foreground transition-colors font-medium">Windows版</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-foreground">サポート</h4>
                            <Link href="#support" className="text-text-secondary hover:text-foreground transition-colors font-medium">お問い合わせ</Link>
                            <Link href="#faq" className="text-text-secondary hover:text-foreground transition-colors font-medium">よくある質問</Link>
                        </div>
                    </div>
                </div>

                <div className="bg-muted text-text-muted py-5 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium border-t border-border">
                    <div className="opacity-80">
                        © 2025 Flownote. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
