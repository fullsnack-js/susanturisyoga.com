import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Head from 'next/head'
import Link from 'next/link'
import type { ProjectPayload, SettingsPayload, YogaClass } from 'types'

import Layout from '../../shared/Layout'
import RegisterPageHead from './RegisterPageHead'
import RegisterForm from 'components/shared/Form/Register'

export interface RegisterPageProps {
  classes: YogaClass[]
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function RegisterPage({
  classes,
  settings,
  homePageTitle,
  preview,
}: RegisterPageProps) {

  const susanClasses = classes.filter(yogaClass => !yogaClass.registerUrl.includes("iyengar") && yogaClass.venue == null)
  console.log({susanClasses})

  return (
    <>
      <Head>
        <RegisterPageHead title={homePageTitle} />
      </Head>

      <Layout settings={settings} preview={preview}>
       
          <div className="mb-20 space-y-6">
            {/* Header */}
            {/* <Header title={homePageTitle} description={'sdsdgd'} /> */}

            <div className="rounded-md border">
           <RegisterForm classes={susanClasses}/>
            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
          </div>
          <div className="absolute left-0 w-screen border-t" />
        </div>
      </Layout>
    </>
  )
}
