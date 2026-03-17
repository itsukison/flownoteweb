import { useState, useEffect } from 'react';

export type OS = 'mac' | 'windows' | 'other';

export const useLatestRelease = () => {
    const [downloadUrl, setDownloadUrl] = useState<string>('https://github.com/itsukison/flownote/releases/latest');
    const [os, setOs] = useState<OS>('other');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const detectOS = () => {
            if (typeof window === 'undefined') return 'other';
            const userAgent = window.navigator.userAgent;
            const platform = (window.navigator as any).platform || '';
            
            if (userAgent.includes('Mac') || platform.includes('Mac')) {
                return 'mac';
            } else if (userAgent.includes('Win') || platform.includes('Win')) {
                return 'windows';
            }
            return 'other';
        };

        const currentOs = detectOS();
        setOs(currentOs);

        const fetchLatestRelease = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/itsukison/flownote/releases/latest');
                if (!response.ok) {
                    setIsLoading(false);
                    return;
                }

                const data = await response.json();
                const assets = data.assets || [];

                // Find asset based on OS
                let asset;
                if (currentOs === 'mac') {
                    asset = assets.find((a: any) => a.name.endsWith('.dmg'));
                } else if (currentOs === 'windows') {
                    asset = assets.find((a: any) => a.name.endsWith('.exe') || a.name.endsWith('.msi'));
                } else {
                    // Default to dmg if other (e.g. Linux users might want to see something, but dmg is primary)
                    asset = assets.find((a: any) => a.name.endsWith('.dmg'));
                }

                if (asset) {
                    setDownloadUrl(asset.browser_download_url);
                } else if (data.html_url) {
                    setDownloadUrl(data.html_url);
                }
            } catch (error) {
                console.error('Failed to fetch latest release:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLatestRelease();
    }, []);

    return { downloadUrl, os, isLoading };
};
