import React from 'react'
import styled from 'styled-components'
import Product from './Product'

import {popularProducts} from '../data'

const Container =styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #f5fafd;
`
const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) =>(
            <Product key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Products