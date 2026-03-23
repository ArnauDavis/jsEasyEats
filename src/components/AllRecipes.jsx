import React from 'react'
import { useParams } from 'react-router-dom'
import { useLanguage } from '../LanguageProvider.jsx'
import { Link } from 'react-router-dom'
import recipeImages from '../utils/recipesImages.js'
function Recipe({recipeKey}){
  const { t, lang } = useLanguage()
  const recipeData = t(`recipes.items.${recipeKey}`)
  if (!recipeData || typeof recipeData === 'string') return null
  const thumbnail = recipeImages[recipeKey]?.[0]
    return (
      <>
  <li className="list-row">
    <Link to={`/recipe/${recipeKey}`}>
    <div><img className="size-16 rounded-box" src={thumbnail} alt={recipeKey}/></div>
    <div>
      <div className="text-xl text-primary">{recipeData.name}</div>
      <p className="list-col-wrap text-sm">
      {recipeData.story}
      </p>
    </div>
    </Link>
  </li>
      </>
    )
  }


function AllRecipes({recipe}) {
  const { t } = useLanguage()
  const allItemKeys = t('recipes.allItems')
  const itemsToRender = Array.isArray(allItemKeys) ? allItemKeys : []
  
  return (
    <>
    <h2 className="tracking-wide font-semibold text-secondary text-2xl pt-4 pl-8">{t('recipes.text1')}</h2>
    <ul className="list bg-base-100 rounded-box shadow-md p-4">
      {itemsToRender.map((key) => (
          <Recipe key={key} recipeKey={key} />
        ))}
    </ul>
    </>
  )
}

export default AllRecipes