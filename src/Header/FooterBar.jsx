import React from 'react'
import { Link } from 'react-router-dom'
const FooterBar = () => {
  return (
    <div className='FooterBar'>
        <div className='Footer-container'>
        <Link  to="/"><div className='H-jj'><i class="fa-solid fa-house h-f-h"></i></div></Link>
        <Link  to="/More"><div className='H-jj'><i class="fa-regular fa-star h-f-h"></i></div></Link>
        <Link  to="/Person"><div className='H-jj'><i class="fa-regular fa-snowflake h-f-h"></i></div></Link>
        </div>       
    </div>
  )
}

export default FooterBar