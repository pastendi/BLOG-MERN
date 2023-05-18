import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row md:justify-between max-h-full'>
      {/* left */}
      <div className='flex  flex-col space-y-12 justify-center text-center'>
        <h1 className='font-semibold text-3xl sm:text-5xl md:text-7xl lg:text-8xl md:text-left '>
          <span>The Next</span>
          <br className='hidden md:block' />
          <span className='text-gradient'> Generation</span>
          <br className='hidden md:block' />
          <span className='text-gradient'> Bloggers</span>
        </h1>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <p className='sm: text-lg md:text-xl'>
            Knowledge sharing is the greatest influence
          </p>
          <button className='btn bg-info '> Lets Blog</button>
        </div>
      </div>
      {/* right */}
      <div className=' my-10 lg:my-0 flex justify-center'>
        <img src={hero} alt='hero art' className='w-full h-auto  sm:max-w-md' />
      </div>
    </div>
  )
}

export default Hero
