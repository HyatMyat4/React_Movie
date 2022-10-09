import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams  } from 'react-router-dom';
import { useEffect , useState ,useRef } from 'react';
import { Navigation, Pagination, FreeMode, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Overview = ({ api_key , Api_originimg ,Movietv}) => {
  
  const {id} =useParams()
  const [ OverViewMovie , setOverViewMovie ]=useState([])
  const w138 ='https://www.themoviedb.org/t/p/w138_and_h175_face/'
  const [ carts , setcarts ]=useState([])
  const [video , setvideo]=useState([])
  const iframeRef = useRef(null);
  const overViewFuction = async (e) =>{     
    const id_Url=`https://api.themoviedb.org/3/${Movietv}/${id}?api_key=${api_key}&language=en-US`
    const res = await fetch(id_Url)
    const data = await res.json();
    setOverViewMovie(data)
    console.log(data,'Now Playing data2222222222')
    console.log(id,'it working888888888888888')      
    }
    const overViewFuction2 = async (e) =>{  
      const Cridits =`https://api.themoviedb.org/3/${Movietv}/${id}/credits?api_key=${api_key}&language=en-US`     
      const res = await fetch(Cridits)
      const data = await res.json();   
      setcarts(data.cast)  
      console.log(data.cast,'Now Playing data222222222244')          
      }
     
    const overViewFuction3 = async (e) =>{  
      const MOvieVideo =`https://api.themoviedb.org/3/${Movietv}/${id}/videos?api_key=${api_key}&language=en-US`     
      const res = await fetch(MOvieVideo)
      const data = await res.json();      
      setvideo(data.results.slice(0,7))  
      console.log(video,'??????')  
      }
     
    useEffect(() => {
      overViewFuction3() 
      overViewFuction()
      overViewFuction2()        
  
    }, [])
  

   
  

    const CastsPhoto = carts && carts.filter((castsP) => castsP.profile_path  )
  

  return (
   
    <div className='ovw'>
      
   <div className='OverView-Container'>          
       {OverViewMovie.genres && OverViewMovie.genres ?     
       <SwiperSlide >
        <div className='colour-flow'></div>
       <img className='image-ov' src={Api_originimg + OverViewMovie.backdrop_path}/> 
         
       <div className='Background-video-card-container ral2'>   
       
               <div className='BGP-videoCard   '>
                   <img className='background-img2 gghjklll' src={Api_originimg + OverViewMovie.poster_path} />                  
               </div>                   
             
             <div className='Ov-Right'>
                <span className='BGVC-tittle22'>{OverViewMovie.original_title}</span> 
          <div className='g-container'>            
            {(OverViewMovie.genres && OverViewMovie.genres ? OverViewMovie && OverViewMovie.genres.map((O)=>( <span className='Geners' key={O.id}>{O.name}</span> )) : <span>Lodaing...</span>  )}
          </div>
                <div className='tt-container'>
                   <span className='tt-33v'>{OverViewMovie.overview}</span>     
                </div>
            <div className='c7yz'>    
              <div className='ghnkjf2'>       
                 <div className='TimeRD'><span className='RdT'>release_date  </span>  {OverViewMovie.release_date}</div>
              </div>   
              <div className='ghnkjf'>
                 <div className='TimeRD '><span className='RdT'>Popular </span>{OverViewMovie.popularity}</div>  
              </div>
               
            </div>
            <div className='c782n'>
               <div className='Casts'>Casts</div>
               <Link  to="/Person"><div className='Sa'>See more</div></Link>
            </div>         
          <div className='casts-swiper-container'>
            <div className='know-for-d'>
           
                {CastsPhoto && CastsPhoto ?
                  CastsPhoto.map((C)=>(         
                    <>    
                    
                        <img className='hHJKHjkhfJKLHFHJK' src={Api_originimg  + C.profile_path} />  
                        <span className='Cas-nanme'>{C.name}</span>         
                        </>   
                                                  
                  ))
                  : <span>Loding...</span> }
               </div>

          </div>
             </div>
       </div>
       </SwiperSlide>    
        :  <div className='No-display-to-show'>
          
              <span className='SNDTS' >Soorty NO display to show... (0__0)</span> 
              <Link  to="/"><span className='GBk'>GO Back....<i class="fa-solid fa-rotate-left Rotate"></i></span></Link>
               <img className='NsImg' src='https://www.denmakers.in/img/no-product-found.png' />
               <img className='NsImg' src='' />
               <img className='NsImg' src='https://cdni.iconscout.com/illustration/premium/thumb/empty-box-4344460-3613888.png' />               
              
           </div>
          } 
        </div>
             <div className='Video-container'>   
         
        {video.map((video)=>(
          <div className='Video-Edit' >
          <iframe        
          src={`https://www.youtube.com/embed/${video.key}`}
          ref={iframeRef}
          title="video"
          width="100%" 
          height="100%"               
          ></iframe>           
        </div>
        ))}       
   </div>


   </div>
  
  )
}

export default Overview