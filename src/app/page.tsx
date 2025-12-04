'use client'
import '~/i18n'
import { Fragment } from 'react'
import LandingPage from './(home)/landing-page'

export function AppContent() {
  return (
    <Fragment>
      <LandingPage />
    </Fragment>
  )
}

export default function Page() {
  return <AppContent />
}
