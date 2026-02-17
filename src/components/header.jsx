import React from 'react'
import { useLanguage } from '../LanguageProvider.jsx'
function Header() {
    const { t, setLang, lang } = useLanguage()
  return (
    <div className="navbar shadow-sm w-full">
      <div className="flex-1">
        <a className=" text-xl text-cusGreen font-bold">easy eats</a>
      </div>
      <div className="flex gap-2">
        <input type="text" placeholder={t('header.text1')} className="input input-bordered w-24 md:w-auto" />
        <div className="dropdown dropdown-end pr-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                 </svg>
            </div>
          </div>
              <ul tabIndex="-1" className="mt-2 dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm text-cusLightGrey">
                <li className="hover:bg-cusGreen hover:text-white rounded-lg"><button onClick={() => setLang('en')}>English</button></li>
                <li className="hover:bg-cusGreen hover:text-white rounded-lg"><button onClick={() => setLang('cat')}>Català</button></li>
                <li className="hover:bg-cusGreen hover:text-white rounded-lg"><button onClick={() => setLang('es')}>Español</button></li>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default Header