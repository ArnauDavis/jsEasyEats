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
  <div className="carousel-item">
    <img src={img}
      className="aspect-square w-64 object-cover rounded-xl" />
  </div>
    </>
  )
}

function Recipe() {
    const { lang, recipename} = useParams()
    const { t } = useLanguage()
    const recipeData = t(`recipes.items.${recipename}`)
    if (!recipeData || typeof recipeData === 'string') {
        return <div className="p-10 text-center">Recipe not found.</div>
    }
    const images = recipeImages[recipename] || []

  return (
    <>
    <div>{t('recipe.text1')} {recipeData.name}</div>
    <p>{recipeData.story}</p>
    <div className="carousel carousel-center bg-cusRed rounded-xl max-w-md space-x-4 p-4">
        {images.map((img, index) => (
          <GalleryItem key={index} img={img} />
        ))}
    </div>
  <div className="stats stats-vertical lg:stats-horizontal shadow">
    <div className="stat">
      <div className="stat-title">{t('recipe.text2')}</div>
      <div className="stat-value">{recipeData.stats.prep}</div>
    </div>

    <div className="stat">
      <div className="stat-title">{t('recipe.text4')}</div>
      <div className="stat-value">{recipeData.stats.serves}</div>
    </div>

    <div className="stat">
      <div className="stat-title">{t('recipe.text7')}</div>
      <div className="stat-value">{recipeData.stats.cook}</div>
    </div>
  </div>  
    <ul>
      {recipeData.directions.map((direction,index)=>(
        <>
        <li key={index}>
          <label class="relative flex items-center cursor-pointer group">
            <span class="mr-3 font-bold text-cusGreen">{index + 1}</span>
            <input class="peer sr-only" type="checkbox" />
            <div
              class="w-8 h-8 shrink-0 rounded-lg bg-white border-2 border-cusRed transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-cusOrange to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] relative"
            ></div> 
            <span class="ml-3 text-sm font-medium text-gray-900"> {direction}</span>
          </label>
        </li>
        
      </>
      ))}
    </ul>

    </>
  )
}

export default Recipe