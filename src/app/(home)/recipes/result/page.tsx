/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import type React from 'react'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { mockRecipes } from '~/lib/mock-data'
import Link from 'next/link'
import RecipeCard from '~/components/common/recipe-card'

export default function RecipeResultsPage() {
  const [sortBy, setSortBy] = useState<
    'relevance' | 'time' | 'difficulty' | 'rating'
  >('relevance')
  const [savedRecipes, setSavedRecipes] = useState<number[]>([])
  const sortedRecipes = [...mockRecipes].sort((a, b) => {
    switch (sortBy) {
      case 'time':
        return Number.parseInt(a.time) - Number.parseInt(b.time)
      case 'rating':
        return b.rating - a.rating
      case 'difficulty':
        const diffOrder = { Easy: 0, Medium: 1, Hard: 2 }
        return (
          (diffOrder[a.difficulty as keyof typeof diffOrder] || 0) -
          (diffOrder[b.difficulty as keyof typeof diffOrder] || 0)
        )
      default:
        return 0
    }
  })
  const toggleSave = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setSavedRecipes((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }
  return (
    <div className="bg-background flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-card border-border sticky top-0 z-10 border-b px-6 py-4">
        <div className="mb-4 flex items-center gap-4">
          <Link
            href={'/trial-demo'}
            className="text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="font-display text-foreground text-lg font-bold">
              Công thức gợi ý
            </h1>
            <p className="text-muted-foreground text-xs">
              {sortedRecipes.length} kết quả
            </p>
          </div>
        </div>

        {/* Sort Buttons */}
        <div className="scrollbar-hide -mx-6 flex gap-2 overflow-x-auto px-6 pb-1">
          {[
            { value: 'relevance', label: 'Phù hợp nhất', icon: '' },
            { value: 'time', label: 'Nhanh nhất', icon: '⏱' },
            { value: 'difficulty', label: 'Dễ nhất', icon: '' },
            { value: 'rating', label: 'Đánh giá cao', icon: '' },
          ].map(({ value, label, icon }) => (
            <button
              key={value}
              onClick={() => setSortBy(value as any)}
              className={`btn-scale flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
                sortBy === value
                  ? 'gradient-primary text-primary-foreground shadow-primary'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </header>
      {/* Results */}
      <main className="flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sortedRecipes.map((recipe) => (
              <RecipeCard
                animationDelay="0ms"
                key={recipe.id}
                recipe={recipe}
                isSaved={savedRecipes.includes(recipe.id)}
                onToggleSave={toggleSave}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
