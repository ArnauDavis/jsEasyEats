import React, { createContext, useState, useContext } from 'react'
import { translations } from '../src/translation'
import Header from './components/header'
import Landing from './components/landing'
const LanguageContext = createContext()
function App() {
  

  return (
    <>
      <Header/>
      <div className="">
      <Landing/>
      </div>
    </>
  )
}

export default App
