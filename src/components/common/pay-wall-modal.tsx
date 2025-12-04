'use client'

import { X, Lock, ArrowRight } from 'lucide-react'
import { Button } from '~/components/ui/button'

interface PaywallModalProps {
  isOpen: boolean
  onClose: () => void
  onUpgrade: () => void
  feature: 'image_upload' | 'unlimited' | 'cooking_mode'
}

export default function PaywallModal({
  isOpen,
  onClose,
  onUpgrade,
  feature,
}: PaywallModalProps) {
  if (!isOpen) return null

  const featureInfo = {
    image_upload: {
      title: 'Image Upload Requires Pro',
      description:
        'Unlock AI image recognition to detect ingredients from photos instantly.',
      benefit: 'Upload unlimited photos',
    },
    unlimited: {
      title: 'Unlimited Uploads Available',
      description: 'Go Pro for unlimited image uploads and advanced features.',
      benefit: 'Unlimited photo uploads',
    },
    cooking_mode: {
      title: 'Cooking Mode - Pro Feature',
      description: 'Get step-by-step guided cooking with timing and tips.',
      benefit: 'Full cooking mode access',
    },
  }

  const info = featureInfo[feature]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="bg-card border-border animate-scale-in w-full max-w-md rounded-3xl border p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
            <Lock className="text-primary h-6 w-6" />
          </div>
          <button
            onClick={onClose}
            className="hover:bg-muted rounded-lg p-2 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <h2 className="font-display text-foreground mb-3 text-2xl font-bold">
          {info.title}
        </h2>
        <p className="text-muted-foreground mb-6">{info.description}</p>

        <div className="bg-primary/5 border-primary/20 mb-6 rounded-xl border p-4">
          <p className="text-foreground flex items-center gap-2 text-sm font-semibold">
            <span className="text-primary">✓</span>
            {info.benefit}
          </p>
        </div>

        <div className="mb-6 space-y-3">
          <div className="text-foreground flex items-center gap-2 text-sm">
            <span className="text-primary">✓</span>
            Unlimited recipe suggestions
          </div>
          <div className="text-foreground flex items-center gap-2 text-sm">
            <span className="text-primary">✓</span>
            Advanced filtering options
          </div>
          <div className="text-foreground flex items-center gap-2 text-sm">
            <span className="text-primary">✓</span>
            Save favorite recipes
          </div>
          <div className="text-foreground flex items-center gap-2 text-sm">
            <span className="text-primary">✓</span>
            AI cooking assistant
          </div>
        </div>

        <Button
          onClick={onUpgrade}
          className="bg-primary hover:bg-primary/90 text-primary-foreground mb-3 flex w-full items-center justify-center gap-2 rounded-full py-3 font-semibold"
        >
          Upgrade to Pro <ArrowRight className="h-5 w-5" />
        </Button>

        <button
          onClick={onClose}
          className="text-foreground hover:bg-muted w-full rounded-full py-3 font-semibold transition-colors"
        >
          Maybe Later
        </button>

        <p className="text-muted-foreground mt-4 text-center text-xs">
          Pro: $9.99/month or $79.99/year
        </p>
      </div>
    </div>
  )
}
