import React from 'react'
import { LanguageProvider } from './LanguageProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header.jsx'
import Landing from './components/Landing.jsx'
import AllRecipes from './components/AllRecipes.jsx'
import Recipe from './components/Recipe.jsx'
import Footer from './components/Footer.jsx'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <LanguageProvider>
        <Header/> 
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/allrecipes" element={<AllRecipes />} />
        <Route path="/recipe/:recipename" element={<Recipe/>}/>
        </Routes>
        <Footer/>
      </LanguageProvider>   
    </BrowserRouter>
    </>
  )
}

export default App
