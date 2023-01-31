import React, { useState } from 'react'
import '../Home/Home.scss';
import { Route, Routes } from 'react-router-dom';
import Banner from './Banner/Banner';
import BlackSection from './BlackSection/BlackSection';


const Home = () => {
  return (

    <div className='middle'>
     {/* <Banner/> */}
     <BlackSection/>
    </div>

  )
}

export default Home