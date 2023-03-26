import CTA from 'components/shared/CTA'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { FAQ } from 'components/shared/FAQs'
import ContactForm from 'components/shared/Form'
import type { PageContent } from 'types'

export function PageContentRenderer(content: PageContent) {
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
    default:
      return JSON.stringify(content[0], null, 2)
      break
  }
}
