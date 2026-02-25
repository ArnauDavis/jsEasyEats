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
    <div><img className="size-10 rounded-box" src={thumbnail} alt={recipeKey}/></div>
    <div>
      <div>{recipeData.name}</div>
      <p className="list-col-wrap text-xs">
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
    <ul className="list bg-base-100 rounded-box shadow-md p-4">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">{t('recipes.text1')}</li>
  
  {itemsToRender.map((key) => (
          <Recipe key={key} recipeKey={key} />
        ))}
  

  
</ul>
    </>
  )
}

export default AllRecipes