'use client'

import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

function SubscriptionSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    // Attempt to trigger the Electron app via custom protocol
    // This signals the app to re-fetch the user's profile immediately
    if (sessionId) {
      window.location.href = `flownote://subscription-updated?session_id=${sessionId}`
    }
  }, [sessionId])

  return (
    <div className="min-h-screen bg-[#0F0F10] flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-[#111113] rounded-2xl p-8 sm:p-10 text-center border border-[#2A2A2E] shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#A78BFA]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="relative">
          <div className="w-16 h-16 bg-[#1C1C1F] border border-[#2A2A2E] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg className="w-8 h-8 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4 tracking-tight">
            サブスクリプション完了
          </h1>
          <p className="text-[#B8B8BE] text-base leading-relaxed mb-8">
            お支払いが完了しました。Flownoteアプリに戻って、新しいプランをお楽しみください。
          </p>
          <div className="p-4 bg-[#1C1C1F] rounded-xl border border-[#2A2A2E]">
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              アプリが自動的に開かない場合は、ブラウザを閉じて手動でFlownoteを開いてください。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SubscriptionSuccess() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0F0F10] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#111113] rounded-2xl p-8 text-center border border-[#2A2A2E]">
            <p className="text-[#8A8A93]">読み込み中…</p>
          </div>
        </div>
      }
    >
      <SubscriptionSuccessContent />
    </Suspense>
  )
}
