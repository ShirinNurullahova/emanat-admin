import React from 'react'
import '../About/About.scss'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutPageMap from './AboutPageMap/AboutPageMap'
import AboutServiceHead from './AboutServiceHead/AboutServiceHead'
import AboutTargetHead from './AboutTargetHead/AboutTargetHead'
const About = () => {
    return (
        <div className='about-main'>

            
         
           <AboutHeader/>
           <AboutPageMap/>
           <AboutServiceHead/>
           <AboutTargetHead/>
        </div>
    )
}

export default About