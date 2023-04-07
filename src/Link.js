import React from 'react'
import './styles/Link.css'

function Link() {
    return(
        <div className='link'> 
         <p>Goggle offered in: 
            <a href='#'>Hausa</a>
         <a href='#'>Igbo </a>
         <a href='#'>Ede Yoruba</a>
         <a href='#'>Nigerian pidgin </a>
         </p>
        </div>
    )
}

export default Link