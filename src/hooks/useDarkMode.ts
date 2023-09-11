import React, { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState <'light' | 'dark'>('light');

  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
    }
  },[])

  useEffect(()=>{
      window.document.documentElement.classList.remove(theme ==='light'? 'dark': 'light');
      window.document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme)
      console.log('theme: ', theme)
  },[theme,setTheme])
  return [theme, setTheme];
}

export default useDarkMode