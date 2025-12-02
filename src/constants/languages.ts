export interface Language {
  code: string
  label: string
  flag: string
}

export const AVAILABLE_LANGUAGE: Language[] = [
  { code: 'en', label: 'English', flag: '/assets/flags/en.png' },
  { code: 'vi', label: 'Tiếng Việt', flag: '/assets/flags/vi.png' },
]
