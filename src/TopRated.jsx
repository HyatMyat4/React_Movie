import React from 'react'
import { useEffect , useState } from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const TopRated = (Props) => {
    const LoadCount = useRef(1);

    const Url_Nowplaying = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Props.api_key}&language=en-US&page=1`
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
    const LodMore=()=>{
        LoadCount.current += 1 ;
        const Url_Movie2 =`https://api.themoviedb.org/3/movie/top_rated?api_key=${Props.api_key}&language=en-US&page=${LoadCount.current}`
         
            fetch(Url_Movie2)
            .then((res)=>res.json())
            .then(data=>{
              setUpComing([...Upcoming, ...data.results])
           
                   
     })
    }
  return (
    <div>
                <div className='blar-blar'>     
          {Upcoming.sort((a,b) => a.vote_count - b.vote_count).map((M)=>  
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
          <div className='LoadMOre-container'>
            <button className='load-more' onClick={LodMore}>Load More...</button>
        </div>
    </div>
  )
}

export default TopRated