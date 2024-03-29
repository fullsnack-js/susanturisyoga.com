import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import React, { useState } from 'react';
import { MenuItem } from 'types'

import {Logo} from "../shared/Logo" 

interface NavbarProps {
  menuItems?: MenuItem[]
}

export default function Nav ({ menuItems }: NavbarProps) {
  const [showSidebar, setShowSidebar] = useState(false);
return (
  <>
    <nav className="flex items-center justify-between flex-wrap p-4 sm:sticky top-0 z-10 bg-white/80 backdrop-blur ">
     <div className="flex items-center flex-shrink-0 text-white mr-2 sm:mr-6 lg:mr-72">
      <Link href="/">
       <Logo /></Link>
     </div>
    
     <div
       className={`hidden md:w-full md:flex md:items-center md:justify-between md:w-auto`}
     >
       <div className="text-sm lg:flex-grow">
       {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={key}
              className={`text-sm sm:text-lg pr-2 hover:text-black text-gray-600 md:text-xl`}
              href={href}
            >
              {menuItem._type == 'home' ? 'Home' : menuItem.title}{' '}
              
            </Link>
          )
        })}
     
         
       </div>
     
     </div>
   
     <div className="justify-end items-center p-0 mr-4 md:mr-0 sm:py-2"> 
         <button className="inline-flex justify-end items-center rounded-md bg-emerald-600 hover:bg-emerald-500 border-0 p-2 mr-6 text-white">
           <Link href="/schedule">Take a Class &rarr;</Link>
         </button>
       </div>
       
          </nav><button className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-4 z-[100] md:hidden" onClick={()=>setShowSidebar(!showSidebar)}>
                  <span className="sr-only">Open menu</span>
                  {showSidebar ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed mt-2 z-100 flex items-center cursor-pointer right-10 top-4 text-brand-400"
          // fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
                  )}
                </button>
          <div
        className={`top-0 right-0 w-[50vw] bg-brand-200/[0.97] px-5 py-5 pl-10 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-sans font-semibold text-white">
          Susan Turis Yoga
        </h3>
        <ul>
        <div className="text-sm flex flex-col w-[12em] sm:w-[10em] mr-0">
         {/* <a href="#" className="mt-4 inline-block lg:mt-0 text-white-200 mr-4"> */}
         {menuItems &&
        menuItems.filter(menuItem => menuItem?.title != 'contact').map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={key}
              className={`text-sm sm:text-lg mt-4 hover:text-gray-700 mr-4 text-black md:text-xl`}
              href={href}
            >
            {menuItem._type == 'home' ? 'Home' : menuItem.title}{' '}
            </Link>
          )
        })}
        
        
        <button className="inline-flex justify-end items-center mt-4 rounded-md bg-emerald-500 hover:bg-emerald-400 border-0 p-2 mr-6 text-white">
           <Link href='/schedule'>Take a Class &rarr;</Link>
         </button>
         {/* </a> */}
         
       </div>
        </ul>
      </div>    
   </>
)
}

