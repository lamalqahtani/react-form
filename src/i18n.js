import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        // lng:'ar',
        debug: true,
        resources:{
            en: {
                translation: {
                  login: 'Login',
                  email: 'Email',
                  password: 'Password',
                  submit: 'Submit'
                }
            },
            ar: {
              translation: {
                "login": 'تسجيل الدخول',
                "email": 'البريد الالكتروني',
                "password": 'كلمة المرور',
                submit: 'تسليم'
              }
            }
        }
});


export default i18n;