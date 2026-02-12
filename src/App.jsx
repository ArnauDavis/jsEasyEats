import React, { createContext, useState, useContext } from 'react'
import { LanguageProvider } from './LanguageProvider.jsx'
import Header from './components/header.jsx'
import Landing from './components/Landing.jsx'
function App() {
  

  return (
    <>
    <LanguageProvider>
      <Header/>
      <div className="">
      <Landing/>
      </div>
    </LanguageProvider>
    </>
  )
}

export default App
