import React from 'react'
import {background_image, logo} from "../utils/constant"
const Header = () => {
  return (
    <div className='absolute'>
      <header>
       <img src={logo}  className='w-40 px-4 py-2  absolute bg-gradient-to-b from-black'/>
      </header>
      <div className=''>
        <img src={background_image} />
      </div>
    </div>
  )
}

export default Header