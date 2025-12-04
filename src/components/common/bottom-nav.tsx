'use client'

import { Home, Search, User, BookOpen } from 'lucide-react'

interface BottomNavProps {
  activeScreen: string
  onNavigate: (screen: string) => void
}

export default function BottomNav({
  activeScreen,
  onNavigate,
}: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Trang chủ' },
    { id: 'search', icon: Search, label: 'Tìm kiếm' },
    { id: 'recipes', icon: BookOpen, label: 'Công thức' },
    { id: 'profile', icon: User, label: 'Tài khoản' },
  ]

  return (
    <nav className="bg-card border-border pb-safe fixed right-0 bottom-0 left-0 z-40 border-t">
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeScreen === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`btn-scale flex flex-col items-center justify-center gap-1 rounded-xl px-4 py-2 transition-all ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <item.icon
                className={`h-5 w-5 ${isActive ? 'stroke-[2.5]' : ''}`}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
