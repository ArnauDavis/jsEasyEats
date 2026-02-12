import React from 'react'
import { useLanguage } from '../LanguageProvider.jsx'
// changed casing on file name
function Landing() {
    const { t } = useLanguage()
  return (
    <div>
        <section class="bg-white lg:grid lg:h-screen lg:place-content-center">
            <div class="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
              <div class="max-w-prose text-left">
                <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
                  {t('landing.tag1')}
                  <strong class="text-cusRed"> {t('landing.tag2')} </strong>
                  {t('landing.tag3')}
                </h1>
            
                <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                  {t('landing.intro')}
                </p>
            
                <div class="mt-4 flex gap-4 sm:mt-6">
                  <a class="inline-block rounded border border-cusRed bg-cusRed px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-cusGreen hover:border-cusGreen" href="#">
                    {t('landing.button1')}
                  </a>
            
                  <a class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900" href="#">
                    {t('landing.button2')}
                  </a>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Landing