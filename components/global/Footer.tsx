import { CustomPortableText } from 'components/shared/CustomPortableText'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { PortableTextBlock } from 'sanity'
import { MenuItem } from 'types'
interface FooterProps {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
}
export function Footer({ footer, menuItems }: FooterProps) {
  return (
    <footer className="bottom-0 w-full">
      <div className=" mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        {/* {footer && (
          <CustomPortableText
            paragraphClasses="text-md md:text-xl"
            value={footer}
          />
        )} */}
        <nav
          className="-mb-6 flex flex-wrap justify-center space-x-10 pt-6 sm:flex-nowrap"
          aria-label="Footer"
        >
          {menuItems &&
            menuItems.map((menuItem, key) => {
              const href = resolveHref(menuItem?._type, menuItem?.slug)
              if (!href) {
                return null
              }
              return (
                <Link
                  key={key}
                  className={`md:text-md pb-6 text-sm leading-6 text-gray-600 hover:text-gray-900`}
                  href={href}
                >
                  {menuItem.title.startsWith('Susan') ? 'Home' : menuItem.title}
                </Link>
              )
            })}
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Susan Turis Yoga. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
