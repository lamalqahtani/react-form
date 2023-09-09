import React from 'react'
import { Debug, Form, Input } from 'informed'
import * as yup from 'yup'
import useDarkMode from './hooks/useDarkMode';

const schema = yup.object({
  email : yup.string().email('Email Must be a Valid Email Address'),
  password: yup.string().min(8,'Insert a Minimum of 8  Characters').max(30,'You Reached The Maximum Password Characters')
});
const App = () => {
  const [theme, setTheme ] = useDarkMode();
  return (
    <div>
      <button onClick={()=>setTheme((theme ==='light' ? 'dark': 'light'))}>{theme.toString()}</button>
      <div className='flex w-full h-screen justify-center items-center'>
        <Form className='flex flex-col gap-3 items-start text-lg p-16 rounded-md border-2 border-solid border-primary dark:text-red-300' onSubmit={({values})=> console.log(values)} yupSchema={schema} >
          <Input label='Email' name='email' type='email' placeholder='example@.com' required/>
          <Input label='Password' name='password' type='password' placeholder='********' required/>
          <button type='submit' className='bg-primary rounded-md text-secondary px-4 mt-2'>Submit</button>
          {/* <Debug/> */}
        </Form>
      </div>
    </div>
  )
}

export default App