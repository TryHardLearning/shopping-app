import React from 'react'
import { Navbar, Announcement, Slider, Categories, Products, Newsletter, Footer} from '../components'


//rafce
const Home = () => {
  return (
    <>
        <header className='d-flex'> 
          <Navbar/>
          <Announcement/>
        </header>
        <section className='main'>
            <Slider/>
            <Categories/>
            <Products/>
        </section>
        <footer>
            <Newsletter/>
            <Footer/>
        </footer> 
    </>
  )
}

export default Home;
