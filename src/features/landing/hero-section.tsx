'use client'
import { ArrowRight, Camera, Check, Play, Sparkles } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

function HeroSection() {
  const { t } = useTranslation()

  const BENEFITS = [
    { label: t('hero.benefits.free') },
    { label: t('hero.benefits.accuracy') },
  ]

  const ANALYSIS_ITEMS = [
    {
      emoji: '🍅',
      width: 'w-3/4',
      percent: t('hero.analysis.tomato'),
      color: 'bg-primary/10',
      textColor: 'text-primary',
    },
    {
      emoji: '🧅',
      width: 'w-2/3',
      percent: t('hero.analysis.onion'),
      color: 'bg-accent/20',
      textColor: 'text-accent-foreground',
    },
  ]

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20">
      {/* Background decorations */}
      <div className="bg-primary/10 absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-accent/20 absolute right-10 bottom-0 h-96 w-96 rounded-full blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="bg-accent/20 text-accent-foreground mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
              <Sparkles className="text-primary h-4 w-4" />
              <span className="text-sm font-medium">{t('hero.badge')}</span>
            </div>

            <h1 className="font-display text-foreground mb-6 text-4xl leading-tight font-extrabold text-balance sm:text-5xl lg:text-6xl">
              {t('hero.title')}{' '}
              <span className="text-primary">{t('hero.titleAI')}</span>
            </h1>

            <p className="text-muted-foreground mb-8 max-w-xl text-lg leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={'/trial-demo'}
                className="gradient-primary text-primary-foreground shadow-primary btn-scale flex items-center justify-center rounded-full px-8 py-3 text-lg font-semibold"
              >
                {t('hero.ctaTry')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Button
                variant="outline"
                className="hover:bg-muted rounded-full border-2 px-8 py-6 text-lg font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                {t('hero.ctaDemo')}
              </Button>
            </div>

            <div className="text-muted-foreground flex items-center gap-6 text-sm">
              {BENEFITS.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-card shadow-soft-lg border-border/50 animate-float relative rounded-3xl border p-6">
              {/* Image mockup */}
              <div className="bg-muted relative mb-4 flex h-64 items-center justify-center overflow-hidden rounded-2xl">
                <div className="from-primary/5 to-accent/10 absolute inset-0 bg-gradient-to-br" />
                <div className="text-8xl">🥗</div>
              </div>

              <div className="space-y-3">
                {ANALYSIS_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className={`${item.color} flex h-10 w-10 items-center justify-center rounded-full text-xl`}
                    >
                      {item.emoji}
                    </div>
                    <div className="flex-1">
                      <div
                        className={`bg-muted h-2 rounded-full ${item.width}`}
                      />
                    </div>
                    <span className={`${item.textColor} text-xs font-medium`}>
                      {item.percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating badges */}
            <div className="bg-card shadow-soft border-border/50 animate-fade-up absolute -top-4 -right-4 rounded-2xl border px-4 py-3 delay-300">
              <div className="flex items-center gap-2">
                <Camera className="text-primary h-5 w-5" />
                <span className="text-sm font-medium">
                  {t('hero.badges.detection')}
                </span>
              </div>
            </div>
            <div className="bg-card shadow-soft border-border/50 animate-fade-up absolute -bottom-4 -left-4 rounded-2xl border px-4 py-3 delay-500">
              <div className="flex items-center gap-2">
                <Sparkles className="text-accent h-5 w-5" />
                <span className="text-sm font-medium">
                  {t('hero.badges.recipes')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
