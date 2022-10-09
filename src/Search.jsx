import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRef  } from 'react'
const Search = ({SearchMovie ,  SearchPage,  Searchresults , api_key ,setSearchMovie , searchvalue}) => {
    const Api_originimg = 'https://image.tmdb.org/t/p/original/'  
    const counterPage = useRef(1);    
   
    const Api_search =`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchvalue}&language=en-US&page=${counterPage.current}`  
const CounterFuction=(e)=>{  
  
    console.log( SearchPage,'is laggg')
    if(e === 'Next' ){
        if(counterPage.current ===  SearchPage){
       return
        }        
        counterPage.current += 1 ;        
            fetch(Api_search)
            .then((res)=>res.json())
            .then(data=>{
             setSearchMovie(data.results)
             console.log(data.results,'Nextreb vv')
             
     })
    }else{
      if(counterPage.current === 1){
        return
      }
      counterPage.current -= 1 ; 
         
          fetch(Api_search)
          .then((res)=>res.json())
          .then(data=>{
            setSearchMovie(data.results)
        console.log(data.results,'preb vv')
          })
    }
    


}

  return (
    <div className='Search'>
              <div className='TrK2'>
                <span className='Total-r'>Total results / <span className='i0lk'>{Searchresults}</span></span>                
            </div>
        <div className='Search-Header'>
            <div className='TrK'>
                <span className='Total-r'>Total results / <span className='i0lk'>{Searchresults}</span></span>                
            </div>
            <div className='Bt-Container'>
                <span>{counterPage.current} /<span> {SearchPage}</span></span>
                <button className='NPB' onClick={()=>CounterFuction('Prev')} disabled={counterPage.current === 1 ? true  : false }>Prev</button>
                <button className='NPB' onClick={()=>CounterFuction('Next')} disabled={counterPage.current === SearchPage ? true  : false }>Next</button>                
            </div>
        </div>

        <div className='blar-blar'>     
     {SearchMovie.map((M)=>    
     <Link to={`/OverView/${M.id}`}>
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

export default Search