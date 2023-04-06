import React from 'react'
import myImage from './googlelogo.png'

function Logo(){
    return(
        <div className='logo'>
       <img src={myImage} className='logo' alt='logo'/>
        </div>
    )
}

export default Logo