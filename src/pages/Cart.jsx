import React from 'react'
import styled from 'styled-components'
import { Navbar, Footer, ButtonStyled, ButtonLarge, ProductCart} from '../components'
/*
const Summary = styled.div`
  flex: 1;
  border: 1.5px solid #eee;
  border-radius: 10px;

  height: 50vh;
`
const SummaryItem = styled.div`
  margin: 25px 0;
  font-weight: ${props=> props.type === 'total' && '500'};
  font-size: ${props=> props.type === 'total' && '1.6rem'};
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
*/
const Cart = () => {
  return (
    <>
        <header>
            <Navbar/>
        </header>
        <section className='main Cart '>
            <div className='wrapper p-4' >
                <h2 className='title fw-light text-center' >Your Shopping Cart</h2>
                <div className='top d-flex justify-content-between align-items-center mb-5' >
                  <ButtonStyled text='Continue Shoping'/>
                  <div className='top-texts'>
                      <span className='top-text me-1'>Shopping Bag: <label>2</label></span>
                      <span className='top-text ms-1'>Your Wishlist: <label>0</label></span>
                  </div>
                  <ButtonStyled text='Checkout Now'/>
                </div>
                <div className='botton d-flex justify-content-between'>
                  <div className='info'>
                     <ProductCart/>
                  </div>
                  <div className='summary p-2' >
                      <h1 className='title' SummaryTitle>Order Summary</h1>
                      <div className='summary-item d-flex justify-content-between' >
                        <span className='summaryItemText fw-light'>Subtotal</span>
                        <span className='summaryItemPrice' >$ 80</span>
                      </div>
                      <div className='summary-item d-flex justify-content-between' >
                        <span className='summaryItemText fw-light'>Estimated Shipping</span>
                        <span className='summaryItemPrice'>$ 50</span>
                      </div>
                      <div className='summary-item d-flex justify-content-between' >
                        <span className='summaryItemText fw-light'>Shipping Discount</span>
                        <span className='summaryItemPrice'>$ -50</span>
                      </div>
                      <div className='summary-item d-flex justify-content-between'  type="total">
                        <span className='summaryItemText fw-500 total'>Total</span>
                        <span className='summaryItemPrice total'>$ 80</span>
                      </div>
                      <ButtonLarge text='Checkout Now'/>
                  </div>
                </div>
            </div>      
        </section>
        <footer>
            <Footer/>
        </footer> 
    </>
  )
}

export default Cart
