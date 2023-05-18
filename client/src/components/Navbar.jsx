import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { BsCloudMoonFill, BsFillSunFill } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { navLinks } from '../utils/constant'
import { useState } from 'react'

const Navbar = ({ theme, toggleTheme }) => {
  const [menuClicked, setMenuClicked] = useState(false)
  return (
    <div className='fixed top-0 left-0 w-full z-10'>
      <nav>
        <div className='container max-w-6xl h-20 mx-auto flex items-center px-2 sm:px-6 '>
          {/* left */}
          <div className='flex flex-1'>
            {/* logo */}
            <div className='flex space-x-2'>
              <div className='w-16 h-10'>
                <img src={logo} alt='logo' className='object-cover' />
              </div>
              <p>
                Trendy <br />
                Blog
              </p>
            </div>
            {/* menu */}
            <div className='ml-6 hidden sm:flex space-x-3 md:space-x-6 lg:space-x-10 items-center '>
              {navLinks.map((x, index) => {
                return (
                  <NavLink
                    to={x.path}
                    key={index}
                    className={({ isActive }) =>
                      isActive ? 'nav-link border-b-4' : 'nav-link'
                    }
                  >
                    {x.link}
                  </NavLink>
                )
              })}
            </div>
          </div>
          {/* right */}
          <div className='hidden sm:flex space-x-2'>
            <button
              className='block px-3 py-3 border-sky-400 shadow-sky-300 shadow-sm border-1 bg-darkBlue rounded-lg'
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <BsFillSunFill size={20} />
              ) : (
                <BsCloudMoonFill size={20} color='white' />
              )}
            </button>
            <button className=' block btn bg-info hover:bg-infoDark'>
              Login
            </button>
          </div>
          <div className='block sm:hidden'>
            {menuClicked ? (
              <div onClick={() => setMenuClicked(false)}>
                <AiOutlineClose size={40} />
              </div>
            ) : (
              <div onClick={() => setMenuClicked(true)}>
                <HiMenu size={40} />
              </div>
            )}
          </div>
        </div>
        {/* mobile menu */}
        {menuClicked && (
          <div className='flex flex-col sm:hidden space-y-4 pb-6'>
            {navLinks.map((x, index) => {
              return (
                <NavLink
                  to={x.path}
                  key={index}
                  onClick={() => setMenuClicked(false)}
                  className={({ isActive }) =>
                    isActive ? 'nav-link border-r-4' : 'nav-link'
                  }
                >
                  {x.link}
                </NavLink>
              )
            })}
            <div className='flex items-center justify-center space-x-4'>
              <button
                className='block px-3 py-3 border-sky-400 shadow-sky-300 shadow-sm border-1 bg-darkBlue rounded-lg'
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <BsFillSunFill size={20} />
                ) : (
                  <BsCloudMoonFill size={20} color='white' />
                )}
              </button>
              <button className=' block btn bg-info hover:bg-infoDark'>
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
