import Link from 'next/link'
import { Button } from '../ui/button'
import LanguageDropdown from './language-dropdown'

function Header() {
  return (
    <header className="glass border-border/50 fixed top-0 right-0 left-0 z-50 border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="gradient-primary shadow-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <span className="text-xl">🍳</span>
          </div>
          <span className="font-display text-foreground text-xl font-bold">
            AI Cook
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="mx-2 flex gap-2">
            <Link
              className="text-foreground hover:text-primary flex items-center p-2 font-medium transition-colors sm:block"
              href="/auth/sign-in"
            >
              Đăng nhập
            </Link>
            <Link
              href="/signup"
              className="gradient-primary text-primary-foreground shadow-primary btn-scale flex items-center rounded-full px-6 font-semibold"
            >
              Bắt đầu
            </Link>
          </div>

          <LanguageDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header
