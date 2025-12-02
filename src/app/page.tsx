'use client'
import { useTranslation } from 'react-i18next'
import LanguageDropdown from '~/components/common/language-dropdown'
import '~/i18n'

export default function LandingPage() {
  const { t } = useTranslation()
  return (
    <div className="">
      <section className="container mx-auto w-screen bg-slate-50 dark:bg-black">
        <div className="my-10 flex justify-between">
          <h1 className="text-4xl font-light">{t('landing.header')}</h1>
          <LanguageDropdown />
        </div>
      </section>
    </div>
  )
}
