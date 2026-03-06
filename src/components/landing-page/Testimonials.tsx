
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Badge from './ui/Badge';

const testimonials = [
    {
        name: 'M.S.',
        role: 'エンジニア / 20代',
        avatar: 'https://picsum.photos/100/100?random=2',
        content: "他の文字起こしアプリも試しましたが、Flownoteはリアルタイムでアドバイスが出る点がユニークです。たまに専門用語の認識が甘い時もありますが、面接で言葉に詰まった時のカンペとしては十分実用的でした。"
    },
    {
        name: 'Y.K.',
        role: '営業職 / 30代',
        avatar: 'https://picsum.photos/100/100?random=3',
        content: "実際の面接中に使うのは少し勇気がいりますが、事前のロープレ相手としてはかなり優秀です。想定外の質問が来たときの返し方の語彙が増えました。"
    },
    {
        name: 'A.T.',
        role: 'デザイナー / 20代',
        avatar: 'https://picsum.photos/100/100?random=6',
        content: "ポートフォリオの説明って独りよがりになりがちなのですが、AIが客観的なツッコミを入れてくれるので助かりました。深夜でも気にせず壁打ちできるのが良いですね。"
    },
    {
        name: 'T.N.',
        role: 'コンサルタント / 30代',
        avatar: 'https://picsum.photos/100/100?random=5',
        content: "レスポンスがかなり早いので、会話のテンポを崩さずに練習できます。ただ、UIがシンプルすぎる気もするので、今後のアップデートに期待しています。"
    },
    {
        name: 'R.H.',
        role: '人事・採用 / 30代',
        avatar: 'https://picsum.photos/100/100?random=8',
        content: "採用側の視点で見ても、Flownoteが提案する回答の構成（STAR法など）は理にかなっています。丸暗記ではなく、自分のエピソードを整理するツールとして使うのがおすすめです。"
    },
    {
        name: 'K.I.',
        role: 'カスタマーサクセス / 20代',
        avatar: 'https://picsum.photos/100/100?random=1',
        content: "Macの画面端に置いておけるので邪魔になりません。英語面接の練習にも使ってみましたが、ネイティブらしい言い回しをサッと出してくれるのは便利でした。"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 px-8 md:px-12 relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                <Badge text="Success Stories" icon={<Star size={14} />} className="mb-6 bg-card border-border" />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground"
                >
                    ユーザーの声
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-text-secondary font-medium"
                >
                    多くの転職者がFlownoteを使ってキャリアアップを実現しています。
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-card p-8 rounded-[32px] border border-border shadow-sm hover:shadow-xl hover:shadow-mint-glow/5 transition-all flex flex-col justify-between h-full group"
                    >
                        <div>
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground">{testimonial.name}</div>
                                        <div className="text-xs text-text-muted font-medium">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex text-accent-mint mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <p className="text-text-secondary leading-relaxed text-[15px] font-medium">
                                {testimonial.content}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Subtle dot pattern background */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10"></div>
        </section>
    );
};

export default Testimonials;
