import React from 'react'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
const NowPlaying = (Prop) => {
  const Url_Nowplaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Prop.api_key}&language=en-US&page=1`
  const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
const [ Nowplaying , setNowPlaying ]=useState([])
useEffect(() => {
  NowPlaying()
}, [])


  const NowPlaying = async ()=>{
    try{
      const res = await fetch(Url_Nowplaying)
      const data = await res.json();
      console.log(data,'Now Playing data')
      setNowPlaying(data.results)      
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <div className='NowPlaying'>
        <div className='blar-blar'>     
          {Nowplaying.map((M)=>  
           <Link to={`/OverView/${M.id}`}> 
          <div className='Video-Real-Card'> 
          <div className='hover-Eff'></div>   
              <img className='Drop-img' src={Api_originimg + M.poster_path}/>        
              <div className='Video_specs'>
              <span className='Real_cardVd-Name' >{M.title}</span>
              <div>
                  <span className='Popularity'> <i className="fa-regular fa-star Star"></i> Popularity :<span className='Popular-Count'> {M.popularity}</span></span>
              </div> 
              </div>  
              
          </div>  
          </Link>    
          )}
          
          </div>
    </div>
  )
}

export default NowPlaying