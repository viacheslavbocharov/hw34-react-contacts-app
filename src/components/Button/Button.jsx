import React from 'react'
import './Button.css'

export default function Button({name, onClick}) {
  return (
    <div>
        <input className="btn" type="button" value={name} onClick={onClick}/>
    </div>
  )
}
