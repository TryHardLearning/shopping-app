import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import './css/Product.css'

const Product = ({item}) => {
  return (
    <div className='product d-flex justify-content-center align-items-center position-relative'>
        <img src={item.img} className=' img h-75'/>
        <div className='info w-100 h-100 d-flex justify-content-center align-items-center position-absolute'>
            <div className='icon d-flex justify-content-center align-items-center m-1 bg-white'>
                <ShoppingCartOutlined/>
            </div>
            <div className='icon d-flex justify-content-center align-items-center m-1 bg-white'>
                <SearchOutlined/>
            </div>
            <div className='icon d-flex justify-content-center align-items-center m-1 bg-white'>
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product