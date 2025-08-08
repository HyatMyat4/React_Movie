import React from 'react'
import { Link } from 'react-router-dom'
const HeaderLeft = () => {
    const Dropdowl = (e) => {       
        const loopnone =()=>{
            for(let i= 0 ; i < 4 ; i++ ){
                const Allnone =document.getElementsByClassName('Drop-Down')[i]
                Allnone.style.display = 'none'
        }
       
        }     
        const Value = e.target.id
        console.log(Value)
        const NoneFuction = (e) => {
            const None =document.getElementsByClassName(e)[0]
            None.style.display = 'inline'
        }       
        if(Value === '19987'){   
            loopnone()           
            NoneFuction('Movie')                           
        } else if(Value === '19988' ){ 
            loopnone()             
            NoneFuction('Tv-Shows')
            
        }else if(Value === '19989' ){
            loopnone()  
            NoneFuction('Actors')
            
        }else if (Value === '19990' ){
            loopnone()  
            NoneFuction('More')            
        }
    }
    
    const Dropdowlnone = (e) => {
            const Value = e.target.id
            console.log(Value)            
             for(let i= 0 ; i < 4 ; i++ ){
                const Allnone =document.getElementsByClassName('Drop-Down')[i]
                Allnone.style.display = 'none'
            }  
     
    }
  
   
  return (
    <div className='Header-Left dFRC'>
        <div className='Top-Header-Logo dFRC'>
            <img className='Header-img' src='https://cdn.freelogovectors.net/wp-content/uploads/2022/05/asus_rog_logo_freelogovectors.net_.png' />    
            <span className='Logo-Name'>Replubic of Viwer</span>       
        </div>
        <div className='Name-Container' onMouseEnter={Dropdowl} >
            <span className='MTAM' id='19987'>Movies<i className="fa-solid fa-caret-down DiH"></i></span>
            <div  className='Drop-Down Movie' onMouseEnter={Dropdowl}  onMouseLeave={Dropdowlnone} >
            
            <Link  to="/"><div className='Dropdowl-child' >Popular</div></Link>
            <Link  to="NowPlaying"><div className='Dropdowl-child'>Now Playing</div></Link>
            <Link  to="/UpComing"><div className='Dropdowl-child'>UpComing</div></Link>
            <Link  to="/TopRated"><div className='Dropdowl-child'>Top Rated</div></Link>
            </div >
        </div>
        <div className='Name-Container' onMouseEnter={Dropdowl} >
            <span className='MTAM' id='19988'>Tv Shows<i className="fa-solid fa-caret-down DiH"></i></span>
            <div className='Drop-Down Tv-Shows'onMouseEnter={Dropdowl}  onMouseLeave={Dropdowlnone} >
            <Link  to="/"><div className='Dropdowl-child' >Popular</div></Link>
            <Link  to="/AirToday"><div className='Dropdowl-child'>Airing Today</div></Link>
            <Link  to="/onTv"><div className='Dropdowl-child'>on Tv</div></Link>
            <Link  to="/Rate"><div className='Dropdowl-child'>Top Rated</div></Link>
            </div>
        </div>
        <div className='Name-Container' onMouseEnter={Dropdowl} >
            <span className='MTAM' id='19989'>Actors<i className="fa-solid fa-caret-down DiH"></i></span>
            <div className='Drop-Down Actors' onMouseEnter={Dropdowl}  onMouseLeave={Dropdowlnone} >
            <Link  to="/Person"><div className='Dropdowl-child'>Popular People</div></Link>                  
            </div>
        </div>
        <div className='Name-Container' onMouseEnter={Dropdowl} >
            <span className='MTAM' id='19990'>More<i className="fa-solid fa-caret-down DiH"></i></span>
            <div className='Drop-Down More' onMouseEnter={Dropdowl}  onMouseLeave={Dropdowlnone} >                    
            <a href='https://developers.themoviedb.org/3/getting-started'><div className='Dropdowl-child'>Api</div></a>
            </div>
        </div>
    </div>
  )
}

export default HeaderLeft