import React from 'react'
import styled from 'styled-components'
import { Footer, Navbar } from '../components'

const Container = styled.div`
    max-width: 100vw;
    height: calc(100vh - 90px);
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
        <>
            <header>
                <Navbar />
            </header>
            <section className='main'>
                <Container>
                    <Wrapper>
                        <Title>Register Now</Title>
                        <Form>
                            <Input placeholder="Name" type='text' />
                            <Input placeholder="Last Name" type='text' />
                            <Input placeholder="Username" type='text'/>
                            <Input placeholder="Email" type='email'/>
                            <Input placeholder="Password" type='password' />
                            <Input placeholder="Confirm Password" type='password' />
                            <Agreemnt>By creating an account, I consent to the processing of my personal data in accordance with the <b> PRIVACY POLICY </b></Agreemnt>
                        </Form>
                        <Button>Create</Button>
                    </Wrapper>
                </Container>
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Register