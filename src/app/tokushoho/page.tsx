import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | Flownote',
  description: 'Flownote（フローノート）の特定商取引法に関する法律に基づく表示事項をご案内します。',
}

const tableData = [
  { label: '販売事業者', value: '株式会社Core7' },
  { label: '代表責任者', value: '孫逸歓' },
  { label: '所在地', value: '〒156-0053 東京都世田谷区桜3-9-24' },
  { label: '電話番号', value: '080-8700-4730' },
  { label: 'メールアドレス', value: 'itsukison00@gmail.com' },
  { label: '販売価格', value: '各プランの購入ページにて表示する価格' },
  { label: '商品代金以外の必要料金', value: 'インターネット接続時の通信料等の通信費用はお客様負担となります。' },
  { label: '代金の支払時期', value: 'クレジットカード決済時（ご利用のカード会社の引き落とし日）' },
  { label: '代金の支払方法', value: 'クレジットカード決済 (Stripe)' },
  { label: '商品の引渡時期', value: '決済完了後、直ちにご利用いただけます。' },
  { label: '返品・不良品・キャンセルについて', value: 'デジタルコンテンツの性質上、返品またはキャンセルはお受けできません。解約はいつでも設定画面より可能で、次回更新日以降の請求が停止されます。' },
]

export default function TokushohoPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 md:px-10 py-12 lg:py-24">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-xs font-medium text-[#A78BFA] mb-6">
          Legal
        </div>
        <h1 className="text-3xl font-bold text-[#F5F5F5] mb-4 tracking-tight">
          特定商取引法に基づく表記
        </h1>
        <p className="text-[#B8B8BE] text-base leading-relaxed">
          特定商取引に関する法律に基づく表示事項をご案内します。
        </p>
      </div>

      {/* Content Card */}
      <div className="p-6 md:p-8 rounded-2xl border border-[#2A2A2E] bg-[#111113]">
        <dl className="space-y-6">
          {tableData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-6 border-b border-[#2A2A2E] last:border-0 last:pb-0"
            >
              <dt className="w-full sm:w-1/3 text-sm font-semibold text-[#8A8A93]">
                {item.label}
              </dt>
              <dd className="w-full sm:w-2/3 text-sm text-[#F5F5F5] leading-relaxed">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
