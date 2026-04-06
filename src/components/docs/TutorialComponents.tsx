import { AlertTriangle, Info, Lightbulb, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export function Step({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4 mb-2">
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/25 flex items-center justify-center">
          <span className="text-xs font-bold text-[#A78BFA]">{number}</span>
        </div>
        <div className="w-px flex-1 bg-[#2A2A2E] mt-2 mb-2" />
      </div>
      <div className="flex-1 min-w-0 pb-6">
        <p className="font-semibold text-[#F5F5F5] mb-2 text-sm leading-snug">{title}</p>
        <div className="text-sm text-[#B8B8BE] leading-relaxed space-y-2">{children}</div>
      </div>
    </div>
  )
}

export function StepLast({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/25 flex items-center justify-center mt-0.5">
        <span className="text-xs font-bold text-[#A78BFA]">{number}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#F5F5F5] mb-2 text-sm leading-snug">{title}</p>
        <div className="text-sm text-[#B8B8BE] leading-relaxed space-y-2">{children}</div>
      </div>
    </div>
  )
}

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: 'info' | 'warning' | 'tip'
  title?: string
  children: React.ReactNode
}) {
  const config = {
    info: {
      border: 'border-blue-500/25',
      bg: 'bg-blue-500/5',
      icon: <Info size={14} className="text-blue-400 shrink-0 mt-0.5" />,
      titleColor: 'text-blue-300',
      bodyColor: 'text-blue-200/75',
    },
    warning: {
      border: 'border-amber-500/25',
      bg: 'bg-amber-500/5',
      icon: <AlertTriangle size={14} className="text-amber-400 shrink-0 mt-0.5" />,
      titleColor: 'text-amber-300',
      bodyColor: 'text-amber-200/75',
    },
    tip: {
      border: 'border-[#A78BFA]/25',
      bg: 'bg-[#A78BFA]/5',
      icon: <Lightbulb size={14} className="text-[#A78BFA] shrink-0 mt-0.5" />,
      titleColor: 'text-[#A78BFA]',
      bodyColor: 'text-[#C4B5FD]/75',
    },
  }
  const c = config[type]
  return (
    <div className={`flex gap-3 rounded-xl border p-4 my-6 ${c.border} ${c.bg}`}>
      {c.icon}
      <div>
        {title && (
          <p className={`text-xs font-semibold mb-1 ${c.titleColor}`}>{title}</p>
        )}
        <div className={`text-sm leading-relaxed ${c.bodyColor}`}>{children}</div>
      </div>
    </div>
  )
}

export function UITag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#1C1C1F] border border-[#2A2A2E] text-[11px] font-medium text-[#F5F5F5] whitespace-nowrap align-middle">
      {children}
    </span>
  )
}

export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center px-1.5 py-0.5 rounded border border-[#2A2A2E] bg-[#1C1C1F] text-xs font-mono text-[#B8B8BE] align-middle">
      {children}
    </kbd>
  )
}

export function ImagePlaceholder({
  label,
  aspectRatio = '16/9',
  description,
}: {
  label: string
  aspectRatio?: string
  description?: string
}) {
  return (
    <div className="my-8">
      <div
        className="w-full rounded-2xl border border-[#2A2A2E] bg-[#111113] flex flex-col items-center justify-center"
        style={{ aspectRatio }}
      >
        <div className="text-center p-8">
          <div className="w-12 h-12 rounded-xl bg-[#1C1C1F] border border-[#2A2A2E] mx-auto mb-3 flex items-center justify-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[#8A8A93]"
            >
              <rect x="3" y="3" width="18" height="18" rx="2.5" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
          <p className="text-xs text-[#8A8A93] font-medium">{label}</p>
          {description && (
            <p className="text-[10px] text-[#8A8A93]/50 mt-1 max-w-xs mx-auto">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export function NextTutorial({
  href,
  label,
  description,
}: {
  href: string
  label: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between p-5 rounded-2xl border border-[#2A2A2E] bg-[#1C1C1F] hover:border-[#A78BFA]/40 hover:bg-[#A78BFA]/5 transition-all mt-14 mb-10 no-underline"
    >
      <div>
        <p className="text-[10px] font-semibold text-[#8A8A93] uppercase tracking-widest mb-1">
          次のチュートリアル
        </p>
        <p className="font-semibold text-[#F5F5F5] group-hover:text-[#A78BFA] transition-colors">
          {label}
        </p>
        <p className="text-xs text-[#8A8A93] mt-0.5 leading-relaxed">{description}</p>
      </div>
      <ChevronRight
        size={18}
        className="text-[#8A8A93] group-hover:text-[#A78BFA] group-hover:translate-x-0.5 transition-all shrink-0 ml-4"
      />
    </Link>
  )
}

export function SectionDivider() {
  return <div className="border-t border-[#2A2A2E] my-10" />
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-[#8A8A93] mb-8">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="text-[#2A2A2E]">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-[#B8B8BE] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#B8B8BE]">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
