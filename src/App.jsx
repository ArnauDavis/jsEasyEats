import React, { createContext, useState, useContext } from 'react'
import { LanguageProvider } from './LanguageProvider'
import Header from './components/header'
import Landing from './components/landing'
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
