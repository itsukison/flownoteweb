
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Download, ArrowRight, Box, Circle, Mic, Video } from 'lucide-react';
import Badge from './ui/Badge';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
    // Interactive Slider Logic
    const [dragPosition, setDragPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;
        const container = containerRef.current.getBoundingClientRect();
        let newPos = ((e.clientX - container.left) / container.width) * 100;
        newPos = Math.max(0, Math.min(100, newPos));
        setDragPosition(newPos);
    };

    useEffect(() => {
        const handleMouseUpWindow = () => setIsDragging(false);
        window.addEventListener("mouseup", handleMouseUpWindow);
        return () => window.removeEventListener("mouseup", handleMouseUpWindow);
    }, []);

    return (
        <section className="pt-18 pb-12 px-4 flex flex-col items-center text-center overflow-hidden">
            <Badge
                icon={<img src="/logo.png" className="w-4 h-4 object-contain" alt="logo" />}
                text="AI Interview Assistant"
                className="mb-6 bg-card border-border"
            />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-[1.0]"
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
                className="text-lg md:text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed font-medium"
            >
                面接も、商談も、日常の会話も。<br className="md:hidden" />
                あなたを密かに支える、次世代のリアルタイムAI
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center gap-6 mb-16"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="#download">
                        <button className="bg-accent-lime hover:bg-accent-lime-hover active:bg-accent-lime-pressed text-primary-foreground font-bold text-base px-6 py-3 rounded-full shadow-lg shadow-accent-lime/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                            <Download size={20} /> 無料で始める
                        </button>
                    </Link>
                    <Link href="/tutorial">
                        <button className="bg-card hover:bg-muted text-foreground font-bold text-base px-6 py-3 rounded-full shadow-sm border border-border transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                            <ArrowRight size={20} /> デモを見る
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium text-foreground bg-card px-6 py-2 rounded-full border border-border shadow-sm">
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
                    <span>多くの就活生が利用中</span>
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
                <div className="absolute inset-0 bg-gradient-to-t from-accent-lime/10 to-transparent blur-3xl -z-10 rounded-full opacity-50"></div>

                <div className="rounded-3xl shadow-2xl border border-border overflow-hidden h-[400px] md:h-[600px] relative bg-gray-950" ref={containerRef}>

                    <div
                        className="relative w-full h-full cursor-col-resize select-none overflow-hidden"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                    >
                        {/* Layer 1: Normal Screen (No Flownote) */}
                        <div className="absolute inset-0">
                            <img
                                src="/inivisible.png"
                                alt="Without Flownote"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur text-white text-sm px-4 py-2 rounded-lg font-medium shadow-sm border border-white/10">
                                相手に見えている画面
                            </div>
                        </div>

                        {/* Layer 2: With Flownote (Clipped) */}
                        <div
                            className="absolute inset-0"
                            style={{ clipPath: `inset(0 0 0 ${dragPosition}%)` }}
                        >
                            <img
                                src="/visible.png"
                                alt="With Flownote"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-8 right-8 bg-accent-lime/90 backdrop-blur text-primary-foreground text-sm font-bold px-4 py-2 rounded-lg shadow-lg border border-accent-lime">
                                あなたにだけ見える画面
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 h-full w-1 bg-white/20 cursor-col-resize z-30 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                            style={{ left: `${dragPosition}%`, transform: "translateX(-50%)" }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                                <div className="flex gap-1">
                                    <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
                                    <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-center items-center gap-2 text-sm text-text-secondary font-medium bg-card/50 backdrop-blur-sm py-2 px-4 rounded-full w-fit mx-auto border border-border">
                    <span className="text-lg">←</span> スライダーを動かして比較 <span className="text-lg">→</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
