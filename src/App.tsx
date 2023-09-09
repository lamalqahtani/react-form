import React from 'react'
import { Debug, Form, Input } from 'informed'
import * as yup from 'yup'

const schema = yup.object({
  email : yup.string().email('Email Must be a Valid Email Address'),
  password: yup.string().min(8,'Insert a Minimum of 8  Characters').max(30,'You Reached The Maximum Password Characters')
});
const App = () => {
  return (
    <div>
      <Form onSubmit={({values})=> console.log(values)} yupSchema={schema} >
        <Input label='Email' name='email' type='email' placeholder='example@.com' required/>
        <Input label='Password' name='password' type='password' placeholder='********' required/>
        <button type='submit'>Submit</button>
        {/* <Debug/> */}
      </Form>
    </div>
  )
}

export default App