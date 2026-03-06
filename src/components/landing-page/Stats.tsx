
import React from 'react';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
    const stats = [
        { value: '< 0.8秒', label: '平均レスポンス速度' },
        { value: '100+', label: 'ベータ版テスト実績' },
        { value: '4.6', label: 'ユーザー満足度' },
        { value: '0秒', label: '必要な事前準備' },
    ];

    return (
        <section className="py-12 bg-section-bg border-y border-border">
            <div className="px-8 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">{stat.value}</h3>
                            <p className="text-text-secondary font-semibold text-base md:text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
