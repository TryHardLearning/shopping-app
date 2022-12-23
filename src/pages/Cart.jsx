import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Navbar, Announcement, Newsletter, Footer} from '../components'

const Wrapper = styled.div`
  padding: 20px;

`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`
const TopButton = styled.button`
  padding: 10px;
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
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const TopTexts = styled.div`
 
`
const TopText = styled.span`
  cursor: pointer;
  padding-bottom: 4px;
  border-bottom: 1px solid #ff00ee;
  margin: 0 10px;
  transition: all 0.7s ease;
  &:hover{
    color: #ff00ee;
  }
`
const Info = styled.div`
   flex: 3;
`
const ProductSee = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Image = styled.img`
  width: 200px;
  border-radius: 8px 2px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`
const ProductSize = styled.span``
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
`
const ProductAmount = styled.span`
  font-size: 1.5rem;
  margin: 5px;
`
const ProductPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 200;
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin: 15px 0;
`

const Summary = styled.div`
  flex: 1;
  border: 1.5px solid #eee;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryItem = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=> props.type === 'total' && '500'};
  font-size: ${props=> props.type === 'total' && '1.6rem'};
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
  padding: 10px;
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
const minus = ()=>{
  alert("Menos");
}
const more = ()=> {
  alert("Mais");
}
const Cart = () => {
  return (
    <>
        <header>
            <Navbar/>
            <Announcement/> 
        </header>
        <main>
            <Wrapper>
                <Title>Your Shopping Cart</Title>
                <Top>
                  <TopButton>Continue Shoping</TopButton>
                  <TopTexts>
                      <TopText>Shopping Bag: 2</TopText>
                      <TopText>Your Wishlist: 0</TopText>
                  </TopTexts>
                  <TopButton>Checkout Now</TopButton>
                </Top>
                <Bottom>
                  <Info>
                     <ProductSee>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/564x/a6/51/02/a651026986996bb1b607d4487c5a5336.jpg"/>
                            <Details>
                              <ProductName><b>Product:</b>Thunder Shock Button</ProductName>
                              <ProductID><b>ID:</b>00000001</ProductID>
                              <ProductColor color="#ff00ee"/>
                              <ProductSize><b>Size:</b>XXL</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                              <Add onClick={more}/>
                              <ProductAmount>2</ProductAmount>
                              <Remove onClick={minus}/>
                            </ProductAmountContainer>
                            <ProductPrice>$900</ProductPrice>
                        </PriceDetail>
                     </ProductSee>
                     <Hr/>
                     <ProductSee>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/564x/a6/51/02/a651026986996bb1b607d4487c5a5336.jpg"/>
                            <Details>
                              <ProductName><b>Product:</b>Thunder Shock Button</ProductName>
                              <ProductID><b>ID:</b>00000001</ProductID>
                              <ProductColor color="#ff00ee"/>
                              <ProductSize><b>Size:</b>XXL</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>2</ProductAmount>
                              <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$900</ProductPrice>
                        </PriceDetail>
                     </ProductSee>
                     <Hr/>
                     <ProductSee>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/564x/a6/51/02/a651026986996bb1b607d4487c5a5336.jpg"/>
                            <Details>
                              <ProductName><b>Product:</b>Thunder Shock Button</ProductName>
                              <ProductID><b>ID:</b>00000001</ProductID>
                              <ProductColor color="#ff00ee"/>
                              <ProductSize><b>Size:</b>XXL</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>2</ProductAmount>
                              <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$900</ProductPrice>
                        </PriceDetail>
                     </ProductSee>
                  </Info>
                  <Summary>
                      <SummaryTitle>Order Summary</SummaryTitle>
                      <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 50</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -50</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                      </SummaryItem>
                      <Button>Checkout Now</Button>
                  </Summary>
                  
                </Bottom>
            </Wrapper>      
        </main>
        <footer>
            <Footer/>
        </footer> 
    </>
  )
}

export default Cart
