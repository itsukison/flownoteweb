
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Download, ArrowRight, Box, Circle, Mic, Video, Apple, Monitor } from 'lucide-react';
import Badge from './ui/Badge';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useLatestRelease } from '@/hooks/useLatestRelease';

const Hero: React.FC = () => {
    const { downloadUrl, os } = useLatestRelease();
    const isWindows = os === 'windows';

    return (
        <section className="pt-12 sm:pt-16 pb-10 sm:pb-12 px-6 sm:px-8 flex flex-col items-center text-center overflow-hidden">
            <Badge
                icon={<img src="/logo.png" className="w-4 h-4 object-contain" alt="logo" />}
                text="商談AIアシスタント"
                className="mb-6 bg-card border-border"
            />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black tracking-tight text-foreground mb-5 sm:mb-6 leading-[1.0]"
            >
                見えない会話アシスト <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                    Flownote
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-lg text-text-secondary max-w-2xl mb-6 sm:mb-8 leading-relaxed font-medium"
            >
                商談も、提案も、顧客対応も。<br className="md:hidden" />
                会議の隣で、必要な答えを即座に引き出すリアルタイムAI
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center gap-5 sm:gap-6 mb-12 sm:mb-16"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href={downloadUrl}>
                        <button className="bg-accent hover:bg-accent-hover active:bg-accent-pressed text-primary-foreground font-bold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg shadow-accent/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                            {isWindows ? <Monitor size={20} /> : <Apple size={20} />}
                            {isWindows ? 'Windows版をダウンロード' : 'Mac版をダウンロード'}
                        </button>
                    </a>
                    <Link href="/tutorial">
                        <button className="bg-card hover:bg-muted text-foreground font-bold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm border border-border transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                            <ArrowRight size={20} /> デモを見る
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-foreground bg-card px-5 sm:px-6 md:px-6 py-3 rounded-full border border-border shadow-sm w-full max-w-[360px] md:w-auto md:max-w-none mx-auto text-center md:text-left">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-card bg-muted"
                                style={{ backgroundImage: `url(https://picsum.photos/32/32?random=${i})`, backgroundSize: 'cover' }}
                            />
                        ))}
                        <div className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-[10px] font-bold text-foreground">
                            UP
                        </div>
                    </div>
                    <div className="h-4 w-px bg-border hidden md:block"></div>
                    <span>営業・CS・コンサルが利用中</span>
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        <span className="text-foreground ml-1 font-bold">5.0</span>
                    </div>
                </div>
            </motion.div>

            {/* Hero Browser Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full max-w-5xl relative"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent blur-3xl -z-10 rounded-full opacity-50"></div>

                <div className="rounded-3xl shadow-2xl border border-border overflow-hidden h-[240px] sm:h-[320px] md:h-[600px] relative bg-gray-950">
                    <video
                        src="/demo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
