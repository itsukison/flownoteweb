import React from 'react';
import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';
import LightRays from '../LightRays';

const DownloadApp: React.FC = () => {
    const [downloadUrl, setDownloadUrl] = React.useState<string>('https://github.com/itsukison/flownote/releases/latest');

    React.useEffect(() => {
        const fetchLatestRelease = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/itsukison/flownote/releases/latest');
                if (!response.ok) return;

                const data = await response.json();
                // Find asset ending in .dmg
                const dmgAsset = data.assets?.find((asset: any) => asset.name.endsWith('.dmg'));

                if (dmgAsset) {
                    setDownloadUrl(dmgAsset.browser_download_url);
                } else {
                    // Fallback to the html_url of the release if no dmg found
                    if (data.html_url) setDownloadUrl(data.html_url);
                }
            } catch (error) {
                console.error('Failed to fetch latest release:', error);
            }
        };

        fetchLatestRelease();
    }, []);

    return (
        <section id="download" className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background LightRays */}
            <div className="absolute inset-0 w-full h-full -z-10 bg-background">
                <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#ffffff"
                        raysSpeed={1.2}
                        lightSpread={0.35}
                        rayLength={3.6}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.05}
                        distortion={0.1}
                        className="custom-rays opacity-85 mix-blend-screen"
                        pulsating={false}
                        fadeDistance={1.35}
                        saturation={1.2}
                    />
                </div>
                {/* Global accent glow to tie it together */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-accent-glow rounded-[100%] blur-[160px] opacity-30 pointer-events-none"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-foreground leading-[1.1]">
                        アプリをダウンロード
                    </h2>
                    <p className="text-xl md:text-xl text-text-secondary max-w-2xl mx-auto font-medium mb-12 leading-relaxed">
                        商談の不安を確信に変える、最高のパートナー。<br />
                        会議の隣にいるAIを、今日から。
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href={downloadUrl}
                            className="group relative bg-accent hover:bg-accent-hover text-primary-foreground font-bold text-lg px-12 py-6 rounded-full shadow-2xl shadow-accent/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <Apple size={24} className="mb-1" />
                            <span>Mac版をダウンロード</span>
                        </a>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-sm text-text-muted font-medium tracking-wide"
                    >
                        macOS 12.0以上 (Apple Silicon / Intel対応)
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default DownloadApp;
