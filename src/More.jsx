import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const More = ({Movie3}) => {
    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
    const LoadCount = useRef(1);
  const api_key = '69a65b17b82a689fb8dfbe96fb1ccde0';   
    const [ MoreMovie , setMoreMovie ]=useState([]);
    useEffect(() => {
        haldlePageAll()      
       }, [])
       
       const haldlePageAll = (e)  =>{  
        const Url_Movie2 =`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=4`
          fetch(Url_Movie2)
          .then((res)=>res.json())
          .then(data=>{
            setMoreMovie(data.results)            
           console.log(MoreMovie,'is load')
          })
         
       }
const LodMore=()=>{
    LoadCount.current += 1 ;
    const Url_Movie2 =`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${LoadCount.current}`
     
        fetch(Url_Movie2)
        .then((res)=>res.json())
        .then(data=>{
        setMoreMovie([...MoreMovie, ...data.results])
       
          console.log(MoreMovie,'is load')         
 })
}    
  return (
    <div className='More2'>        
        <div className='blar-blar'>     
            {MoreMovie.map((M)=>    
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

export default More