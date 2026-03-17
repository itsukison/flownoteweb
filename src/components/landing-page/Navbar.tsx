
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe, Apple, Monitor } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from 'framer-motion';
import { useLatestRelease } from '@/hooks/useLatestRelease';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { downloadUrl, os } = useLatestRelease();

    const isWindows = os === 'windows';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-4 px-4`}>
            <div className={`
        flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
        ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border border-border w-full max-w-5xl' : 'bg-transparent w-full max-w-7xl'}
      `}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-0.5 cursor-pointer group hover:opacity-80 transition-opacity">
                    <img
                        src="/logo.png"
                        alt="Flownote Logo"
                        className="w-8 h-8 object-contain"
                    />
                    <span className="font-bold text-lg tracking-tight text-foreground">Flownote</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    <Link href="#features" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors font-semibold">
                        機能
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors font-semibold">
                        お客様の声
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors font-semibold">
                        料金
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a href={downloadUrl}>
                        <button className="bg-accent text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-full hover:bg-accent-hover transition-all shadow-lg shadow-accent/10 active:scale-95 flex items-center gap-2">
                            {isWindows ? <Monitor size={16} /> : <Apple size={16} />}
                            {isWindows ? 'Windows版をダウンロード' : 'Mac版をダウンロード'}
                        </button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-card border border-border shadow-xl rounded-2xl p-6 flex flex-col gap-4 md:hidden"
                    >
                        <Link href="#features" className="font-semibold text-foreground" onClick={() => setMobileMenuOpen(false)}>機能</Link>
                        <Link href="#testimonials" className="font-semibold text-foreground" onClick={() => setMobileMenuOpen(false)}>お客様の声</Link>
                        <Link href="#pricing" className="font-semibold text-foreground" onClick={() => setMobileMenuOpen(false)}>料金</Link>
                        <div className="h-px bg-border my-2"></div>
                        <a href={downloadUrl} onClick={() => setMobileMenuOpen(false)}>
                            <Button className="w-full bg-accent text-primary-foreground hover:bg-accent-hover font-bold rounded-full flex items-center gap-2">
                                {isWindows ? <Monitor size={18} /> : <Apple size={18} />}
                                {isWindows ? 'Windows版をダウンロード' : 'Mac版をダウンロード'}
                            </Button>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
