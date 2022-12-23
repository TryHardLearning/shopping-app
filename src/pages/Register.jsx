import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)), url('https://images.pexels.com/photos/7610408/pexels-photo-7610408.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`
const Wrapper = styled.div`
    padding: 1.25rem;
    width: 40%;
    background:linear-gradient(rgba(0,0,0,0.35),rgba(0, 0, 0, 0.4));
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px 0;
`
const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Agreemnt = styled.span`
    font-size: 0.9rem;
    margin: 20px 0;
    font-weight: 300;
`
const Button = styled.button`
    width: 30%;
    padding: 0.5rem;
    border: 2px solid #fff;
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    transition: all 1s ease;
    font-weight: 600; 
    &:hover{
        background-color: #ff00ee;
    }
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;

`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Register Now</Title>
            <Form>
                <Input placeholder ="Name"/>
                <Input placeholder ="Last Name"/>
                <Input placeholder ="Username"/>
                <Input placeholder ="Email"/>
                <Input placeholder ="Password"/>
                <Input placeholder ="Confirm Password"/>
                <Agreemnt>By creating an account, I consent to the processing of my personal data in accordance with the <b> PRIVACY POLICY </b></Agreemnt>
            </Form>
            <Button>Create</Button>
        </Wrapper>
    </Container>
  )
}

export default Register