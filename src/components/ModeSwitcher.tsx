import React from 'react'
import { SunOutline, MoonOutline } from "@graywolfai/react-heroicons";
import useDarkMode from '../hooks/useDarkMode';

const ModeSwitcher = () => {
    const [theme, setTheme ] = useDarkMode();

  return (
    <button onClick={()=>setTheme((theme ==='light' ? 'dark': 'light'))}>{theme.toString() ==='light'? <div className='flex gap-2'><SunOutline className="h-6 w-6 text-primary" /> Light</div>: <div className='flex gap-2 text-secondary'><MoonOutline className="h-6 w-6 text-secondary" /> Dark</div>}</button>
  )
}

export default ModeSwitcher