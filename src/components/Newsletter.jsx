import React from 'react'
import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    height: 50vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 60px;
    font-weight: 500;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    border: 1px solid #d0d0d0;
    
`
const Input = styled.input`
    border: none;
    font-size: 15px;
    font-weight: 400;
    padding: 2px 15px;
    flex: 8;
`
const Button = styled.button`
    flex: 1;
    border: 1px solid #ff00ee;
    background-color: #fff;
    color: #ff00ee;
    cursor: pointer;
    transition: all 1s ease;
    &:hover{
      background-color: #ff00ee;
      color: #fff;
    }
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products!</Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter