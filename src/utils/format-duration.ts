import i18n from '~/i18n'

type UnitLabels = {
  hour: string
  hourPlural?: string
  minute: string
  minutePlural?: string
  compact?: boolean
}

const DEFAULT_LOCALE = 'en'

const LABELS_BY_LANG: Record<string, UnitLabels> = {
  vi: { hour: 'tiếng', minute: 'phút' },
  en: { hour: 'hr', hourPlural: 'hrs', minute: 'min', minutePlural: 'mins' },
}

function getLabels(lang?: string): UnitLabels {
  const base = (lang || i18n.language || DEFAULT_LOCALE).split('-')[0]
  return LABELS_BY_LANG[base] || LABELS_BY_LANG[DEFAULT_LOCALE]
}

export default function formatDurationFromMinutes(
  totalMinutes: number,
  lang?: string,
): string {
  if (!Number.isFinite(totalMinutes) || totalMinutes < 0) return ''

  const labels = getLabels(lang)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.floor(totalMinutes % 60)

  const space = labels.compact ? '' : ' '

  const parts: string[] = []

  if (hours > 0) {
    const unit = hours === 1 ? labels.hour : labels.hourPlural || labels.hour
    parts.push(`${hours}${space}${unit}`)
  }
  if (minutes > 0 || parts.length === 0) {
    const unit =
      minutes === 1 ? labels.minute : labels.minutePlural || labels.minute
    parts.push(`${minutes}${space}${unit}`)
  }
  return parts.join(labels.compact ? '' : ' ')
}

export default formatDurationFromMinutes
