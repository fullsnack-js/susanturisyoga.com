import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { FAQContent } from 'types'

import { CustomPortableText } from './CustomPortableText'
export const FAQ = ({ title, questions: faqs }: FAQContent) => {
  return (
    <dl className="mt-10 space-y-4 divide-y divide-gray-900/10">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-4">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-5 flex h-4 items-center">
                    {open ? (
                      <MinusSmallIcon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <CustomPortableText
                  paragraphClasses="text-base leading-7 text-gray-600"
                  value={faq.answer}
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  )
}
