import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined , FavoriteBorderOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core'

const Container = styled.div`
  height: 60px;
  z-index: 10000;
  @media only screen and (max-width: 380px){
      
  }
`
const Wrapper = styled.div`
  height: 100%;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 380px){

  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const HeartBit = styled.span`
  font-size: 14px;
  color: #000;
  cursor: pointer;
  transition: all 1s ease;
  &:hover{
    color: #ff00ee;
  }
`
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  margin: 25px;
  @media only screen and (max-width: 420px){
    margin: auto 10px;
    
  }
`
const Input = styled.input`
  border: none;
  padding: 4px;

`
const Logo = styled.a`
  font-weight: bold;
  text-align: center;
  font-size: 32px;
  text-decoration: none;
  color: #000;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
const Navebar = () => {
  return (
    <Container>
      <Wrapper>
          <Left>
              <HeartBit>
                <FavoriteBorderOutlined/>
              </HeartBit>
              <SearchContainer>
                <Input/>
                <Search style={{color: "#444", fontSize: 16}}/>
              </SearchContainer>
          </Left>
          <Center>
              <Logo href='/'>WayCycles</Logo>
          </Center>
          <Right>
              <MenuItem>Register</MenuItem>
              <MenuItem>Sing In</MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color='primary'>
                  <ShoppingCartOutlined/>
                </Badge>
              </MenuItem>
              
          </Right>
      </Wrapper>
    </Container>
  )
}

export default Navebar
