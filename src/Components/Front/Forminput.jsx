import React, { useState } from 'react'
import './Forminput.css'

const Forminput = (props) => {
  const[focused, Setfocused] = useState(false)
    const {label,errorMessage,value, onChange, id, ...inputProps} = props
  
    const handleFocused = (e) =>(
      Setfocused(!focused)
    )
  return (
    <div className='wrapper'>
        <div className='flex flex-col'>
        <label>{label}</label>
        <input className='p-3 border-2 border-darkBlack mb-2' onChange={onChange} {...inputProps} onBlur={handleFocused} focused={focused.toString()} />
        <span>{errorMessage}</span>
        </div>
    </div>
  ) 
}

export default Forminput