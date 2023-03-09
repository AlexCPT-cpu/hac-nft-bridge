import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-around text-white'>
        <div>
            logo
        </div>
        <div>
            nav
        </div>
        <div>
            <button className='p-2 transition-all border-2 rounded-md font-bold hover:border-purple-800 hover:text-gray-500 border-purple-600 '>
                Connect
            </button>
        </div>
    </div>
  )
}

export default Header