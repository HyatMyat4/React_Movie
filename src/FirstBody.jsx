import React from 'react'
import { useEffect } from 'react';
import SwiperCore,{ Autoplay } from 'swiper';
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import Footer from './Footer';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MoreVideo from './MoreVideo';

import { useRef } from 'react';
const FirstBody = ({ Movie , Movie2 , setMovie , setMovie3 , Movie3 , api_key ,Naruto }) => {
    const Api_W500img = 'https://image.tmdb.org/t/p/w500/'
    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
    const counter = useRef(25);
    const More = useRef(1);
    const MovieAllTest = useRef(1);
    SwiperCore.use([Autoplay])
   const [ number , setnumber ]=useState([
    {num:1},
    {num:2},
    {num:3},
    {num:4},
    {num:5},
    {num:6},
    {num:7},
    {num:8},
    {num:9},
    {num:10},
    {num:11},
    {num:12},
    {num:13},
    {num:14},
    {num:15},
    {num:16},
    {num:17},
    {num:18},
    {num:19},
    {num:20},
    {num:21},
    {num:22},
    {num:23},
    {num:24},
    {num:25},
   ])




 useEffect(() => {
  
  haldlePageAll()

 }, [])
 console.log(Movie,',+++++++++++')
 const [ Totalpage , setTotalpage ]=useState([])  
 const haldlePageAll = (e)  =>{  
  const Url_Movie2 =`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    fetch(Url_Movie2)
    .then((res)=>res.json())
    .then(data=>{
      setTotalpage(data.total_pages) 
      
      
     
    })
   
 }
 
 const NextPrev = (NextPrev) =>{
  if(NextPrev === 'Next' ){
    if(counter.current === Totalpage ){
   return
    }
    console.log(Totalpage)
    counter.current += 1 ;
    const Url_Movie2 =`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${counter.current}`
     
        fetch(Url_Movie2)
        .then((res)=>res.json())
        .then(data=>{
          setMovie3(data.results)
          
         
 })
}else{
  if(counter.current === 1){
    return
  }
  counter.current -= 1 ;
  const Url_Movie2 =`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${counter.current}`
   
      fetch(Url_Movie2)
      .then((res)=>res.json())
      .then(data=>{
        setMovie3(data.results)

      })
}

 }
   const haldlePage = (e)  =>{
    const Pageid = e.target.id       
    counter.current += 1 ;
    const Url_Movie2 =`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${Pageid}`
    console.log('it working',Pageid)   
      fetch(Url_Movie2)
      .then((res)=>res.json())
      .then(data=>{
        counter.current += 1 ;
        setMovie3(data.results)
        console.log(data.results,'llllllllllllllll')
        
       
      })
     
   }

   const MoreFuction = () => {
    MovieAllTest.current += 1 ;

 console.log(MovieAllTest)

   }




   const [casts, setCasts] = useState([]);
const MoviePoster = Naruto.filter((Movie) => Movie.backdrop_path && Movie.popularity > 25 && Movie.vote_count > 25 )
  return (
    <div className='FirstBody'>
       
     <Swiper         
        loop={true}
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}        
        autoplay={{delay: 5000}}
        className="mySwiper"
      >
        {Movie.map((M)=> 
        <SwiperSlide key={M.id}>
            <img className='background-img' src={Api_originimg + M.backdrop_path } />
            <div className='Background-video-card-container'>
            <div className='BackGround-VideoCard'>
              <div className='BGP-videoCard'>
                  <img className='background-img2' src={Api_originimg + M.poster_path } />                    
              </div>             
              <div className='spec-c-er'>  
                  <Link to={`/OverView/${M.id}`}>            
                      <span className='See-More2'>See More</span>   
                  </Link>                
              </div>              
            </div>
            </div>
        </SwiperSlide>        
        )}
      </Swiper>      
     <div className='Video-card-Slider '>
     <Swiper
         loop={true}
         modules={[Autoplay]}
         grabCursor={true}         
         spaceBetween={20}
         slidesPerView={3}        
         autoplay={{delay: 2000}}             
          
            
        className="mySwiper"
      >
           {Movie2.map((M)=> 
              
        <SwiperSlide key={M.id}>
          <Link to={`/OverViewtv/${M.id}`}> 
           <span className='BGVC-tittle2'>{M.original_name}</span>     
          <div className='Vd-slide-C'>            
              <img className='background-img' src={Api_originimg + M.poster_path } />                                    
          </div>    
          </Link>              
        </SwiperSlide>  
          
        )}
      </Swiper>
     </div>
     <div className='Video-card-Slider ad1k'>
     <Swiper
         loop={true}
         modules={[Autoplay]}
         grabCursor={true}         
         spaceBetween={15}
         slidesPerView={2}        
         autoplay={{delay: 4000}}
         className="mySwiper"
      >
           {MoviePoster.map((M)=> 
        <SwiperSlide key={M.id}>
          <Link to={`/OverView/${M.id}`}><div className='Vd-slide-C slide2' >
              <img className='background-img' src={Api_originimg + M.poster_path   } />  
              <span className='BGVC-tittle2'>{M.title}</span>           
          </div></Link>                   
        </SwiperSlide>        
        )}
      </Swiper>
     </div>
     <div className='Pagination-number-Container'>
     <span className='Show-caseNumberChange'> {counter.current} /   <span className='All-page'> {Totalpage}</span></span>        
     {number.map((M)=>  
            <span className='Number-paganation' id={M.num} onClick={haldlePage}>{M.num}</span>
    )}   
    <span className='Number-paganation2' onClick={()=>NextPrev('Prev')}>Prev</span>     
    <span className='Number-paganation2' onClick={()=>NextPrev('Next')} >Next</span> 
    
     </div>
     <div className='blar-blar'>      
     {Movie3.sort((a,b) => Math.floor(b.vote_count) - Math.floor( a.vote_count)).map((M)=>    
    
    <Link to={`/OverView/${M.id}`}><div className='Video-Real-Card'  key={M.id}> 
     <div className='hover-Eff' key={M.id} id={M.id}></div>   
     <img className='Drop-img' src={Api_originimg + M.poster_path} />     
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
     
     <div className='More-container'>
     <Link  to="/More"><button className='More-bt' onClick={MoreFuction}>More...</button></Link>        
     </div> 
     <Footer/>
   
    </div>
  )
}

export default FirstBody