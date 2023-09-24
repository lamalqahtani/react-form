import React, { InputHTMLAttributes, ReactHTMLElement } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitch = () => {
    const {i18n} = useTranslation();
    /* We can create a file containing supported languages and calling it here*/
    const languages =[
        {
            lable: 'Arabic',
            value: 'ar',
        },
        {
            lable: 'English',
            value: 'en',
        }
    ]
    
  return (
    <div>
        <select onChange={(e)=>{
            let element = e.target as HTMLSelectElement;
            i18n.changeLanguage(element.value);
        }}>
            {languages.map((language, index)=>{
                return <option key={index} value={language.value}>{language.lable}</option>
            })}
        </select>
    </div>
  )
}

export default LanguageSwitch