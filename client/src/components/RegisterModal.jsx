import { useState } from 'react'
import Input from './Form/Input'
import Button from './Form/Button'
import ModalLayout from './ModalLayout'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/slices/userSlice'
const data = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  cPassword: '',
}
const RegisterModal = () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState(data)

  const storeData = useSelector((store) => store.users)
  const { loading, appErr, serverErr } = storeData
  const register = () => {
    dispatch(registerUser(values))
  }
  const handleChange = ({ currentTarget: input }) => {
    setValues({ ...values, [input.name]: input.value })
  }
  const body = (
    <div className='flex flex-col gap-4'>
      {appErr || serverErr ? (
        <h1 className='text-red-800'>
          {appErr} {serverErr}
        </h1>
      ) : null}
      <Input
        placeholder='First name'
        name='firstName'
        onChange={handleChange}
        value={values.firstName}
        disabled={loading}
      />
      <Input
        placeholder='Last name'
        name='lastName'
        onChange={handleChange}
        value={values.lastName}
        disabled={loading}
      />
      <Input
        placeholder='Email'
        name='email'
        onChange={handleChange}
        value={values.email}
        disabled={loading}
      />
      <Input
        placeholder='Password'
        type='password'
        name='password'
        onChange={handleChange}
        value={values.password}
        disabled={loading}
      />
      <Input
        placeholder='Confirm Password'
        type='password'
        name='cPassword'
        onChange={handleChange}
        value={values.cPassword}
        disabled={loading}
      />
      <Button
        label='Sign Up'
        disabled={loading}
        fullWidth
        large
        onClick={register}
      />
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
