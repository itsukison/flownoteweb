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
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-900 rounded-2xl p-8 text-center border border-gray-800">
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">
          サブスクリプション完了
        </h1>
        <p className="text-gray-400 mb-6">
          お支払いが完了しました。Flownoteアプリに戻って、新しいプランをお楽しみください。
        </p>
        <p className="text-sm text-gray-500">
          アプリが自動的に開かない場合は、Flownoteアプリを手動で開いてください。
        </p>
      </div>
    </div>
  )
}

export default function SubscriptionSuccess() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-gray-900 rounded-2xl p-8 text-center border border-gray-800">
            <p className="text-gray-400">読み込み中…</p>
          </div>
        </div>
      }
    >
      <SubscriptionSuccessContent />
    </Suspense>
  )
}
