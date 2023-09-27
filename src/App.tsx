import { Debug, Form, Input } from 'informed'
import * as yup from 'yup'
import ModeSwitcher from './components/ModeSwitcher';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './components/LanguageSwitch';

const schema = yup.object({
  email : yup.string().email('Email Must be a Valid Email Address'),
  password: yup.string().min(8,'Insert a Minimum of 8  Characters').max(30,'You Reached The Maximum Password Characters')
});
const App = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className='flex gap-4 m-5'>
      <ModeSwitcher/>
      <LanguageSwitch/>
      </div>
      <div className='flex w-full h-screen justify-center items-center'>
        <Form className='flex flex-col gap-3 items-start text-lg p-16 rounded-md border-2 border-solid border-primary dark:border-secondary dark:text-secondary' onSubmit={({values})=> console.log(values)} yupSchema={schema} >
          <Input label={t('email')} name='email' type='email' placeholder='example@.com' required className='rounded'/>
          <Input label={t('password')} name='password' type='password' placeholder='********' required className='rounded'/>
          <button type='submit' className='bg-primary rounded-md text-secondary dark:bg-secondary dark:text-primary px-4 mt-2'>{t('submit')}</button>
          {/* <Debug/> */}
        </Form>
      </div>
    </div>
  )
}

export default App