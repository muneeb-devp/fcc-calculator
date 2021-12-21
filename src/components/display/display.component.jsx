import React from 'react'
import './display.styles.css'

function Display({text = '0', calculation = '0'}) {
  return (
    <div className='screen'>
      <div id="calculation">
        {calculation}
      </div>
      <div id="display" className='result'>
        {text}
      </div>
    </div>
  )
}

export default Display
