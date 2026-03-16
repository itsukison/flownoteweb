
import React from 'react';
import { motion } from 'framer-motion';
import Badge from './ui/Badge';
import { Trophy } from 'lucide-react';

const FeatureTilted: React.FC = () => {
    return (
        <section className="py-16 max-w-7xl mx-auto px-4 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="max-w-xl ml-6">
                    <Badge text="Features" icon={<Trophy size={14} />} className="mb-6 bg-card border-border" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground leading-[1.1]">
                        商談の成果のために<br />
                        設計された機能
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed font-medium">
                        商談準備から本番、そして振り返りまで。Flownoteは一貫してチームの成果を最大化するために作られています。
                    </p>
                </div>

                {/* Floating Cards Animation */}
                <div className="relative h-[550px] flex items-center justify-center -mt-20">
                    {/* Card 1: Q&A Generation (Blue Accent) */}
                    <motion.div
                        initial={{ rotate: 0, y: 100, opacity: 0 }}
                        whileInView={{ rotate: -5, y: -120, opacity: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="absolute w-[380px] bg-feature-ai-bg border border-feature-ai-accent/20 p-8 rounded-3xl shadow-2xl z-10 top-[40%] left-1/2 -translate-x-1/2"
                        style={{ transformOrigin: "center center" }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-foreground">商談Q&A生成</h3>
                            <div className="w-3 h-3 rounded-full bg-feature-ai-accent shadow-[0_0_10px_var(--color-feature-ai-accent)]"></div>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed font-medium">
                            過去の提案書・FAQから、想定質問と回答の要点を自動生成。
                        </p>
                    </motion.div>

                    {/* Card 2: Stealth Mode (Purple Accent) */}
                    <motion.div
                        initial={{ rotate: 0, x: 50, opacity: 0 }}
                        whileInView={{ rotate: 2, y: 10, opacity: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
                        className="absolute w-[380px] bg-feature-stealth-bg border border-accent/20 p-8 rounded-3xl shadow-2xl z-20 top-[40%] left-1/2 -translate-x-1/2"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-foreground">フローティングウィンドウ</h3>
                            <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent-primary)]"></div>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed font-medium">
                            会議の隅に常駐する小さなウィンドウ。必要なときだけ開いて確認。
                        </p>
                    </motion.div>

                    {/* Card 3: Real-time AI (Purple Accent) */}
                    <motion.div
                        initial={{ rotate: 0, y: 50, opacity: 0 }}
                        whileInView={{ rotate: -2, y: 140, opacity: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="absolute w-[380px] bg-feature-realtime-bg border border-feature-realtime-accent/20 p-8 rounded-3xl shadow-2xl z-30 top-[40%] left-1/2 -translate-x-1/2"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-foreground">リアルタイム提案支援</h3>
                            <div className="w-3 h-3 rounded-full bg-feature-realtime-accent shadow-[0_0_10px_var(--color-feature-realtime-accent)]"></div>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed font-medium">
                            会議音声をリアルタイム解析。質問に即応できる回答を提示。
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureTilted;
