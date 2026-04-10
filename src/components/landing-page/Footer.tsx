
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="py-10 sm:py-12 px-6 sm:px-8 md:px-8 mt-10 sm:mt-12 mb-10 sm:mb-12">
            <div className="max-w-7xl mx-auto bg-card border border-border rounded-[40px] shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between gap-8 sm:gap-12">
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

                    <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 md:gap-28">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-foreground">製品</h4>
                            <Link href="/flownote" className="text-text-secondary hover:text-foreground transition-colors font-medium">Flownoteとは</Link>
                            <Link href="/features/real-time-answers" className="text-text-secondary hover:text-foreground transition-colors font-medium">会議中のリアルタイム回答</Link>
                            <Link href="/features/document-intelligence" className="text-text-secondary hover:text-foreground transition-colors font-medium">資料理解</Link>
                            <Link href="/features/floating-window" className="text-text-secondary hover:text-foreground transition-colors font-medium">フローティングウィンドウ</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-foreground">用途</h4>
                            <Link href="/use-cases/sales" className="text-text-secondary hover:text-foreground transition-colors font-medium">営業商談</Link>
                            <Link href="/use-cases/presales" className="text-text-secondary hover:text-foreground transition-colors font-medium">プリセールス</Link>
                            <Link href="/use-cases/customer-success" className="text-text-secondary hover:text-foreground transition-colors font-medium">カスタマーサクセス</Link>
                            <Link href="/use-cases/consulting" className="text-text-secondary hover:text-foreground transition-colors font-medium">コンサル</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-foreground">リソース</h4>
                            <Link href="/tutorials" className="text-text-secondary hover:text-foreground transition-colors font-medium">チュートリアル</Link>
                            <Link href="/alternatives/ai-gijiroku" className="text-text-secondary hover:text-foreground transition-colors font-medium">AI GIJIROKU 代替</Link>
                            <Link href="/faq" className="text-text-secondary hover:text-foreground transition-colors font-medium">よくある質問</Link>
                            <Link href="/contact" className="text-text-secondary hover:text-foreground transition-colors font-medium">お問い合わせ</Link>
                        </div>
                    </div>
                </div>

                <div className="bg-muted text-text-muted py-4 sm:py-5 px-6 sm:px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-medium border-t border-border">
                    <div className="opacity-80">
                        © 2025 Flownote. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <a href="https://twitter.com/flownote_app" className="hover:text-foreground transition-colors" target="_blank" rel="noreferrer">X</a>
                        <Link href="/tokushoho" className="hover:text-foreground transition-colors">特定商取引法に基づく表記</Link>
                        <Link href="/contact" className="hover:text-foreground transition-colors">お問い合わせ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
