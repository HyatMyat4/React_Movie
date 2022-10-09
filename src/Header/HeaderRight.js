import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const HeaderRight = ({  setSearchMovie ,setSearchPage ,setSearchresults , searchvalue , setsearchValue , SearchMovie}) => {
    
    const sunmoonFuction=(e)=>{
        const SunMoon=document.getElementsByClassName('Lock-europe1')[0];
        const moon=document.getElementsByClassName('moon')[0];
        const body=document.getElementsByClassName('body')[0];
        if(e === 'sun' ){       
        SunMoon.style.display = 'none'
        moon.style.display = 'inline'
        body.style.backgroundColor = 'black'
        body.style.color='azure'
       
        }else{        
        SunMoon.style.display = 'inline'
        moon.style.display = 'none'
        body.style.backgroundColor = 'azure'
        body.style.color='black'
        }

    }
    const api_key = '69a65b17b82a689fb8dfbe96fb1ccde0';     
    
useEffect(() => {           
    const Api_search =`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=SpiderMan`
    fetch(Api_search)
    .then((res)=>res.json())
    .then(data=>{
        setSearchMovie(data.results)  
        setSearchPage(data.total_pages)      
        setSearchresults(data.total_results)     
     
      console.log(data,'Search Here>>>>')
      console.log(data.total_pages,'Search Here777')
      console.log(data.total_results,'Search Here888')
    
    })    
}, [])

    
    const SearchFuction=(e)=>{        
        const searchValue =e.target.value            
        const Api_search =`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}`
        fetch(Api_search)
        .then((res)=>res.json())
        .then(data=>{
            setSearchMovie([...data.results])  
            setSearchPage(data.total_pages)      
            setSearchresults(data.total_results)     
         
          console.log(data,'Search Here>>>>')
          console.log(data.total_pages,'Search Here777')
          console.log(data.total_results,'Search Here888')
        
        })
        setsearchValue(e.target.value) 
    }
    const sideBarFuction=(e)=>{
        const Line3Container2=document.getElementsByClassName('X')[0]
        const Line3Container=document.getElementsByClassName('bars')[0]
        const SideBar=document.getElementsByClassName('SideBar')[0]
        const body=document.getElementsByClassName('body')[0]
        if(e === 'Line'){       
        Line3Container.style.display='inline'      
        Line3Container2.style.display='none'
        SideBar.style.display='none'  
        body.style.overflow= ''
     
        
        }
        if(e === 'X'){
            Line3Container.style.display='none'      
            Line3Container2.style.display='inline' 
            SideBar.style.display='inline'  
            body.style.overflow= 'hidden'
              
        }
    }
  return (
    <div className='Header-Right dFRC'>
        <div className='LL-Container dFRC'>
            <div className='log-in'>
                <span className='MTAM'>Log in<i className="fa-solid fa-user-lock Lock-europe2"></i></span>
            </div>
            <div>
                <i className="fa-regular fa-sun Lock-europe1" onClick={()=>sunmoonFuction('sun')}></i>
                <i className="fa-solid fa-moon moon" onClick={()=>sunmoonFuction('moon')}></i>
            </div>
        </div>
        <div className='input-Container displayFlexRow'>
            <input 
            id='Header-input'
            type={'text'}
            placeholder='eg.Spider Man'  
            onChange={SearchFuction}          
            />
            
        </div>
        <Link to='/Search'><i className="fa-solid fa-magnifying-glass H-search-icon"></i></Link>
        <div className='Line3-Container' >
                <i class="fa-solid fa-x X-icon X" onClick={()=>sideBarFuction('Line')}></i> 
                <i class="fa-solid fa-bars  X-icon bars" onClick={()=>sideBarFuction('X')}></i>   
          </div>          
    </div>
  )
}

export default HeaderRight