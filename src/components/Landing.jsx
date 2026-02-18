import React from 'react'
import { useLanguage } from '../LanguageProvider'
import { Link } from 'react-router-dom'
import famBake1 from '../assets/familybake1.jpg'
import background1 from "../assets/background1.png"
function Landing() {
    const { t } = useLanguage()
  return (

    <div className="hero min-h-screen bg-cover bg-center overflow-x-hidden" style={{ backgroundImage: `url(${background1})` }}>
      <div className="hero-content flex-col lg:flex-row w-full max-w-full p-4 gap-8">
        <img
          src={famBake1}
          className="w-full max-w-sm rounded-lg shadow-2xl"
        />
          <div className="py-4">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
               {t('landing.tag1')}
               <strong className="text-cusRed"> {t('landing.tag2')} </strong>
               {t('landing.tag3')}
            </h1>
            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed py-2">
              {t('landing.intro')}
            </p>
            <div className="mt-4 flex gap-4 sm:mt-6">
              <a className="inline-block rounded border border-cusRed bg-cusRed px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-300 hover:border-red-300" href="#">
                {t('landing.button1')}
              </a>           
              <Link
                to="/allrecipes"
               className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900">
                {t('landing.button2')}
              </Link>
            </div>
            <p>proof push went live</p>
          </div>
      </div>
    </div>
  )
}

export default Landing