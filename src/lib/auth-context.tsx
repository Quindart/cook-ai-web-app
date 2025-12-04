'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  user: { id: string; email: string; tier: 'free' | 'pro' } | null
  login: (email: string) => void
  signup: (email: string) => void
  logout: () => void
  upgradeToPro: () => void
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<AuthContextType['user']>(null)

  const login = (email: string) => {
    setIsAuthenticated(true)
    setUser({ id: 'user-1', email, tier: 'free' })
  }

  const signup = (email: string) => {
    setIsAuthenticated(true)
    setUser({ id: 'user-1', email, tier: 'free' })
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  const upgradeToPro = () => {
    if (user) {
      setUser({ ...user, tier: 'pro' })
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, signup, logout, upgradeToPro }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
