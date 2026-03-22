import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageProvider.jsx'
import Search from "../components/Search.jsx"
function Header() {
    const { t, setLang, lang } = useLanguage()
  return (
    <div className="navbar shadow-sm w-full">
      <div className="flex-1">
        <Link to="/" className=" text-xl text-primary font-bold">easy eats</Link>
      </div>
      <div className="flex gap-2">
        <Search/>
        <div className="dropdown dropdown-end pr-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                 </svg>
            </div>
          </div>
              <ul tabIndex="-1" className="mt-2 dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm text-cusLightGrey">
                <li className="hover:bg-primary hover:text-white rounded-lg"><button onClick={() => setLang('en')}>English</button></li>
                <li className="hover:bg-primary hover:text-white rounded-lg"><button onClick={() => setLang('cat')}>Català</button></li>
                <li className="hover:bg-primary hover:text-white rounded-lg"><button onClick={() => setLang('es')}>Español</button></li>
              </ul>
        </div>
      </div>
      <label className="flex cursor-pointer gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        
        <input
          type="checkbox"
          value="night"
          className="toggle theme-controller"
        />
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  )
}

export default Header