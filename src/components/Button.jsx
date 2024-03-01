import React from 'react'

const Button = (props) => {

  const modifyNumber = () => {
    console.log(props.name);
    console.log(props.currentValue);
  }

  return (
      <button onClick={modifyNumber} className={`border 
      ${props.width ? `${props.width}` : 'w-1/4'} p-6 border-black
      ${props.bgcolor ? `${props.bgcolor}` :'bg-gray-200'}
      ${props.textcolor ? `${props.textcolor}` :''}
      `}>
       {props.name}
      </button>
  )
}

export default Button