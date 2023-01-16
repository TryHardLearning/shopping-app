import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline} from '@material-ui/icons';
import React from 'react'
import { Container } from 'react-bootstrap';
import './css/Footer.css'



const Footer = () => {
  return (
    <Container fluid className='footer d-flex p-2'>
        <div className='left d-flex flex-column p-1' style={{flex: '1'}}>
            <h1 className='logo fw500'>WayCycles</h1>
            <p className='desc pt-1 pe-1'>For all the cycles of your life, from momentary to continuous cycles, the waycycles will be with you</p>
            <div className='social d-flex gap-2'>
                <div className='social-icon text-white d-flex justify-content-center align-items-center' style={{backgroundColor: '#00eeff'}}>
                    <Facebook/>
                </div>
                <div className='social-icon text-white d-flex justify-content-center align-items-center' style={{backgroundColor: '#fe3922'}}>
                    <Instagram/>
                </div>
                <div className='social-icon text-white d-flex justify-content-center align-items-center' style={{backgroundColor: '#37ffae'}}>
                    <Twitter/>
                </div>
                <div className='social-icon text-white d-flex justify-content-center align-items-center' style={{backgroundColor: '#37fe47'}}>
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className='center p-2' style={{flex: '1'}}>
            <h3 className='title fw-500 pb-2'>Usefull Links</h3>
            <ul className='list list-unstyled d-flex flex-wrap'>
                <li className='list-item w-50 p-0 mb-1'><a href='#' className='link'>Home</a></li>
                <li className='list-item w-50 p-0 mb-1'><a href='#' className='link'>Cart</a></li>
                <li className='list-item w-50 p-0 mb-1'><a href='#' className='link'>My Account</a></li>
                <li className='list-item w-50 p-0 mb-1'><a href='#' className='link'>Who we are?</a></li>
                <li className='list-item w-50 p-0 mb-1'><a href='#' className='link'>Support</a></li>
                <li className='list-item w-50 p-0 mb-1'><a href='#' className='link'>Terms</a></li>
            </ul>
        </div>
        <div className='right p-1' style={{flex: '1'}}>
            <h3 className='title fw-500 pb-2'>Contact</h3>
            <div className='contact-item mb-3 d-flex align-items-center g-1 pointer-event'>
                <Room/> 
                <label className='ms-2'>Put the local here</label>
            </div>
            <div className='contact-item mb-3 d-flex align-items-center g-1'>
                <Phone/> 
                <label className='ms-2'>+1 399 425 849</label>
            </div>
            <div className='contact-item mb-3 d-flex align-items-center'>
                <MailOutline/> 
                <label className='ms-2'>YourEmailHere@exemple.com</label>
            </div>
        </div>
    </Container>
  )
}

export default Footer