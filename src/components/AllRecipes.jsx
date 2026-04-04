import React from 'react'
import { useLanguage } from '../LanguageProvider.jsx'
import { Link } from 'react-router-dom'
import recipeImages from '../utils/recipesImages.js'

function RecipeCard({ recipeKey }) {
  const { t } = useLanguage()
  const recipeData = t(`recipes.items.${recipeKey}`)
  
  // Basic validation
  if (!recipeData || typeof recipeData === 'string') return null
  
  // Get the first image as the thumbnail
  const thumbnail = recipeImages[recipeKey]?.[0]

  return (
    <Link 
      to={`/recipe/${recipeKey}`}
      className="group flex flex-col bg-base-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={thumbnail} 
          alt={recipeData.name}
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
          {recipeData.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 italic leading-relaxed">
          {recipeData.story}
        </p>
        
        {/* "View Recipe" label that appears on hover (Desktop) */}
        <div className="mt-2 text-xs font-bold uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
          {t('recipe.text1')} {recipeData.name} →
        </div>
      </div>
    </Link>
  )
}

function AllRecipes({scrollToTop}) {
  const { t } = useLanguage()
  const allItemKeys = t('recipes.allItems')
  const itemsToRender = Array.isArray(allItemKeys) ? allItemKeys : []
  
  return (
    <div className="min-h-screen bg-base-200/50 py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-black text-secondary tracking-tight">
            {t('recipes.text1')}
          </h2>
          <div className="h-1 w-20 bg-accent mt-2 mx-auto lg:mx-0 rounded-full"></div>
        </header>

        {/* Recipe Grid */}
        {itemsToRender.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {itemsToRender.map((key) => (
              <RecipeCard key={key} recipeKey={key} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 opacity-50">
            <p className="text-xl">{t('recipe.text10')}</p>
          </div>
        )}
      </div>
      {/* Scroll to Top */}
        <section className="flex justify-center mt-10">
          <button className="cursor-pointer relative after:content-['scroll_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-16 h-16 rounded-full border-4 border-sky-200 bg-primary pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90"
            onClick={() => scrollToTop()}>
            <svg className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12" viewBox="0 0 384 512">
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
            </svg>
          </button>
        </section>
    </div>
  )
}

export default AllRecipes