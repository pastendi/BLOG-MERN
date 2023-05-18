import { useState } from 'react'
import Input from './Form/Input'
import Button from './Form/Button'
import ModalLayout from './ModalLayout'
const data = {
  email: '',
  password: '',
  cPassword: '',
  name: '',
  username: '',
}
const RegisterModal = () => {
  const [values, setValues] = useState(data)
  const [isLoading, setIsLoading] = useState(false)
  const register = () => {
    console.log('register')
  }
  const handleChange = ({ currentTarget: input }) => {
    setValues({ ...values, [input.name]: input.value })
  }
  const body = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Name'
        name='name'
        onChange={handleChange}
        value={values.name}
        disabled={isLoading}
      />
      <Input
        placeholder='Username'
        name='username'
        onChange={handleChange}
        value={values.username}
        disabled={isLoading}
      />
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
      <Input
        placeholder='Confirm Password'
        type='password'
        name='cPassword'
        onChange={handleChange}
        value={values.cPassword}
        disabled={isLoading}
      />
      <Button label='Sign Up' fullWidth large onClick={register} />
      <div className='text-neutral-700 text-center'>
        Already have an account?{' '}
        <span className='text-emerald-500 font-semibold cursor-pointer hover:underline'>
          Sign In
        </span>
      </div>
    </div>
  )

  return <ModalLayout title='Create new account' body={body} />
}

export default RegisterModal
