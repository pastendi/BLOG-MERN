import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import useLocalStorage from 'use-local-storage'
import RegisterModal from '../components/RegisterModal'
import LoginModal from '../components/LoginModal'

const Layout = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  useEffect(() => {
    const bodyClass = document.documentElement.classList
    theme === 'dark' ? bodyClass.add('dark') : bodyClass.remove('dark')
  }, [theme])
  return (
    <div>
      <RegisterModal />
      {/* <LoginModal /> */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </div>
  )
}

export default Layout
