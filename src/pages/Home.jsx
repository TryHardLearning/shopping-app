import React from 'react'
import { Navbar, Announcement, Slider, Categories, Products, Newsletter, Footer} from '../components'


//rafce
const Home = () => {
  return (
    <>
        <header>
            <Announcement/>
            <Navbar/> 
        </header>
        <main>
            <Slider/>
            <Categories/>
            <Products/>
        </main>
        <footer>
            <Newsletter/>
            <Footer/>
        </footer> 
    </>
  )
}

export default Home;
