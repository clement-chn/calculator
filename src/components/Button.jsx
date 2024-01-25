import React from 'react'

const Button = (props) => {

  return (
      <button className={`border 
      ${props.width ? `w-${props.width}` :'w-1/4'} p-6 border-gray-300 
      ${props.bgcolor ? `bg-${props.bgcolor}-500` :'bg-gray-200'}
      ${props.textcolor ? `text-${props.textcolor}` :''}
      `}>
       {props.name}
      </button>
  )
}

export default Button