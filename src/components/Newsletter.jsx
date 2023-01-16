import React from 'react'
import { Send } from '@material-ui/icons'
import { Container } from 'react-bootstrap'
import './css/Newsletter.css'

const Newsletter = () => {
  return (
    <Container fluid className='newsletter d-flex justify-content-center align-items-center flex-column'>
        <h1 className='title fw-500 mb-2'>Newsletter</h1>
        <h3 className='description fw-300 mb-2'>Get timely updates from your favorite products!</h3>
        <div className='input-container d-flex justify-content-center bg-white'>
            <input className='input ' type='email' placeholder='Your email'/>
            <button className='btn-styled'>
                <Send/>
            </button>
        </div>
    </Container>
  )
}

export default Newsletter