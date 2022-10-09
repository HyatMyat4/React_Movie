import React from 'react'
import FooterC from './Footer.css'
import { Link } from 'react-router-dom'
import FooterBar from './Header/FooterBar'
const Footer = () => {
  return (
    <div className='Footer'>
       <div className='Footer-Left'>       
       <div className='Home1'>
       <Link  to="/"><span className='Footer-Name'>Home</span></Link>
       <Link  to="/onTv"><span className='Footer-Name'>Tv Show</span></Link>
            <span className='Footer-Name'>Anime</span>
            <span className='Footer-Name'>Cartoon</span>                   
       </div>
       <div className='Home1'>
            <span className='Footer-Name'>Action</span>
            <span className='Footer-Name'>Dramer</span>
            <span className='Footer-Name'>Popular</span>
            <Link  to="/UpComing"><span className='Footer-Name'>Up coming</span></Link>                   
       </div>
       <div className='Home1'>
        <a href='https://developers.themoviedb.org/3'><span className='Footer-Name'>For developers</span></a>
         <a href='https://developers.themoviedb.org/3/movies/get-movie-details'><span className='Footer-Name'>Api</span></a>   
            <span className='Footer-Name'>This Web Rating<i className="fa-regular fa-star Star"></i></span>   
         <a href='https://www.linkedin.com/in/htet-myat-14089322a/'><span className='Footer-Name'>Conta us</span></a>         
       </div> 
       <div className='Home1'>
            <span className='Footer-Name'>Cookies</span>
            <span className='Footer-Name'>Privacy and safety</span>  
            <span className='Footer-Name'>More</span>
          <a href='https://www.facebook.com/hyat.myat.9/'><span className='Footer-Name'>HyatMyat © 2022</span></a>            
       </div>      
                
       
      </div>
      <div className='Footer-img-Container'>       
        <img className='Footer-img' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-netflix-animation-index-1585754615.jpg?crop=1.00xw:0.668xh;0,0&resize=1200:*'/>
      </div>
      <div className='Footer-Right'>
        <div className='Sponer-container'>
            <span className='Sponsors'>Sponsors By</span>
            <span className='Become-sponsor'>Become a sponsor</span>
       </div>
        
      </div>      
    </div>
  )
}

export default Footer