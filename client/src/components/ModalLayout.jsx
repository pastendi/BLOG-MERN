import { AiOutlineClose } from 'react-icons/ai'
const ModalLayout = ({ title, body }) => {
  return (
    <div className='z-50 fixed inset-0 flex items-center justify-center  bg-neutral-700 bg-opacity-60'>
      {/* model */}
      <div className='px-20 py-10 h-auto w-full sm:w-4/5 md:w-3/4 max-w-2xl border-0 rounded-lg shadow-lg flex flex-col  bg-[#e5e7eb] outline-none focus:outline-none space-y-8'>
        {/* header */}
        <div className='flex justify-between items-center text-xl md:text-3xl capitalize font-semibold'>
          <h3 className='text-black'>{title}</h3>
          <button className='border-0 hover:opacity-70 text-red-500'>
            <AiOutlineClose />
          </button>
        </div>
        {/* body */}
        <div className='flex-auto'>{body}</div>
      </div>
    </div>
  )
}

export default ModalLayout
