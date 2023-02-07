import React from 'react'
import '../About/About.scss'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutPageMap from './AboutPageMap/AboutPageMap'
import AboutServiceHead from './AboutServiceHead/AboutServiceHead'
const About = () => {
    return (
        <div className='about-main'>

            
         
           <AboutHeader/>
           <AboutPageMap/>
           <AboutServiceHead/>
        </div>
    )
}

export default About