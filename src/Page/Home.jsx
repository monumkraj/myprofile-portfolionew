import React from 'react'
import Work from '../Work'
import Stripes from '../Components/Stripes'
import Products from '../Components/Products'
import Marques from '../Components/Marques'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Work/>
       <Stripes/>
      <Products/>
      <Marques/>
      <Cards/>
      <Footer/> 
    </div>
  )
}

export default Home
