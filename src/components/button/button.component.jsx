import React from 'react'
import './button.styles.css'

function Button({text, idName, onClick}) {
  return (
    <div id={idName} className='btn' onClick={onClick}>
      {text}
    </div>
  )
}

export default Button