import React from 'react'
import { useLanguage } from '../LanguageProvider'
function header() {
    const { t, setLang, lang } = useLanguage()
  return (
    <div>
        <header className="sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-5 md:px-10 items-center">
      
      {/* Left - Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <div className="text-cusGreen font-bold text-2xl flex items-center gap-1">
          {/* Simple placeholder for the Airbnb logo */}
          <span className=" md:inline">easy eats</span>
        </div>
      </div>

      {/* Center - Search Bar (The Pill) */}
      {/* <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm hover:shadow-md transition duration-200 cursor-pointer">
        <input 
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" 
          type="text" 
          placeholder="Start your search" 
        />
        <div className="hidden md:inline-flex bg-rose-500 text-white p-2 rounded-full mx-2">
          
        </div>
      </div> */}

      {/* Right - User Menu */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <div className="dropdown dropdown-center">
        <div tabIndex={0} role="button" className="">
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
            </div>
        </div>
          <ul tabIndex="-1" className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm text-cusLightGrey">
            <li className="hover:bg-cusGreen hover:text-white rounded-lg"><button onClick={() => setLang('en')}>English</button></li>
            <li className="hover:bg-cusGreen hover:text-white rounded-lg"><button onClick={() => setLang('cat')}>Català</button></li>
            <li className="hover:bg-cusGreen hover:text-white rounded-lg"><button onClick={() => setLang('es')}>Español</button></li>
          </ul>
        </div>
        <p className="md:inline whitespace-nowrap cursor-pointer hover:bg-gray-100 p-3 rounded-full text-sm font-semibold text-gray-700">
          {t('header.text1')}
        </p>
      </div>

    </header>
    </div>
  )
}

export default header