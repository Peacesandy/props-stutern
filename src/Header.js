import React from 'react'
import profilePhoto from './google image.jpg'


function Header() {
    return(
        <div> 
            <p>Gmail</p>
            <p>Images</p>
            <img src={profilePhoto} className='profile-photo' alt='Profile Photo'/>
        </div>
    )





}

export default Header