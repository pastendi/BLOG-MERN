import { useState } from 'react'
import Input from './Form/Input'
import Button from './Form/Button'
import ModalLayout from './ModalLayout'
const data = {
  email: '',
  password: '',
}
const LoginModal = () => {
  const [values, setValues] = useState(data)
  const [isLoading, setIsLoading] = useState(false)
  const login = () => {
    console.log('login')
  }
  const handleChange = ({ currentTarget: input }) => {
    setValues({ ...values, [input.name]: input.value })
  }
  const body = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        name='email'
        onChange={handleChange}
        value={values.email}
        disabled={isLoading}
      />
      <Input
        placeholder='Password'
        type='password'
        name='password'
        onChange={handleChange}
        value={values.password}
        disabled={isLoading}
      />
      <Button label='Sign In' fullWidth large onClick={login} />
      <div className='text-neutral-700 text-center'>
        New here?{' '}
        <span className='text-blue-500 font-semibold cursor-pointer hover:underline'>
          Create an account
        </span>
      </div>
    </div>
  )

  return <ModalLayout title='Login' body={body} />
}

export default LoginModal
