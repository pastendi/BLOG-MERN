import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { navLinks } from '../utils/constant'

const Navbar = () => {
  return (
    <div className=''>
      <nav className='container max-w-6xl h-20 mx-auto flex items-center justify-between'>
        <div className='flex space-x-2'>
          <div className='w-16 h-10'>
            <img src={logo} alt='logo' className='object-cover' />
          </div>
          <p>
            Trendy <br />
            Blog
          </p>
        </div>
        <div className='flex'>
          <div className='flex space-x-4'>
            {navLinks.map((x, index) => (
              <p key={index} className='nav-link'>
                {x.link}
              </p>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
