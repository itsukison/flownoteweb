export default function SubscriptionCancel() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-900 rounded-2xl p-8 text-center border border-gray-800">
        <div className="w-16 h-16 bg-gray-700/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">
          購入がキャンセルされました
        </h1>
        <p className="text-gray-400 mb-6">
          サブスクリプションの購入はキャンセルされました。Flownoteアプリに戻って、いつでも再度お試しください。
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          トップページに戻る
        </a>
      </div>
    </div>
  )
}
