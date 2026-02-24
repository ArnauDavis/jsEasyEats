import React from 'react'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../LanguageProvider'
import { Link } from 'react-router-dom'


function Recipe() {
    const { lang, recipeName} = useParams()
    const { t } = useLanguage()
    const recipeData = t(`recipes.items.${recipeName}`)
    if (!recipeData || typeof recipeData === 'string') {
        return <div className="p-10 text-center">Recipe not found.</div>
    }
  return (
    <>
    <div>Recipe for {recipeData.name}</div>
    <p>{recipeData.story}</p>
    </>
  )
}

export default Recipe