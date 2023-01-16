import React from 'react'
import ButtonDarkHover from './ButtonDarkHover'
import './css/CategoryItem.css'


const CategoryItem = ({item}) => {
  return (
    <div className='category-item'>
      <img src={item.img} className=''/>
      <div className='info d-flex align-items-center justify-content-center flex-column'>
        <h1 className='text-white mb-4 fws500'>{item.title}</h1>
        <ButtonDarkHover text="Show Now"/>
      </div>
    </div>
  )
}

export default CategoryItem