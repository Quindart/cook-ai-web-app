/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import {
  ArrowLeft,
  Clock,
  Users,
  Flame,
  Heart,
  Share2,
  CheckCircle2,
  Play,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { mockRecipes } from '~/lib/mock-data'
import { useParams } from 'next/navigation'
import Link from 'next/link'

const tabs = [
  { id: 'overview', label: 'Tổng quan' },
  { id: 'ingredients', label: 'Nguyên liệu' },
  { id: 'steps', label: 'Các bước' },
]
export default function RecipeDetailPage() {
  const params = useParams()
  const recipeId = params.recipeId as string
  const recipe = mockRecipes.find((r) => r.id === parseInt(recipeId))
  const [isSaved, setIsSaved] = useState(false)
  const [activeTab, setActiveTab] = useState<
    'overview' | 'ingredients' | 'steps'
  >('overview')
  const detectedNames =
    recipe && (recipe.ingredients.map((i) => i.name.toLowerCase()) as any)

  const recipeIngredientsWithStatus =
    recipe &&
    (recipe.ingredients.map((ing: any) => ({
      ...ing,
      hasIngredient: detectedNames.some((name: string) =>
        ing.name.toLowerCase().includes(name),
      ),
    })) as any)

  const hasCount = recipeIngredientsWithStatus.filter(
    (i: any) => i.hasIngredient,
  ).length as any
  const totalCount = recipeIngredientsWithStatus.length as number

  if (!recipe) return null

  return (
    <div className="bg-background flex min-h-screen flex-col">
      {/* Hero Image */}
      <div className="from-primary/20 via-accent/10 to-muted relative h-72 bg-linear-to-br">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="animate-float text-9xl">{recipe.emoji}</span>
        </div>

        {/* Header */}
        <div className="absolute top-0 right-0 left-0 flex items-center justify-between p-4">
          <Link
            href={'/recipes/result'}
            className="glass text-secondary flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex gap-2">
            <button className="glass text-secondary flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white">
              <Share2 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white"
            >
              <Heart
                className={`h-5 w-5 ${isSaved ? 'fill-primary text-primary' : 'text-secondary'}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="relative z-10 -mt-6 flex-1">
        <div className="bg-background min-h-full rounded-t-3xl">
          <div className="mx-auto max-w-2xl px-6 py-8">
            {/* Title */}
            <h1 className="font-display text-foreground animate-fade-up mb-4 text-2xl font-bold">
              {recipe.name}
            </h1>
            {/* Stats */}
            <div className="animate-fade-up mb-6 grid grid-cols-3 gap-3 delay-100">
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <Clock className="text-primary mx-auto mb-2 h-5 w-5" />
                <p className="text-foreground font-bold">{recipe.time}</p>
                <p className="text-muted-foreground text-xs">Thời gian</p>
              </div>
              <div className="bg-accent/20 rounded-xl p-4 text-center">
                <Users className="text-accent-foreground mx-auto mb-2 h-5 w-5" />
                <p className="text-foreground font-bold">{recipe.servings}</p>
                <p className="text-muted-foreground text-xs">Khẩu phần</p>
              </div>
              <div className="bg-secondary/10 rounded-xl p-4 text-center">
                <Flame className="text-secondary mx-auto mb-2 h-5 w-5" />
                <p className="text-foreground font-bold">{recipe.difficulty}</p>
                <p className="text-muted-foreground text-xs">Độ khó</p>
              </div>
            </div>
            {/* Tabs */}
            <div className="animate-fade-up mb-6 flex gap-2 delay-150">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 rounded-xl py-3 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'gradient-primary text-primary-foreground shadow-primary'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Tab Content */}
            <div className="animate-fade-up delay-200">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Một món ăn đơn giản nhưng đầy hương vị, phù hợp cho bữa ăn
                    gia đình. Thời gian chuẩn bị nhanh gọn, nguyên liệu dễ tìm.
                  </p>
                  <div className="bg-card border-border rounded-xl border p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-foreground font-medium">
                        Nguyên liệu có sẵn
                      </span>
                      <span className="text-primary font-bold">
                        {hasCount}/{totalCount}
                      </span>
                    </div>
                    <div className="bg-muted h-2 overflow-hidden rounded-full">
                      <div
                        className="gradient-primary h-full transition-all"
                        style={{ width: `${(hasCount / totalCount) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'ingredients' && (
                <div className="space-y-3">
                  {recipeIngredientsWithStatus.map((ing: any, i: number) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 rounded-xl border p-4 ${
                        ing.hasIngredient
                          ? 'bg-primary/5 border-primary/20'
                          : 'bg-muted border-border'
                      }`}
                    >
                      <CheckCircle2
                        className={`h-5 w-5 ${ing.hasIngredient ? 'text-primary' : 'text-muted-foreground'}`}
                      />
                      <div className="flex-1">
                        <p
                          className={`font-medium ${ing.hasIngredient ? 'text-foreground' : 'text-muted-foreground'}`}
                        >
                          {ing.name}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {ing.amount}
                        </p>
                      </div>
                      {ing.hasIngredient && (
                        <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium">
                          Có sẵn
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'steps' && (
                <div className="space-y-4">
                  {recipe.instructions.map((step: string, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="gradient-primary text-primary-foreground shadow-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
                        {i + 1}
                      </div>
                      <p className="text-foreground pt-1 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* CTA */}
            <div className="animate-fade-up mt-8 delay-300">
              <Button
                // onClick={() => onStartCooking(recipe)}
                className="gradient-primary text-primary-foreground shadow-primary btn-scale h-14 w-full rounded-xl text-base font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Bắt đầu nấu
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
