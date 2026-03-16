
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Badge from './ui/Badge';

const testimonials = [
    {
        name: 'M.S.',
        role: '営業 / 30代',
        avatar: 'https://picsum.photos/100/100?random=2',
        content: "商談中の質問が拾われてすぐカード化されるので、焦らずに回答できます。提案書に沿った内容に整えてくれるのが助かります。"
    },
    {
        name: 'Y.K.',
        role: 'プリセールス / 30代',
        avatar: 'https://picsum.photos/100/100?random=3',
        content: "技術的な質問が来ても、アップロードした仕様書の要点を即座に出してくれるので安心です。説明の一貫性が上がりました。"
    },
    {
        name: 'A.T.',
        role: 'カスタマーサクセス / 20代',
        avatar: 'https://picsum.photos/100/100?random=6',
        content: "顧客からの細かい質問にも、FAQに沿った回答をその場で提示してくれるので、安心して会話に集中できます。"
    },
    {
        name: 'T.N.',
        role: 'コンサルタント / 30代',
        avatar: 'https://picsum.photos/100/100?random=5',
        content: "反応速度が速く、会議のテンポを崩さずに使えます。資料の要点が整理されて提示されるのが実務的です。"
    },
    {
        name: 'R.H.',
        role: '事業開発 / 30代',
        avatar: 'https://picsum.photos/100/100?random=8',
        content: "価格や契約条件の質問に対して、正確な表現に整えてくれるので安心です。合意形成がスムーズになりました。"
    },
    {
        name: 'K.I.',
        role: 'プロダクトマネージャー / 30代',
        avatar: 'https://picsum.photos/100/100?random=1',
        content: "フローティングウィンドウが邪魔にならず、必要なときだけ参照できます。説明の品質が安定しました。"
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
                    多くのB2BチームがFlownoteで商談力を高めています。
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
