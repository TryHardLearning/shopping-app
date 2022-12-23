import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255,255,255,1);
    background: rgba(255,255,255,0.7);
    border-radius: 2px 8px;
    position: relative;
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Info = styled.div`
    opacity: 0;
    widht: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    
    background: rgba(0,0,0,0.1);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px 8px;
    transition: 0.7s ease;
    &:hover{
        opacity: 1;
    }
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        color: #ff00ee;
    }
`
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product