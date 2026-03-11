import React, { useState } from 'react'
import { useLanguage } from '../LanguageProvider'
import { useNavigate } from 'react-router-dom'

function Search() {
  const { t, lang } = useLanguage()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  // Get the translation object for the current language
  // We look specifically at the 'recipes.items' for the current lang
  const recipesData = t('recipes.items')
  
  // Convert the object into an array we can filter
  // This gives us: [{ id: 'brownies', name: 'Brownies', ... }, ...]
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
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder={t('header.text1')}
        className="w-full p-2 border rounded-lg shadow-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Search Results Dropdown */}
      {filteredRecipes.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-b-lg shadow-xl mt-1">
          {filteredRecipes.map(recipe => (
            <li 
              key={recipe.id}
              onClick={() => handleSelect(recipe.id)}
              className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-none"
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