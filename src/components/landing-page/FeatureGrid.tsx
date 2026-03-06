
import React from 'react';
import Badge from './ui/Badge';
import { Wand2, Sparkles, Volume2, Upload, FileText, Mic, MessageSquare } from 'lucide-react';

const FeatureGrid: React.FC = () => {
    return (
        <section className="py-10 max-w-7xl mx-auto px-8 md:px-12">
            <div className="text-center mb-8">
                <Badge text="Capabilities" icon={<Wand2 size={14} />} className="mb-6 bg-card border-border" />
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
                    AIの力で、面接をハックする
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto font-medium">
                    最新のLLM技術と音声認識技術を駆使し、人間の能力を拡張します。
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1: Document Upload */}
                <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-2xl hover:shadow-lime-glow/10 transition-all duration-300">
                    <div className="mb-3">
                        <h3 className="text-2xl font-bold mb-3 text-foreground">ドキュメント完全理解</h3>
                        <p className="text-text-muted text-sm leading-relaxed font-medium">履歴書、職務経歴書、志望動機書。PDFをアップロードするだけで、AIがあなたのキャリアを完全に理解し、記憶します。</p>
                    </div>

                    <div className="bg-secondary rounded-2xl p-6 border border-border h-48 flex flex-col justify-between">
                        <div className="flex gap-3 items-start">
                            <div className="text-accent-lime mt-1"><FileText size={20} /></div>
                            <p className="text-sm font-medium text-text-secondary">履歴書を分析中... この役割に対する3つの主要な強みを特定しました。</p>
                        </div>

                        <div className="mt-4 bg-muted rounded-xl p-3 border border-border flex items-center justify-between shadow-sm">
                            <span className="text-xs font-semibold text-text-secondary">履歴書_v2.pdf</span>
                            <Upload size={16} className="text-text-muted" />
                        </div>

                        <div className="mt-4 text-xs text-text-muted leading-relaxed">
                            抽出完了。Q&A生成の準備ができました。
                        </div>
                    </div>
                </div>

                {/* Card 2: Voice Recognition */}
                <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-2xl hover:shadow-lime-glow/10 transition-all duration-300">
                    <div className="mb-3">
                        <h3 className="text-2xl font-bold mb-3 text-foreground">高精度音声認識</h3>
                        <p className="text-text-muted text-sm leading-relaxed font-medium">Whisperをベースとした独自モデルにより、オンライン面接特有の音声品質でも高精度に質問をテキスト化します。</p>
                    </div>

                    <div className="bg-secondary rounded-2xl p-4 border border-border h-48 relative overflow-hidden flex items-center justify-center">
                        {/* Mock wireframe for audio processing */}
                        <div className="w-[80%] h-[80%] border-2 border-dashed border-muted rounded-lg p-2 relative flex flex-col items-center justify-center gap-2">
                            <Mic size={32} className="text-text-muted/40" />
                            <div className="flex gap-1 items-end h-8">
                                {[30, 50, 80, 40, 60, 90, 40, 30].map((h, i) => (
                                    <div key={i} className="w-1 bg-accent-lime rounded-full animate-pulse" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            <div className="text-[10px] text-text-muted font-mono">音声ストリーム処理中...</div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Natural Speech Generation */}
                <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-2xl hover:shadow-lime-glow/10 transition-all duration-300">
                    <div className="mb-3">
                        <h3 className="text-2xl font-bold mb-3 text-foreground">自然な話し言葉生成</h3>
                        <p className="text-text-muted text-sm leading-relaxed font-medium">書面言葉ではなく、面接の場に相応しい「話し言葉」で回答を生成。そのまま読み上げるだけで自然な会話が成立します。</p>
                    </div>

                    <div className="bg-card rounded-2xl border border-border h-48 p-4 flex flex-col gap-3">
                        <div className="border border-border rounded-lg p-2.5 flex items-center justify-between text-text-muted text-sm">
                            <div className="flex items-center gap-2">
                                <Sparkles size={14} className="text-accent-lime" />
                                <span>回答を生成中...</span>
                            </div>
                        </div>

                        <div className="text-[10px] font-semibold text-text-muted uppercase mt-2">口調とスタイル</div>

                        <div className="bg-muted rounded-lg p-3 text-sm text-foreground flex items-center gap-3">
                            <div className="w-4 h-4 text-text-secondary"><MessageSquare size={12} /></div>
                            面接用
                        </div>
                        <div className="bg-card hover:bg-muted rounded-lg p-3 text-sm text-foreground flex items-center gap-3 border border-transparent hover:border-border transition-colors cursor-pointer">
                            <div className="w-4 h-4 text-text-secondary"><MessageSquare size={12} /></div>
                            テレアポ用
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureGrid;
