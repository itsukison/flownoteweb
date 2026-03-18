
import React from 'react';
import Badge from './ui/Badge';
import { Wand2, Sparkles, Volume2, Upload, FileText, Mic, MessageSquare } from 'lucide-react';

const FeatureGrid: React.FC = () => {
    return (
        <section className="py-10 sm:py-12 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="text-center mb-6 sm:mb-8">
                <Badge text="Capabilities" icon={<Wand2 size={14} />} className="mb-6 bg-card border-border" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
                    AIの力で、商談の質を上げる
                </h2>
                <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto font-medium">
                    ドキュメント理解と音声解析で、会話中の判断と応答を強化します。
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {/* Card 1: Document Upload */}
                <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-2xl hover:shadow-accent-glow/10 transition-all duration-300">
                    <div className="mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">ドキュメント完全理解</h3>
                        <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium">提案書、製品資料、価格表、契約条件、FAQ。アップロードするだけで、AIが内容を理解し文脈を保持します。</p>
                    </div>

                    <div className="bg-secondary rounded-2xl p-5 sm:p-6 border border-border h-40 sm:h-48 flex flex-col justify-between">
                        <div className="flex gap-3 items-start">
                            <div className="text-accent mt-1"><FileText size={20} /></div>
                            <p className="text-xs sm:text-sm font-medium text-text-secondary">提案資料を分析中... 想定質問に対する要点を抽出しました。</p>
                        </div>

                        <div className="mt-4 bg-muted rounded-xl p-3 border border-border flex items-center justify-between shadow-sm">
                            <span className="text-[11px] sm:text-xs font-semibold text-text-secondary">提案資料_2025Q2.pdf</span>
                            <Upload size={16} className="text-text-muted" />
                        </div>

                        <div className="mt-4 text-[11px] sm:text-xs text-text-muted leading-relaxed">
                            抽出完了。商談Q&Aの準備ができました。
                        </div>
                    </div>
                </div>

                {/* Card 2: Voice Recognition */}
                <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-2xl hover:shadow-accent-glow/10 transition-all duration-300">
                    <div className="mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">高精度音声認識</h3>
                        <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium">オンライン会議の音声をクリアに解析し、質問や論点をリアルタイムでテキスト化します。</p>
                    </div>

                    <div className="bg-secondary rounded-2xl p-4 border border-border h-40 sm:h-48 relative overflow-hidden flex items-center justify-center">
                        {/* Mock wireframe for audio processing */}
                        <div className="w-[80%] h-[80%] border-2 border-dashed border-muted rounded-lg p-2 relative flex flex-col items-center justify-center gap-2">
                            <Mic size={32} className="text-text-muted/40" />
                            <div className="flex gap-1 items-end h-8">
                                {[30, 50, 80, 40, 60, 90, 40, 30].map((h, i) => (
                                    <div key={i} className="w-1 bg-accent rounded-full animate-pulse" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            <div className="text-[10px] text-text-muted font-mono">音声ストリーム処理中...</div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Natural Speech Generation */}
                <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-2xl hover:shadow-accent-glow/10 transition-all duration-300">
                    <div className="mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">自然な話し言葉生成</h3>
                        <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium">書面言葉ではなく、商談の場に相応しい「話し言葉」で回答を生成。すぐに口頭で使える表現に整えます。</p>
                    </div>

                    <div className="bg-card rounded-2xl border border-border h-40 sm:h-48 p-4 flex flex-col gap-3">
                        <div className="border border-border rounded-lg p-2.5 flex items-center justify-between text-text-muted text-sm">
                            <div className="flex items-center gap-2">
                                <Sparkles size={14} className="text-accent" />
                                <span>回答を生成中...</span>
                            </div>
                        </div>

                        <div className="text-[10px] font-semibold text-text-muted uppercase mt-2">口調とスタイル</div>

                        <div className="bg-muted rounded-lg p-3 text-sm text-foreground flex items-center gap-3">
                            <div className="w-4 h-4 text-text-secondary"><MessageSquare size={12} /></div>
                            法人向け提案
                        </div>
                        <div className="bg-card hover:bg-muted rounded-lg p-3 text-sm text-foreground flex items-center gap-3 border border-transparent hover:border-border transition-colors cursor-pointer">
                            <div className="w-4 h-4 text-text-secondary"><MessageSquare size={12} /></div>
                            カスタマーサクセス
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureGrid;
