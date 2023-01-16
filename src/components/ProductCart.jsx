import React from 'react'
import { Add, Remove } from '@material-ui/icons'
import './css/ProductCart.css'

const minus = ()=>{
    alert("Menos");
}
  const more = ()=> {
    alert("Mais");
}

const ProductCart = () => {
    return (
        <>
            <div class='productSee'>
                <div className='product-detail d-flex'>
                    <img className='img' src="https://i.pinimg.com/564x/a6/51/02/a651026986996bb1b607d4487c5a5336.jpg" />
                    <div className='details p-2 d-flex justify-content-around flex-column'>
                        <span className='product-name' ><b>Product:</b>Thunder Shock Button</span>
                        <span className='Product-id'><b>ID:</b>00000001</span>
                        <div className='product-color' style={{ backgroundColor: '#ff00ee' }}></div>
                        <span className='product-size'><b>Size:</b>XXL</span>
                    </div>
                </div>
                <div className='price-detail d-flex justify-content-center align-items-center flex-column'>
                    <div className='productAmountContainer mb-2 d-flex align-items-center' >
                        <Add onClick={more} />
                        <span className='product-amount' ProductAmount>2</span>
                        <Remove onClick={minus} />
                    </div>
                    <span className='product-price'>$900</span>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default ProductCart