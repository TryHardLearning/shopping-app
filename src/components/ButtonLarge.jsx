import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  color: #ff00ee;
  border: 1px solid #ff00ee;
  background: transparent;
  transition: all 0.7s ease;
  
  &:hover {
    color: #fff;
    background-color: #ff00ee;
  }
`
const ButtonLarge = ({text}) => {
  return (
    <Button>{text}</Button>
  )
}

export default ButtonLarge