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
        {footer && (
          <CustomPortableText
            paragraphClasses="text-md md:text-xl"
            value={footer}
          />
        )}
        <div className="mt-12 pb-6 border-t border-gray-900/10 pt-6 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <hr />
        <nav
          className="pt-6 -mb-6 flex flex-wrap sm:flex-nowrap justify-center space-x-14"
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
                  className={`pb-6 text-sm md:text-md leading-6 text-gray-600 hover:text-gray-900`}
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
