import CTA from 'components/shared/CTA'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { FAQ } from 'components/shared/FAQs'
import ContactForm from 'components/shared/Form'
import Image from 'next/image'
import { urlFor } from 'schemas/utils/urlFor'
import type { PageContent } from 'types'

import Schedule from './Calendar'
import Classes from './Classes'
import { IyengarClasses } from 'lib/local.data'

export function PageContentRenderer(content: PageContent) {
  console.log(content)
  switch (content[0]._type) {
    case 'faqsSection':
      return <FAQ {...content[0]} />
    case 'cta':
      return <CTA {...content[0]} />
    case 'body':
      return (
        <CustomPortableText
          paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
          value={content[0]}
        />
      )
    case 'richText':
      return (
        <CustomPortableText
          // paragraphClasses="text-base leading-7 text-gray-600"
          value={content[0].body}
        />
      )
    case 'formSection':
      return <ContactForm {...content[0]} />
    case 'figure':
      return (
        <Image
          alt={content[0].alt}
          src={urlFor(content[0].image).url()}
          width={400}
          height={300}
        />
      )
    case 'scheduleSection':
      // return <Schedule />
      // case 'class':
        return <Classes classes={IyengarClasses}/>
    default:
      return JSON.stringify(content[0], null, 2)
      break
  }
}
