export const demoMode = {
  simulateImageDetection: async (delay = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, delay))
  },
  simulateTextAnalysis: async (delay = 500) => {
    return new Promise((resolve) => setTimeout(resolve, delay))
  },

  textSearchesPerDay: 5,
  imageUploadsPerDay: 0,

  getDemoUsage: () => {
    const today = new Date().toDateString()
    const stored = localStorage.getItem('demo-usage')

    if (!stored) {
      const initial = { date: today, textSearches: 0, imageUploads: 0 }
      localStorage.setItem('demo-usage', JSON.stringify(initial))
      return initial
    }

    const parsed = JSON.parse(stored)
    if (parsed.date !== today) {
      const reset = { date: today, textSearches: 0, imageUploads: 0 }
      localStorage.setItem('demo-usage', JSON.stringify(reset))
      return reset
    }

    return parsed
  },

  trackTextSearch: () => {
    const usage = demoMode.getDemoUsage()
    usage.textSearches += 1
    localStorage.setItem('demo-usage', JSON.stringify(usage))
    return usage.textSearches <= demoMode.textSearchesPerDay
  },

  canUploadImage: () => {
    const usage = demoMode.getDemoUsage()
    return usage.imageUploads < demoMode.imageUploadsPerDay
  },
}
