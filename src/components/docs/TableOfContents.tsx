'use client'

import { useState, useEffect } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const content = document.getElementById('tutorial-content')
    if (!content) return

    const els = content.querySelectorAll('h2[id], h3[id]')
    const tocItems: TocItem[] = []
    els.forEach((el) => {
      tocItems.push({
        id: el.id,
        text: el.textContent?.trim() || '',
        level: el.tagName === 'H2' ? 2 : 3,
      })
    })
    setItems(tocItems)
  }, [])

  useEffect(() => {
    if (items.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0% -60% 0%' }
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <aside className="fixed top-0 right-0 w-52 h-screen overflow-y-auto hidden xl:block z-40 pt-20 border-l border-[#2A2A2E]">
      <div className="px-4 py-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8A8A93] mb-4">
          このページの内容
        </p>
        <nav className="space-y-0.5">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={`block text-xs py-1 leading-relaxed transition-colors ${
                item.level === 3 ? 'pl-3 border-l border-[#2A2A2E]' : ''
              } ${
                activeId === item.id
                  ? 'text-[#A78BFA] font-medium'
                  : 'text-[#8A8A93] hover:text-[#B8B8BE]'
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
