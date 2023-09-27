import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/* this hook is supposed to change the direction of the page and return it if neededs*/
export const uselanguageDirection = ()=>{
    const {i18n} = useTranslation();

    useEffect(()=>{
        window.document.documentElement.dir = i18n.dir();
    },[i18n.dir()])


    return i18n.dir();
    
}