import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  color: #ff00ee;
  font-weight: 600;
  border: 1px solid #ff00ee;
  background: transparent;
  transition: all 0.7s ease;
  &:hover {
    color: #fff;
    background-color: #ff00ee;
  }
`
const ButtonStyled = ({text}) => {
  return (
    <Button>{text}</Button>
  )
}

export default ButtonStyled