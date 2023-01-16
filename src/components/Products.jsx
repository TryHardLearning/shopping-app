import React from 'react'
import { Container } from 'react-bootstrap'
import Product from './Product'

import {popularProducts} from '../data'

const Products = () => {
  return (
    <Container fluid className='products p-2 d-flex justify-content-between flex-wrap' style={{background: '#f5fafd'}}>
        {popularProducts.map((item) =>(
            <Product key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Products