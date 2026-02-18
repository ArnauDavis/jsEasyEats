import React from 'react'
import { useLanguage } from '../LanguageProvider'
import { Link } from 'react-router-dom'


function Recipe() {
    const { t } = useLanguage()
    
  return (
    <div>Recipe</div>
  )
}

export default Recipe