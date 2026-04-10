import type { Metadata } from "next";
import { Inter, Russo_One } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { GA_TRACKING_ID, GTM_ID } from "@/lib/analytics";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flownote - 商談AIアシスタント | 会議中のリアルタイム回答支援",
  description: "商談・提案・顧客対応に特化したリアルタイムAIアシスタント（デスクトップアプリ）。資料をアップロードして会話中の質問に即応。会議の質とスピードを高めます。",
  keywords: [
    "商談AI",
    "会議アシスタント",
    "営業支援",
    "提案支援",
    "顧客対応",
    "FAQ活用",
    "リアルタイム回答",
    "ドキュメント理解",
    "AI会議ツール",
    "商談アプリ",
    "オンライン会議",
    "B2B営業",
    "カスタマーサクセス",
    "プリセールス"
  ],
  authors: [{ name: "Flownote Team" }],
  creator: "Flownote",
  publisher: "Flownote",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.flownote-jp.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ja-JP': '/',
    },
  },
  openGraph: {
    title: "Flownote - 商談AIアシスタント | 会議中のリアルタイム回答支援",
    description: "商談・提案・顧客対応に特化したリアルタイムAIアシスタント（デスクトップアプリ）。資料を活用して会話中の質問に即応します。",
    url: 'https://www.flownote-jp.com',
    siteName: 'Flownote',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flownote 商談AIアシスタント',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
    twitter: {
    card: 'summary_large_image',
    title: "Flownote - 商談AIアシスタント | 会議中のリアルタイム回答支援",
    description: "商談・提案・顧客対応に特化したリアルタイムAIアシスタント（デスクトップアプリ）。資料を活用して会話中の質問に即応します。",
    images: ['/og-image.png'],
    creator: '@flownote_app',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_YOUR_GSC_VERIFICATION_CODE',
  },
  category: 'technology',
  classification: '商談AIアシスタント',
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F0F10" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Flownote" />
        <meta name="application-name" content="Flownote" />
        <meta name="msapplication-TileColor" content="#0F0F10" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for Japanese SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Flownote",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Windows, macOS",
              "description": "商談・提案・顧客対応に特化したリアルタイムAIアシスタント。資料を活用して会話中の質問に即応。",
              "url": "https://www.flownote-jp.com",
              "downloadUrl": "https://www.flownote-jp.com/#download",
              "author": {
                "@type": "Organization",
                "name": "Flownote Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Flownote",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.flownote-jp.com/logo.png"
                }
              },
              "keywords": "商談AI,会議アシスタント,営業支援,提案支援,顧客対応,リアルタイム回答"
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Flownote",
              "legalName": "株式会社Core7",
              "url": "https://www.flownote-jp.com",
              "logo": "https://www.flownote-jp.com/logo.png",
              "description": "商談AIアシスタントの開発・提供企業",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "桜3-9-24",
                "addressLocality": "世田谷区",
                "addressRegion": "東京都",
                "postalCode": "156-0053",
                "addressCountry": "JP"
              },
              "telephone": "+81-80-8700-4730",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["Japanese"],
                "email": "itsukison00@gmail.com"
              },
              "sameAs": [
                "https://twitter.com/flownote_app"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${russoOne.variable} font-sans antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <Analytics />
        <Toaster />

        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Google Tag Manager */}
        {GTM_ID && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
