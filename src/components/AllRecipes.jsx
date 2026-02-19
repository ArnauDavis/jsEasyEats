import React from 'react'
import { useLanguage } from '../LanguageProvider'
import { Link } from 'react-router-dom'


function Recipe({recipeKey}){
  const { t } = useLanguage()
  const recipeData = t(`recipes.items.${recipeKey}`)
  if (!recipeData || typeof recipeData === 'string') return null
    return (
      <>
  <li className="list-row">
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div>
      <div>{recipeData.name}</div>
      <p className="list-col-wrap text-xs">
      {recipeData.story}
      </p>
    </div>
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
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">All current recipes</li>
  
  {itemsToRender.map((key) => (
          <Recipe key={key} recipeKey={key} />
        ))}
  

  
</ul>
    </>
  )
}

export default AllRecipes