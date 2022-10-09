import React from 'react'
import { useEffect , useState  } from 'react'
import { Link } from 'react-router-dom'
const AirToday = (Props) => {
    const Url_Nowplaying = `https://api.themoviedb.org/3/tv/${Props.e}?api_key=${Props.api_key}&language=en-US&page=1`
    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 

  const [ Upcoming , setUpComing ]=useState([])
  useEffect(() => { 
    NowPlaying()
  }, [])
  
  
    const NowPlaying = async ()=>{
      try{
        const res = await fetch(Url_Nowplaying)
        const data = await res.json();
        console.log(data,'Now Playing data')
        setUpComing(data.results)        
      } catch (err) {
        console.log(err);
      }
  
    }

  return (
    <div>
                        <div className='blar-blar'>     
          {Upcoming.map((M)=>   
          <Link to={`/OverViewtv/${M.id}`}>
          <div className='Video-Real-Card' key={M.id}> 
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

export default AirToday