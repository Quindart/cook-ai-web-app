'use client'
import { useState } from 'react'
import { ArrowLeft, Sparkles, X, Plus } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const suggestedIngredients = [
  'Cà chua',
  'Hành tây',
  'Tỏi',
  'Thịt bò',
  'Trứng',
  'Cơm nguội',
]

export default function DemoPage() {
  const [inputText, setInputText] = useState('')
  const [ingredients, setIngredients] = useState<string[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAddIngredient = () => {
    if (inputText.trim() && !ingredients.includes(inputText.trim())) {
      setIngredients([...ingredients, inputText.trim()])
      setInputText('')
    }
  }

  const handleRemoveIngredient = (ing: string) => {
    setIngredients(ingredients.filter((i) => i !== ing))
  }

  const handleAnalyze = () => {
    if (ingredients.length === 0) return

    setIsAnalyzing(true)
    setTimeout(() => {
      redirect('/recipes/result')
    }, 800)
  }

  return (
    <div className="bg-background flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-card border-border sticky top-0 z-10 border-b px-6 py-4">
        <div className="flex items-center gap-4">
          <Link
            href={'/'}
            className="text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="font-display text-foreground text-lg font-bold">
              Nhập nguyên liệu
            </h1>
            <p className="text-muted-foreground text-xs">
              Miễn phí - 5 lượt/ngày
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6">
        <div className="mx-auto max-w-lg space-y-6">
          {/* Input */}
          <div className="animate-fade-up">
            <label className="text-foreground mb-2 block text-sm font-medium">
              Thêm nguyên liệu
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddIngredient()}
                placeholder="VD: cà chua, thịt bò..."
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 h-12 flex-1 rounded-xl border px-4 focus:ring-2 focus:outline-none"
              />
              <Button
                onClick={handleAddIngredient}
                disabled={!inputText.trim()}
                className="gradient-primary text-primary-foreground h-12 rounded-xl px-4 disabled:opacity-50"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="animate-fade-up delay-150">
            <p className="text-muted-foreground mb-3 text-sm">Gợi ý nhanh:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedIngredients.map((ing) => (
                <button
                  key={ing}
                  onClick={() => {
                    if (!ingredients.includes(ing)) {
                      setIngredients([...ingredients, ing])
                    }
                  }}
                  disabled={ingredients.includes(ing)}
                  className="bg-muted text-foreground hover:bg-muted/80 btn-scale rounded-full px-4 py-2 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50"
                >
                  + {ing}
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients List */}
          {ingredients.length > 0 && (
            <div className="animate-fade-up delay-200">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-foreground text-sm font-medium">
                  Nguyên liệu đã thêm ({ingredients.length})
                </p>
                <button
                  onClick={() => setIngredients([])}
                  className="text-muted-foreground hover:text-destructive text-sm transition-colors"
                >
                  Xóa tất cả
                </button>
              </div>
              <div className="bg-card border-border rounded-2xl border p-4">
                <div className="flex flex-wrap gap-2">
                  {ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    >
                      {ing}
                      <button
                        onClick={() => handleRemoveIngredient(ing)}
                        className="hover:text-destructive transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="animate-fade-up pt-4 delay-300">
            <Button
              onClick={handleAnalyze}
              disabled={ingredients.length === 0 || isAnalyzing}
              className="gradient-primary text-primary-foreground shadow-primary btn-scale h-14 w-full rounded-xl text-base font-semibold disabled:opacity-50"
            >
              {isAnalyzing ? (
                <div className="flex items-center gap-2">
                  <div className="border-primary-foreground/30 border-t-primary-foreground h-5 w-5 animate-spin rounded-full border-2" />
                  Đang tìm...
                </div>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Tìm công thức ({ingredients.length} nguyên liệu)
                </>
              )}
            </Button>
          </div>

          {/* Upgrade Banner */}
          <div className="bg-accent/10 border-accent/20 animate-fade-up mt-8 rounded-2xl border p-6 delay-400">
            <h3 className="text-foreground mb-2 font-semibold">
              Muốn nhanh hơn?
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Nâng cấp Pro để upload ảnh và để AI tự động nhận diện nguyên liệu
            </p>
            <Button
              variant="outline"
              className="btn-scale rounded-full border-2 bg-transparent font-semibold"
            >
              Tìm hiểu Pro →
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
