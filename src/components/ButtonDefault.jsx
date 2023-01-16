import React from 'react'
import styled from 'styled-components'

const Button =styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: 2px solid #${props=> props.color};
  color: #${props=> props.color};
  cursor: pointer;
  transition: 1s ease;
  &:hover{
    color: #fff;
    background-color: #${props=> props.color};    
  }
`


const ButtonDefault = ({text,color}) => {
  return (
    <Button color={color}>{text}</Button>
  )
}

export default ButtonDefault