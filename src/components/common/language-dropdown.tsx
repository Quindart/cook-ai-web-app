'use client'
import { useState, type HtmlHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { AVAILABLE_LANGUAGE, type Language } from '~/constants/languages'
import { cn } from '~/lib/utils'
import useGlobalStore from '~/stores/use-global-store'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import Image from 'next/image'

interface LanguageDropdownProps extends HtmlHTMLAttributes<HTMLDivElement> {
  className?: string
}

export default function LanguageDropdown(props: LanguageDropdownProps) {
  const { className, ...rest } = props
  const { setSelectedLanguageCode, selectedLanguageCode } = useGlobalStore()
  const [selectedLang, setSelectedLang] = useState<Language | undefined>(
    AVAILABLE_LANGUAGE.find(
      (lang: Language) => lang.code === selectedLanguageCode,
    ),
  )
  console.log('🚀 ~ LanguageDropdown ~ selectedLang:', selectedLang)
  const { i18n } = useTranslation()

  const handleSelect = (lang: Language) => {
    setSelectedLang(lang)
    setSelectedLanguageCode(lang.code)
    i18n.changeLanguage(lang.code.split('-')[0])
  }

  return (
    <div
      {...rest}
      className={cn('relative z-100 flex flex-col items-center', className)}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-8 w-8 cursor-pointer rounded-full shadow-md">
            <Image
              width={32}
              height={32}
              src={selectedLang?.flag ?? ''}
              alt={selectedLang?.code ?? 'language-code'}
              className="h-full w-full"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-100 min-w-40">
          {AVAILABLE_LANGUAGE.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex h-10 w-full cursor-pointer items-center justify-start gap-2 px-2"
            >
              <Image
                width={32}
                height={32}
                src={lang.flag}
                alt={lang.label}
                className="h-8 w-8 rounded-full"
              />
              <span
                className={cn(
                  'flex grow items-center justify-center text-xs font-semibold',
                  selectedLang &&
                    selectedLang.code === lang.code &&
                    'text-primary',
                )}
              >
                {lang.label}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
