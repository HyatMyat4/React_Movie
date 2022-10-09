import React from 'react'

const MoreVideo = ({Movie3}) => {
    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
  return (
    <div>
   <div className='blar-blar'>     
     {Movie3.map((M)=>    
       
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
         
     )}
    
    </div>
    </div>
  )
}

export default MoreVideo