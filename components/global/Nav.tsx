import React, { useState } from 'react';
import {Logo} from "../shared/Logo" 
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
export default function Nav () {
  const [showSidebar, setShowSidebar] = useState(false);
return (
  <>
    <nav className="flex items-center justify-between flex-wrap p-4 sm:sticky top-0 z-10 bg-white/80 backdrop-blur ">
     <div className="flex items-center flex-shrink-0 text-white mr-2 sm:mr-6 lg:mr-72">
       <Logo />
     </div>
     {/* <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div> */}
     <div
       className={`hidden md:w-full md:flex md:items-center md:w-auto`}
     >
       <div className="text-sm lg:flex-grow">
         <a href="#" className="mt-4 inline-block lg:mt-0 text-white-200 mr-4">
           First Link
         </a>
         <a href="#" className="inline-block mt-4 lg:mt-0 text-white-200 mr-4">
           Second Link
         </a>
         <a href="#" className="inline-block mt-4 inline-block lg:mt-0 text-white-200 mr-4">
           Third Link
         </a>
         <a href="#" className="inline-block mt-4 lg:mt-0 text-white-200 mr-4">
           Fourth Link
         </a>
       </div>
     
     </div>
     {/* <div className="inline-flex items-center justify-end">*/}


     <div className="justify-end items-center p-0 mr-4 md:mr-0 sm:py-2"> 
         <button className="inline-flex justify-end items-center rounded-md bg-amber-500 hover:bg-amber-400 border-0 p-2 mr-6 text-white">
           Click Me &rarr;
         </button>
       </div>
       {/* <div className="relative z-10 flex items-center lg:hidden"> */}
                {/* Mobile menu button */}
                
   
          </nav><button className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-4 z-[100] md:hidden" onClick={()=>setShowSidebar(!showSidebar)}>
                  <span className="sr-only">Open menu</span>
                  {showSidebar ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed mt-2 z-30 flex items-center cursor-pointer right-10 top-4"
          fill="#2563EB"
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
              {/* </div>      */}
              {/* </div> */}<div
        className={`top-0 right-0 w-[50vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h3>
        <ul>
        <div className="text-sm lg:flex-grow">
         <a href="#" className="mt-4 inline-block lg:mt-0 text-white-200 mr-4">
           First Link
         </a>
         <a href="#" className="inline-block mt-4 lg:mt-0 text-white-200 mr-4">
           Second Link
         </a>
         <a href="#" className="inline-block mt-4 inline-block lg:mt-0 text-white-200 mr-4">
           Third Link
         </a>
         <a href="#" className="inline-block mt-4 lg:mt-0 text-white-200 mr-4">
           Fourth Link
         </a>
       </div>
        </ul>
      </div>    
   </>
)
}
