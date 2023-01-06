import React from 'react'

export const Button = (props) => {
    const {text,className} = props
  return <button type='buttun' className={className + " rounded px-[15px] py-[10px]"}>{text}</button>
}
