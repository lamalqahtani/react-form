import React, { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState<'light' |' dark'>('light');
  window.localStorage.setItem('theme', theme);

  useEffect(()=>{
    window.document.documentElement.classList.remove(theme ==='light'? 'dark': 'light');
    window.document.documentElement.classList.add(theme);
  },[theme,setTheme])
  return [theme, setTheme];
}

export default useDarkMode