import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline} from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
`
const Logo = styled.h1`
    font-size: 2.25rem;
    font-weight: 500;
`
const Description = styled.p`
    margin: 1.25rem 0;
`
const SocialContainer = styled.div`
    display: flex;
    gap: 0.95rem;
`
const SocialIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: #fff;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 1.25rem;
`
const  Title = styled.h3`
    margin-bottom: 1.875rem;
    font-weight: 500;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 15px;
    cursor: pointer;
`
const Right = styled.div`
    flex: 1; 
    padding: 1.25rem;
`
const ContactItem = styled.div`
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 10px; 
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>WayCycles</Logo>
            <Description>For all the cycles of your life, from momentary to continuous cycles, the waycycles will be with you</Description>
            <SocialContainer>
                <SocialIcon color='00eeff'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='fe3922'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='37ffae'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='37fe47'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Usefull Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Who we are?</ListItem>
                <ListItem>Support</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room/> Put the local here
            </ContactItem>
            <ContactItem>
                <Phone/> +1 399 425 849
            </ContactItem>
            <ContactItem>
                <MailOutline/> YourEmailHere@exemple.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer