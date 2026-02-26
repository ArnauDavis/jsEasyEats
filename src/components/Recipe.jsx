import React from 'react'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../LanguageProvider'
import { Link } from 'react-router-dom'
import recipeImages from '../utils/recipesImages'

function GalleryItem({img}){
  const { lang, recipename} = useParams()
  const { t } = useLanguage()
  const images = recipeImages[recipename] || []
  return(
    <>
  <div className="carousel-item border-2 rounded-xl lg:mx-auto">
    <img src={img}
      className="aspect-square w-64 object-cover rounded-lg" />
  </div>
    </>
  )
}

function Recipe({scrollToTop}) {
    const { lang, recipename} = useParams()
    const { t } = useLanguage()
    const recipeData = t(`recipes.items.${recipename}`)
    if (!recipeData || typeof recipeData === 'string') {
        return <div className="p-10 text-center">{t('recipe.text10')}</div>
    }
    const images = recipeImages[recipename] || []

  return (
    <>
    <div className="flex flex-col gap-8 py-4">
      <section className="px-4">
        <Link to="/allrecipes"
        // eventually will need to fix the condition on this button to accept the state
            className={`group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg ${t('recipe.text8')=="See all recipes"? "hover:w-45" : "hover:w-62"} hover:rounded-4xl active:translate-x-1 active:translate-y-1`}
          >
            <div
              className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
            >
              <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                <path
                  d="M327.3 94.1L165.4 256l161.9 161.9c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-179-179c-9.4-9.4-9.4-24.6 0-33.9l179-179c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                ></path>
              </svg>
            </div>
            <div
              className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              {t('recipe.text8')}
            </div>
          </Link>
        </section>
      <section className="px-4">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{t('recipe.text1')} {recipeData.name}</h2>
      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed ">{recipeData.story}</p>
      </section>
      <div className="carousel carousel-center bg-[radial-gradient(circle,#FF5A5F_30%,#ffffff_100%)] lg:w-full space-x-4 p-4 ">
          {images.map((img, index) => (
            <GalleryItem key={index} img={img} />
          ))}
      </div>
      <section className="flex flex-col"> 
        <span className="text-left sm:text-center pl-4 sm:pl-0 text-xl font-bold text-gray-900 sm:text-2xl pb-2">{t('recipe.text9')}</span>   
      <div className="stats stats-horizontal shadow mx-auto">
        <div className="stat px-2">
          <div className="stat-title">{t('recipe.text2')}</div>
          <div className="stat-value">{recipeData.stats.prep}</div>
        </div>

        <div className="stat px-2">
          <div className="stat-title">{t('recipe.text4')}</div>
          <div className="stat-value">{recipeData.stats.serves}</div>
        </div>

        <div className="stat px-2">
          <div className="stat-title">{t('recipe.text7')}</div>
          <div className="stat-value">{recipeData.stats.cook}</div>
        </div>
      </div>
      </section> 

      <section className="px-4 flex flex-col">
        <span className="text-left text-xl font-bold text-gray-900 sm:text-2xl pb-2">{t('recipe.text5')}</span>
          <ul className="lg:columns-2 lg:gap-8">
            {recipeData.ingredients.map((ingredient,index)=>(
              <li key={index} className="py-4 break-inside-avoid-column">
                <label className="relative flex items-center cursor-pointer group">
                  <input className="peer sr-only" type="checkbox" />
                  <div
                    className="w-8 h-8 shrink-0 rounded-lg bg-white border-2 border-cusRed transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-cusOrange to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] relative"
                  ></div> 
                  <span className="ml-3 text-sm font-medium text-gray-900"> {ingredient}</span>
                </label>
              </li>
            ))}
          </ul>
        </section> 

      <section className="px-4 flex flex-col">
         <span className="text-left text-xl font-bold text-gray-900 sm:text-2xl pb-2">{t('recipe.text6')}</span>
          <ol>
            {recipeData.directions.map((direction,index)=>(
              <li key={index} className="py-4">
                <label className="relative flex items-center cursor-pointer group">
                  
                  <input className="peer sr-only" type="checkbox" />
                  <div
                    className="w-8 h-8 shrink-0 rounded-lg bg-white border-2 border-cusRed transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-cusOrange to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] relative"
                  ></div> 
                  <span className="ml-3 font-bold text-cusGreen">{index + 1}</span>
                  <span className="ml-3 text-sm font-medium text-gray-900"> {direction}</span>
                </label>
              </li>
            ))}
          </ol>
        </section>
        <section className="mx-auto">
          <button className="cursor-pointer relative after:content-['scroll_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-16 h-16 rounded-full border-4 border-sky-200 bg-cusGreen pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90"
            onClick={() => scrollToTop()}>
            <svg className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12" viewBox="0 0 384 512">
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
            </svg>
          </button>
        </section>
    </div>
    </>
  )
}

export default Recipe