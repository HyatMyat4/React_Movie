import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='SideBar'>
        <div className='Side-bar-container'>
           <div className='M-container'>
            <h3 className='Mfkle'><i class="fa-solid fa-video icondfg Mocvnn"></i>Movies</h3>
            <Link  to="/"><span className='Nbzmkggf'><i class="fa-solid fa-house icondfg"></i>Popular</span></Link>
            <Link  to="/UpComing"><span className='Nbzmkggf'><i class="fa-regular fa-star Star icondfg"></i>UpComing</span></Link>
            <Link  to="NowPlaying"><span className='Nbzmkggf'><i class="fa-solid fa-circle-nodes icondfg Noe "></i>Now Playing</span></Link>
            <Link  to="/TopRated"><span className='Nbzmkggf'><i class="fa-solid fa-staff-snake icondfg Snk"></i>Top Rated</span></Link>  
          </div>         
        </div>
        <div className='Side-bar-container'>
           <div className='M-container'>
            <h3 className='Mfkle'><i class="fa-solid fa-tv icondfg Mocvnn"></i>Tv Shows</h3>            
            <Link  to="/AirToday"><span className='Nbzmkggf'><i class="fa-solid fa-cloud-arrow-down icondfg clouls"></i>Airing Today</span></Link>
            <Link  to="/onTv"><span className='Nbzmkggf'><i class="fa-solid fa-wand-magic-sparkles icondfg magic"></i>on Tv</span></Link>
            <Link  to="/Rate"><span className='Nbzmkggf'><i class="fa-solid fa-money-bill-trend-up icondfg Snk"></i>Top Rated</span></Link>  
          </div>         
        </div>
        <div className='Side-bar-container'>
           <div className='M-container'>
            <h3 className='Mfkle'><i class="fa-solid fa-tv icondfg Mocvnn"></i>Actors</h3>            
            <Link  to="/Person"><span className='Nbzmkggf'><i class="fa-solid fa-face-grin-stars icondfg Star"></i>Popular People</span></Link>        
          </div>         
        </div>
        <div className='Side-bar-container'>
           <div className='M-container lastapi'>
            <h3 className='Mfkle'><i class="fa-solid fa-tv icondfg Mocvnn"></i>More..</h3>            
            <a href='https://developers.themoviedb.org/3'><span className='Nbzmkggf '><i class="fa-solid fa-server icondfg kljg "></i>Api</span></a>         
          </div>         
        </div>
    </div>
  )
}

export default SideBar