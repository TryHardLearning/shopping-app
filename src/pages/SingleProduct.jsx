import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Navbar, Announcement, Footer, Newsletter } from '../components'

const Container = styled.div`
    box-sizing: border-box;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
const ImgContainer = styled.div`
    flex: 1;
    height: 90vh;
`
const Wrapper = styled.div`
    height: 100vh;
    max-width: 100vw;
    padding: 3.125rem;
    display: flex; 
`
const InfoContainer = styled.div`
    flex: 1;
    height: 90vh;
    padding: 0 3.125rem;
`
const Title = styled.h1`
    font-weight: 200;
    margin: 1.425rem 0 2.45rem 0;
`
const Description = styled.p`
    margin: 1.25rem 0 2.45rem 0;
`
const Price = styled.span`
    
    font-weight: 100;
    font-size: 2.5rem;
`
const FilterContainer = styled.div`
    margin: 2.25rem 0; 
    width: 50%; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.75rem;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 1.25rem;
    font-weight: 200;
    margin-right: 1rem;

`
const FilterColor = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.div`
    width: 2.45rem;
    height: 1.85rem;
    font-size: 0.95rem;
    border-radius: 2px;
    border: 1px solid #000;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    cursor: pointer;
    transition: all 1s ease;
    &:hover{
        border: 1px solid #ff00ee;
        color: #ff00ee;
    }
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

`
const Amount = styled.span`
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 2px 5px;
    border: 1px solid #000;
    color: #ff00ee;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 0.75rem;
    border: 2px solid #ff00ee;
    color: #ff00ee;
    background-color: transparent;
    cursor: pointer;
    transition: all 1s ease;
    font-weight: 500; 
    &:hover{
        color: #fff;
        background-color: #ff00ee;
    }
`
const SingleProduct = () => {
  return (
    <>
        <header>
            <Navbar/>
            <Announcement/>
        </header>
        <main>
            <Container>
                <Wrapper>
                    <ImgContainer>
                        <Img src="https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Pruduct Test System</Title>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta doloribus exercitationem voluptates? Vel, ad! Lorem ipsum dolor sit amet.</Description>
                        <Price>$999</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color:</FilterTitle>
                                <FilterColor color="#ff00ee"></FilterColor>
                                <FilterColor color="#0e0e0e"></FilterColor>
                                <FilterColor color="#eeff00"></FilterColor>
                            </Filter>
                            <Filter>
                                <FilterTitle>Size:</FilterTitle>
                                <FilterSize>XS</FilterSize>
                                <FilterSize>S</FilterSize>
                                <FilterSize>M</FilterSize>
                                <FilterSize>L</FilterSize>
                                <FilterSize>XL</FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove/>
                                <Amount>1</Amount>
                                <Add/>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            </Container>
        </main>
        <footer>
            <Newsletter/>
            <Footer/>
        </footer>
    </>
  )
}

export default SingleProduct