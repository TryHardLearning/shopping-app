import React from 'react'
import styled from 'styled-components'
import { Navbar, Announcement,Products, Newsletter, Footer } from '../components';


const Container = styled.div`

` 
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

` 
const Title = styled.h1`
    margin: 1.25rem;
    font-size: 1.75rem;
`
const Filter = styled.div`
    margin: 1.25rem;
`
const FilterText = styled.span`
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.625rem;
    margin-right: 1.25rem;
`
const Select = styled.select`

`
const Option = styled.option`

`
const ProductList = () => {
  return (

    <>
        <header>
            <Navbar/>
        </header>
        <section className='main'>
            <Container style={{marginTop: '30px'}}>
                <Title>Dresses</Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>F1</FilterText>
                        <Select>
                            <Option disabled selected>Color</Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                            <Option>Green</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>F2</FilterText>
                        <Select>
                            <Option disabled selected>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            <Option>XXL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>F3</FilterText>
                        <Select>
                        <Option disabled selected>Newest</Option>
                            <Option>Price: High to Low</Option>
                            <Option>Price: Low to High</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <Products/>
            </Container>
        </section>
        <footer>
            <Newsletter/>
            <Footer/>
        </footer>
    </>
    )
}

export default ProductList