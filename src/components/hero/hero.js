import React from "react"
import Head from "./head"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {/* <Head  title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' /> */}
          <h1> SEARCH FOR YOUR NEXT HOME...</h1>

          <form className='flex'>
            <div className='box'>
              <span><b>City/Street</b></span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span><b>Property Type</b></span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span><b>Price Range</b></span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4><b>Advance Filter</b></h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero;