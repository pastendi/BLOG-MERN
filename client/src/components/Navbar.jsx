import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { BsCloudMoonFill, BsFillSunFill } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { navLinks } from '../utils/constant'

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div className='fixed top-0 left-0 w-full blur-background'>
      <nav className='container max-w-6xl h-20 mx-auto flex items-center px-2 sm:px-6 '>
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
            className='block px-3 py-1 border-sky-400 shadow-sky-300 shadow-sm border-1 bg-darkBlue rounded-lg'
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
          <HiMenu size={40} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
