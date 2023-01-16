import React from 'react'
import {categories} from '../data'
import CategoryItem from './CategoryItem'
import { Container, Row } from 'react-bootstrap'


const Categories = () => {
  return (
    <Container fluid className='Categories d-flex justify-content-space-between ps-4 pe-4'> 
      {categories.map((item)=>(
         <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
  )
}
export default Categories
