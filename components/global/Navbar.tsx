import { Logo } from 'components/shared/Logo'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { MenuItem } from 'types'

interface NavbarProps {
  menuItems?: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
  return (
    <div className="hide sm:sticky top-0 z-10 flex flex-wrap items-center gap-x-4 sm:gap-x-5 bg-white/80 py-4 px-4 backdrop-blur md:py-5 md:px-16 lg:px-32">
      <Logo/>
      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link

            
              key={key}
              className={`text-sm sm:text-lg hover:text-black text-gray-600 md:text-xl ${
                menuItem.slug === 'contact' &&
                'flex items-center rounded-md bg-cyan-500 py-1 sm:py-2.5 px-2 sm:px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              }`}
              href={href}
            >
              {menuItem._type == 'home' ? 'Home' : menuItem.title}{' '}
              {menuItem.slug == 'contact' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 pl-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              )}
            </Link>
          )
        })}
    </div>
  )
}
