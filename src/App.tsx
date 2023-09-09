import React from 'react'
import { Form, Input } from 'informed'

const App = () => {
  return (
    <div>
      <Form onSubmit={(formState)=> console.log(formState.values)}>
        <Input label='Email' name='email' type='email' placeholder='example@.com'/>
        <Input label='Password' name='password' type='password' placeholder='********'/>
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

export default App