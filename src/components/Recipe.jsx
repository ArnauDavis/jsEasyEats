import React from 'react'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../LanguageProvider'
import { Link } from 'react-router-dom'
import recipeImages from '../utils/recipesImages'

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
    <div>
      {/* Hero Image (Index 1) */}
      <img src={images[1] || images[0]} className="w-full h-80 object-cover" />

      {/* Gallery (The rest of the images) */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {images.slice(2).map((img, index) => (
          <img key={index} src={img} className="rounded-lg" />
        ))}
      </div>
    </div>

    
    <div>Recipe for {recipeData.name}</div>
    <p>{recipeData.story}</p>
    </>
  )
}

export default Recipe