import React, { useState } from 'react'
import { useLanguage } from '../LanguageProvider'
import { useNavigate } from 'react-router-dom'

function Search() {
  const { t, lang } = useLanguage()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  // Get the translation object for the current language
  // Looks specifically at the 'recipes.items' for the current lang
  const recipesData = t('recipes.items') || {}
  
  // Convert the object into an array in order to filter
  // This gives: [{ id: 'brownies', name: 'Brownies', ... }, ...]
  const recipeList = Object.keys(recipesData).map(key => ({
    id: key,
    ...recipesData[key]
  }))

  // Filter based on the search input
  const filteredRecipes = query.trim() === "" 
    ? [] 
    : recipeList.filter(recipe => 
        recipe.name.toLowerCase().includes(query.toLowerCase())
      )

  const handleSelect = (recipeId) => {
    setQuery('') // Clear search
    navigate(`/recipe/${recipeId}`)
  }

  return (
    <div className="relative w-28 xs:w-32 sm:w-48 max-w-md mx-auto">
      <input
        type="text"
        placeholder={t('header.text1')}
        className="input input-bordered w-full h-10 shadow-sm focus:outline-primary"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Search Results Dropdown */}
      {filteredRecipes.length > 0 && (
        <ul className="absolute z-110 w-full bg-base-100 border border-base-300 rounded-b-lg shadow-xl mt-1 max-h-60 overflow-y-auto">
          {filteredRecipes.map(recipe => (
            <li 
              key={recipe.id}
              onClick={() => handleSelect(recipe.id)}
              className="p-3 hover:bg-primary hover:text-white cursor-pointer border-b border-base-200 last:border-none transition-colors"
            >
              {recipe.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search