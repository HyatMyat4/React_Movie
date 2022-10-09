import React from 'react'
import { Link, useParams  } from 'react-router-dom';
import { useEffect , useState} from 'react';
const OverViewCasts = ({api_key}) => {
    const [ credits , setcredits ]=useState()
    const [ personD , setpersonD ]=useState()
  
    const {id} = useParams()
    const PersonDetail_Url=`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${api_key}&language=en-US` 
    const Detail_url=`https://api.themoviedb.org/3/person/${id}?api_key=${api_key}&language=en-US`  
    const Profailsrc =`	https://www.themoviedb.org/t/p/w300_and_h450_bestv2/`

  
const PersonDetailFuction = async (e,s)=>{

const res = await fetch(e)
const data = await res.json()
s(data)

}

useEffect(() => {
    PersonDetailFuction(PersonDetail_Url , setcredits)
    PersonDetailFuction(Detail_url , setpersonD)
    console.log(credits,'777777777777777455')
    console.log(personD,'77777777777777742')

}, [])

 const MoviePoster = credits&&credits ? credits.cast.filter((Movie) => Movie.poster_path ) : null ;
 


const Api_originimg = '	https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' 
  return (
    <div className='OverViewCasts'>
          {personD && personD ?
        <div className='Casts-Container-detail'>
            <div className='Casts-D-Left'>
                <div>
                <img className='profail-img-d' src={ Profailsrc  + personD.profile_path}/> 
                  <div className='Personal-info'>Personal Info</div>                  
                 
                </div>
            </div>
            <div className='Casts-D-Right'>
               <h2 className='name-D'>{personD.name}</h2>
               <div className='tyittle'>Biography</div>
               <span className='polfvje'>{personD.biography}</span>
               <div className='jjggllkd'>
                 <div className='answer-C'>
                        <div className='Known'>Known For</div>
                        <div className='personD'>{personD.known_for_department}</div>
                  </div>
                  <div className='answer-C'>
                        <div className='Known'>Known Credits</div>
                        {credits && credits ?
                        <div className='personD'>{credits.cast.length}</div>
                        : <span>Lodaing</span> }
                  </div>
                  <div className='answer-C'>
                        <div className='Known'>Birthday</div>
                        <div className='personD'>{personD.birthday}</div>
                  </div>
                  <div className='answer-C'>
                        <div className='Known'>Place of Birth</div>
                        <div className='personD'>{personD.place_of_birth}</div>
                  </div>
                </div>
               <div className='tyittle'>Known For</div>
               <div className='know-for-d'>
               {MoviePoster && MoviePoster ?
                MoviePoster.map((C)=>(
                  
                        <img className='hHJKHjkhfJKLHFHJK' src={Api_originimg + C.poster_path} />
                                       
                ))
                 : <span>Loding...</span> }
               </div>
                 </div>
                    </div>
        : <span>Loding...</span> }
    </div>
  )
}

export default OverViewCasts