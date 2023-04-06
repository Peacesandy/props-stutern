import React from 'react'
import './styles/Input.css'

function Input() {
    return(
        <div className='Input'> 
         <form>
            <div className='input-group'>
               <label></label>
               <input type='text' id='name' value='Search Google...'/>
            </div>
         </form>
        </div>
    )
}

export default Input