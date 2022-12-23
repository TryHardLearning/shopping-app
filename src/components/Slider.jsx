import React, {useState} from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import {sliderItems} from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f7f7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.65;
    color: #ff00ee;
    border: 1.5px groove #ff00ee;
    z-index: 1000;
`
const Wrapper = styled.div `
  height: 100%;
  display: flex;
  transition: 1s ease;
  transform: translateX(${props=> props.index * -100}vw);
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=> props.bg}; 
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Image = styled.img`
  height: 90%;
  widht: 90%;
  border-radius: 4px 8px;
  object-fit: cover;
  border-right: 2px solid #${props=> props.color};
  border-bottom: 2px solid #${props=> props.color};
  transition: 0.7s ease;
  &:hover{
    transform: scale(1.05);
    
  }
`
const Title =styled.h1 `
  font-size: 70px;
  color: #${props=> props.color};
`
const Description =styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button =styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: 2px solid #${props=> props.color};
  color: #${props=> props.color};
  cursor: pointer;
  transition: 1s ease;
  &:hover{
    color: #fff;
    background-color: #${props=> props.color};    
  }
`
const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) =>{
      if(direction === 'left'){
          setSlideIndex(slideIndex > 0 ? slideIndex -1 : slideIndex + 1 );
      }else{
        setSlideIndex(slideIndex < (sliderItems.length -1) ? slideIndex + 1 : 0 );
      }
    }

    return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper index={slideIndex}>
      {sliderItems.map((item)=>(
        <Slide key={item.id} bg={item.bg}>
          <ImgContainer>
            <Image src={item.img} color={item.color}/>
          </ImgContainer>
          <InfoContainer>
            <Title color={item.color}>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Button color={item.color}>Show Now</Button>
          </InfoContainer>
        </Slide>  
        ))}
      </Wrapper>    
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}
export default Slider
