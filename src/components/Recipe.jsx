import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../LanguageProvider'
import recipeImages from '../utils/recipesImages'

function GalleryItem({ img }) {
  return (
    <div className="carousel-item rounded-xl transition-transform duration-300 hover:scale-105">
      <img 
        src={img} 
        alt="Recipe Gallery"
        className="aspect-square w-64 object-cover rounded-lg shadow-md border-2 border-white/10" 
      />
    </div>
  )
}

function Recipe({ scrollToTop }) {
  const { recipename } = useParams()
  const { t } = useLanguage()
  const recipeData = t(`recipes.items.${recipename}`)
  
  if (!recipeData || typeof recipeData === 'string') {
    return <div className="p-10 text-center">{t('recipe.text10')}</div>
  }
  
  const images = recipeImages[recipename] || []

  return (
    <div className="min-h-screen bg-base-200/50 py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        
        {/* Back Button */}
        <section>
          <Link 
            to="/allrecipes"
            className={`group flex items-center justify-start w-11 h-11 bg-secondary rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg ${t('recipe.text8') === "See all recipes" ? "hover:w-45" : "hover:w-62"} hover:rounded-4xl active:translate-x-1 active:translate-y-1`}
          >
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                <path d="M327.3 94.1L165.4 256l161.9 161.9c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-179-179c-9.4-9.4-9.4-24.6 0-33.9l179-179c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
              </svg>
            </div>
            <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {t('recipe.text8')}
            </div>
          </Link>
        </section>

        {/* Header & Story Card */}
        <section className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
          <h2 className="text-3xl text-accent font-black sm:text-4xl mb-4">
            {t('recipe.text1')} {recipeData.name}
          </h2>
          <p className="text-base text-pretty sm:text-lg/relaxed opacity-80 italic">
            "{recipeData.story}"
          </p>
        </section>

        {/* Image Gallery */}
        <div className="carousel carousel-center bg-neutral rounded-3xl p-4 shadow-inner w-full snap-x overflow-x-auto">
          <div className="flex flex-nowrap gap-4 mx-auto">
          {images.map((img, index) => (
            <GalleryItem key={index} img={img} />
          ))}
          </div>
        </div>

        {/* Stats Section */}
        <section className="flex flex-col items-center w-full px-4">
          <span className="text-xl text-primary font-bold sm:text-2xl pb-3">
            {t('recipe.text9')}
          </span>   
          <div className="stats stats-vertical md:stats-horizontal shadow-lg bg-base-100 border border-base-300 w-full max-w-xs md:max-md md:max-w-2xl">

            {/* Prep Time */}
            <div className="stat place-items-center py-2 md:py-4 px-4">
              <div className="stat-figure text-primary opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div className="stat-title text-secondary font-medium text-xs sm:text-sm">
                {t('recipe.text2')}
              </div>
              <div className="stat-value text-lg sm:text-2xl">
                {recipeData.stats.prep}
              </div>
            </div>
          
            {/* Servings */}
            <div className="stat place-items-center py-2 md:py-4 px-4 border-y md:border-y-0 md:border-x border-base-200">
              <div className="stat-figure text-primary opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <div className="stat-title text-secondary font-medium text-xs sm:text-sm">
                {t('recipe.text4')}
              </div>
              <div className="stat-value text-lg sm:text-2xl">
                {recipeData.stats.serves}
              </div>
            </div>
          
            {/* Cook Time */}
            <div className="stat place-items-center py-2 md:py-4 px-4">
              <div className="stat-figure text-primary opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <div className="stat-title text-secondary font-medium text-xs sm:text-sm">
                {t('recipe.text7')}
              </div>
              <div className="stat-value text-lg sm:text-2xl">
                {recipeData.stats.cook}
              </div>
            </div>
          
          </div>
        </section>

        {/* Ingredients & Directions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ingredients */}
          <section className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
            <span className="text-xl text-primary font-bold sm:text-2xl block mb-4">{t('recipe.text5')}</span>
            <ul className="space-y-1">
              {recipeData.ingredients.map((ingredient, index) => (
                <li key={index} className="py-2 border-b border-base-200 last:border-0">
                  <label className="flex items-center cursor-pointer group">
                    <input className="peer sr-only" type="checkbox" />
                    <div className="w-6 h-6 shrink-0 rounded-md bg-base-200 border-2 border-accent/30 transition-all peer-checked:bg-primary peer-checked:border-primary relative">
                      <svg className="absolute inset-0 m-auto w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div> 
                    <span className="ml-3 text-sm font-medium peer-checked:line-through peer-checked:opacity-50 transition-all">
                      {ingredient}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </section>

          {/* Directions */}
          <section className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
  <span className="text-xl font-bold text-primary sm:text-2xl block mb-4">{t('recipe.text6')}</span>
  <ol className="space-y-4">
    {recipeData.directions.map((direction, index) => (
      <li key={index} className="flex items-center gap-4 py-2"> 
        {/* flex items-center ensures the number and text stay vertically aligned */}
        <div className="flex-none w-10 h-10 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold shadow-sm border-2 border-white">
          {index + 1}
        </div>
        <p className="text-sm font-medium leading-tight">
          {direction}
        </p>
      </li>
    ))}
  </ol>
</section>
        </div>

        {/* Scroll to Top */}
        <section className="mx-auto">
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
    </div>
  )
}

export default Recipe


