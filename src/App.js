import './App.css';
import HeaderContainer from './Header/HeaderContainer';
import HeaderContainerC from './HeaderContainer.css';
import FirstBody from './FirstBody';
import FirstBodyC from './Firstbody.css';
import { useEffect } from 'react';
import { useState } from 'react'
import Overview from './Overview';
import OverviewC from './OverView.css';
import More from './More';
import MoreC from './More.css';
import {  Routes , Route } from 'react-router-dom'
import Search from './Search';
import SearchC from './Search.css';
import { useRef } from 'react';
import NowPlaying from './NowPlaying';
import NowPlayingC from './NowPlaying.css';
import UpComing from './UpComing';
import Rate from './Rate';
import AirToday from './AirToday';
import TopRated from './TopRated';
import Tv from './Tv';
import Person from './Person';
import PersonC from './Person.css';
import OverViewCasts from './OverViewCasts';
import OverViewCastsC from './OverViewCasts.css';
import SideBarC from './SiderBar.css';
import SideBar from './Header/SideBar';
import FooterBar from './Header/FooterBar';
function App() {
  const api_key = 'c7236663fdf1f30d40eb135279aadead';     
  const [searchvalue , setsearchValue ]=useState([]); 
  const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
  const Url_MovieNaruto =`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=Naruto&language=en-US&page=1`
  const Url_Movie2 = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=2`
  const  Url_Movie1 = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  const Url_tv = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=2` 
const top_rated= 'top_rated'
const airing_today ='airing_today'
const content_ratings ='on_the_air'
  const [Movie , setMovie ]=useState([]);
  const [Movie2 , setMovie2 ]=useState([]);
  const [Movie3 , setMovie3 ]=useState([]);
  const [SearchMovie,setSearchMovie]=useState([])
  const [SearchPage, setSearchPage]=useState([])
  const [Searchresults,setSearchresults]=useState([])
  const [Naruto , setNaruto]=useState([])

  const ApiFetch =  (APi , AddMove  ) =>{
    fetch(APi)
    .then((res)=>res.json())
    .then(data=>{
      AddMove(data.results)          
      console.log(data)
    })

  }

 console.log(searchvalue,'illlllll')
  useEffect(()=>{
    ApiFetch(Url_Movie1 , setMovie  )     
    ApiFetch(Url_Movie2 , setMovie3 )  
    ApiFetch(Url_MovieNaruto , setNaruto )  
    ApiFetch(Url_tv , setMovie2 ) 
     
     
   
   
   },[])







  return (
    <div className="App">      
        <HeaderContainer 
        setSearchMovie={setSearchMovie}
        setSearchPage={setSearchPage}
        setSearchresults={setSearchresults}
        setsearchValue={setsearchValue}
        SearchMovie={SearchMovie}
        />   
        <SideBar/>
        <Routes>

            <Route path='/NowPlaying' element={<NowPlaying
             api_key={api_key}
            />} />
            <Route path='/UpComing' element={<UpComing
             api_key={api_key}
            />} />
            <Route path='/Rate' element={<Rate
             api_key={api_key}
             top_rated={top_rated}
            />} />
            <Route path='/AirToday' element={<AirToday
             api_key={api_key}
             top_rated={top_rated}
             e={airing_today}
            />} />
            <Route path='/onTv' element={<Tv
             api_key={api_key}
             top_rated={top_rated}
             e={content_ratings}
            />} />
            <Route path='/TopRated' element={<TopRated
             api_key={api_key}
             top_rated={top_rated}
             e={top_rated}
            />} />
            <Route path='/Person' element={<Person
             api_key={api_key}         
            />} />

            <Route path='/OverView/:id' element={<Overview 
            api_key={api_key} 
            Api_originimg={Api_originimg } 
            Movietv='movie'           
            />} />
            <Route path='/OverViewtv/:id' element={<Overview 
            api_key={api_key} 
            Api_originimg={Api_originimg } 
            Movietv='tv'
            />} />
            <Route path='/OverViewCasts/:id' element={<OverViewCasts 
            api_key={api_key} 
            Api_originimg={Api_originimg }          
            />} />
            <Route path='/More' element={<More Movie3={Movie3}/>} />
            <Route path='/Search' element={<Search 
            SearchMovie={SearchMovie} 
            SearchPage={SearchPage} 
            Searchresults={Searchresults}
            api_key={api_key}
            setSearchMovie={setSearchMovie}
            searchvalue={ searchvalue}                  
           
            
            />} />
            <Route path='/' element={ <FirstBody 
        Movie={Movie} 
        setMovie={setMovie}
        Movie2={Movie2}
        setMovie3={setMovie3} 
        Movie3={Movie3}      
        api_key={api_key}
        Naruto={Naruto}
        /> }/>
           
      </Routes>   
      <FooterBar/>
        
    </div>
  );
}

export default App;
