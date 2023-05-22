import { Footer } from 'components/global/Footer'
import { N,Navbar } from 'components/global/Navbar'
import Sidebar from 'components/global/Sidebar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { motion } from 'framer-motion'
import IntroTemplate from 'intro-template'
import { useState } from 'react'
import { SettingsPayload } from 'types'

import Newsletter from './Newsletter'

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  preview?: boolean
  home?: boolean
}

export default function Layout({
  children,
  settings = fallbackSettings,
  preview,
  home,
}: LayoutProps) {
  
  return (
    <div className="flex min-h-screen max-w-7xl flex-col bg-white text-black">
      {preview && <PreviewBanner />}
      <Navbar menuItems={settings?.menuItems} />
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32"> 
    {children}</div>
      {home && <Newsletter />}
      <Footer menuItems={settings?.menuItems} footer={settings?.footer} />
    </div>
  )
}
