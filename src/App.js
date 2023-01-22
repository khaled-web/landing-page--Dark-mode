import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
//localStorage
const getStorageTheme = ()=>{
  let theme = 'light-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  //useState
  const [theme, setTheme]=useState(getStorageTheme())
  //useEffect
  useEffect(()=>{
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  },[theme])
  //toggleTheme-function
  const toggleTheme = ()=>{
    if(theme === 'light-theme'){
      setTheme('dark-theme')
    }
    else{
      setTheme('light-theme')
    }
  }
  return(
    <main>
      {/* NavBar */}
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className='btn' onClick={toggleTheme}>toggle</button>
        </div>
      </nav>
      {/* sections */}
      <section className="articles">
        {
          data.map((item)=>{
            return(
              <Article key={item.id} {...item}/>
            )
          })
        }
      </section>
    </main>
  )
}

export default App