import React, { createContext, useState, useContext } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en')
  const t = (path) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations[lang]) || path;
  }

  const value = {
    lang,
    setLang,
    t,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)