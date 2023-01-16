import React from 'react'
import {Container} from 'react-bootstrap';
import './css/Announcement.css'


const Announcement = () => {
  return (
    <Container fluid className='announcement text-white d-flex align-items-center justify-content-center fw-500'>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement
