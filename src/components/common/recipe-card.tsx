/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import type React from 'react'
import type { MouseEvent } from 'react'
import { Star, Clock, Flame, Heart, Zap } from 'lucide-react'
import Link from 'next/link'

interface RecipeCardProps {
  recipe: any
  isSaved: boolean
  onToggleSave: (id: number, e: MouseEvent) => void
  animationDelay: string
}
const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isSaved,
  onToggleSave,
  animationDelay,
}) => {
  const matchLabel =
    recipe.matchLevel === 'High match' ? 'Rất phù hợp' : 'Phù hợp'
  return (
    <Link
      href={'/recipes/' + recipe.id}
      className="bg-card border-border hover:border-primary/30 shadow-soft hover-lift group animate-stagger overflow-hidden rounded-2xl border text-left transition-all"
      style={{
        animationDelay,
        animationFillMode: 'forwards',
        opacity: 0,
      }}
    >
      {/* Image & Badges */}
      <div className="from-primary/10 via-accent/5 to-muted relative h-48 bg-linear-to-br">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
            {recipe.emoji}
          </span>
        </div>

        {/* Match Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium backdrop-blur">
          <Zap className="text-primary h-4 w-4" />
          <span className="text-secondary">{matchLabel}</span>
        </div>

        {/* Save Button */}
        <button
          onClick={(e) => onToggleSave(recipe.id, e)}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur transition-colors hover:bg-white"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isSaved ? 'fill-primary text-primary' : 'text-muted-foreground'
            }`}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-foreground group-hover:text-primary mb-3 text-lg font-bold transition-colors">
          {recipe.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {recipe.time}
            </span>
            <span className="flex items-center gap-1.5">
              <Flame className="h-4 w-4" />
              {recipe.difficulty}
            </span>
          </div>
          {/* Rating Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i <= recipe.rating ? 'fill-accent text-accent' : 'text-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
