import React from 'react'
import { useState , useEffect , useRef } from 'react'
import { Link } from 'react-router-dom';

const Person = (Props) => {
    const [ Person , setPerson ]=useState([]);
    const [totalPage , settotalPage ]=useState([]);
    const counterPage = useRef(2); 
    const PersonUrl =  `https://api.themoviedb.org/3/person/popular?api_key=${Props.api_key}&language=en-US&page=1`
    const PersonUrl2 =  `https://api.themoviedb.org/3/person/popular?api_key=${Props.api_key}&language=en-US&page=${counterPage.current}`
    const Profailsrc =`https://www.themoviedb.org/t/p/w235_and_h235_face/`
    const PersonFuction = async ()=>{
        try{
          const res = await fetch(PersonUrl)
          const data = await res.json();
          console.log(data,'Now Playing data')
          setPerson(data.results) 
          settotalPage(data.total_pages)
          console.log(data.results,'Person...')     
        } catch (err) {
          console.log(err);
        }
    
      }

   useEffect(() => {
PersonFuction()
      }, [])
      
      const CounterFuction=(e)=>{  
  
        console.log( totalPage,'is laggg++++++++++')
        if(e === 'Next' ){
            if(counterPage.current ===  totalPage){
           return
            }        

                counterPage.current += 1 ;        
                fetch(PersonUrl2)
                .then((res)=>res.json())
                .then(data=>{
                    setPerson(data.results)                   
                 console.log(data.results,'Nextreb vv')
                 
         })           
        }else{
          if(counterPage.current === 1){
            return
          }
          counterPage.current -= 1 ; 
             
              fetch(PersonUrl2)
              .then((res)=>res.json())
              .then(data=>{
                setPerson(data.results)
            console.log(data.results,'preb vv')
              })
        }
        
    
    
    }
    const LodMore=()=>{
        counterPage.current += 1 ;        
            fetch(PersonUrl2)
            .then((res)=>res.json())
            .then(data=>{
                setPerson([...Person,...data.results])
           
                   
     })
    }

const MoviePoster = Person.filter((p) => p.profile_path)
  return (


    <div className='Person'>
         <h2 className='pp-nam'>Popular Actors</h2>
        <div className='PaganationPerson'>           
            <span className='showCase'>{counterPage.current} / {totalPage}</span>      
           <button className='NPB' onClick={()=>CounterFuction('Prev')} disabled={counterPage.current === 1 ? true  : false }>Prev</button>
           <button className='NPB' onClick={()=>CounterFuction('Next')} disabled={counterPage.current === totalPage ? true  : false }>Next</button>  
            
        </div>
         
        <div className='Person_Container'>           
            {MoviePoster.map((P)=>(
              <Link to={`/OverViewCasts/${P.id}`}>
            <div className='Popular_box'>
            <img className='Popular-img' src={Profailsrc + P.profile_path}/>
            <div className='Popo-Name-Container'>
                <span className='Pop-Name'>{P.name}</span>
                <div className='Person-seps'>{`${(P.known_for.map((M)=>(`${M.original_title} , `))).length <  20 ?(P.known_for.map((M)=>(`${M.original_title === undefined ? '' : M.original_title } `))).slice(0,2):(P.known_for.map((M)=>(`${M.original_title} , `)))  }...`} </div>
            
            </div>
        </div>
</Link>
            ))}
                
        </div>
        <div className='LoadMOre-container'>
            <button className='load-more' onClick={LodMore}>Load More...</button>
        </div>
    </div>
  )
}

export default Person