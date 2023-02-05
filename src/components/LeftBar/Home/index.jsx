import React, { useState } from 'react'
import '../Home/Home.scss';
import { Route, Routes } from 'react-router-dom';
import Banner from './Banner/Banner';
import BlackSection from './BlackSection/BlackSection';
import PayPoint from './PayPoint/PayPoint';
import JoinUs from './JoinUs/JoinUs';
import Social from './Social/Social';
import Emekdasliq from './Emekdasliq/Emekdasliq';
import ServiceHead from './ServiceHead/ServiceHead'

const Home = () => {
  return (

    <div className='middle'>
     <Banner/>
     <BlackSection/>
     <PayPoint/>
     <JoinUs/>
     <Social/>
     <Emekdasliq/>
      <ServiceHead/>
    </div>

  )
}

export default Home