import React from 'react'
import { useLanguage } from '../LanguageProvider'
import { Link } from 'react-router-dom'
import famBake1 from '../assets/familybake1.jpg'
import background1 from "../assets/background1.png"

function Landing() {
  const { t } = useLanguage()
  
  // Get a random recipe for the "Feeling Lucky" button
  const allItems = t('recipes.allItems') || []
  const randomRecipe = allItems.length > 0 
    ? allItems[Math.floor(Math.random() * allItems.length)] 
    : ""

  return (
    <div 
      className="hero min-h-screen bg-cover bg-fixed bg-center transition-all duration-500" 
      style={{ backgroundImage: `url(${background1})` }}
    >
      {/* Overlay for better text contrast */}
      <div className="hero-overlay bg-black/20"></div>

      <div className="hero-content flex-col-reverse lg:flex-row-reverse w-full max-w-6xl p-6 gap-12 z-10">
        
        {/* Image Side with a decorative "frame" effect */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-accent to-primary rounded-2xl blur-sm opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src={famBake1}
            alt="Family Baking"
            className="relative w-full max-w-sm rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] border-4 border-white/10"
          />
        </div>

        {/* Text Side - Glassmorphism Card */}
        <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/20 max-w-2xl">
          <h1 className="text-4xl font-black sm:text-6xl text-neutral leading-tight">
            {t('landing.tag1')}
            <span className="text-primary block sm:inline"> {t('landing.tag2')} </span>
            {t('landing.tag3')}
          </h1>
          
          <p className="mt-6 text-base text-gray-700 sm:text-xl/relaxed font-medium">
            {t('landing.intro')}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/allrecipes"
              className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-primary/30 transition-all border-none normal-case text-lg"
            >
              {t('landing.button1')}
            </Link>          
            
            <Link
              to={`/recipe/${randomRecipe}`}
              className="btn btn-accent btn-lg btn-outline rounded-full px-8 shadow-lg hover:bg-accent hover:text-white transition-all border-2 normal-case text-lg"
            >
              {t('landing.button2')}
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landing