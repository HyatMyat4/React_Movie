import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderMid from './HeaderMid'
import HeaderRight from './HeaderRight'

const HeaderContainer = ({setSearchMovie , setSearchPage ,setSearchresults ,searchvalue ,setsearchValue ,SearchMovie}) => {
  return (
    <div className='Header-container dFRC'>
        <HeaderLeft />  
        <HeaderMid />      
        <HeaderRight 
        setSearchMovie={setSearchMovie}
        setSearchPage={setSearchPage} 
        setSearchresults={setSearchresults}
        searchvalue={ searchvalue} 
        setsearchValue ={setsearchValue}
        SearchMovie={SearchMovie}
        />
    </div>
  )
}

export default HeaderContainer