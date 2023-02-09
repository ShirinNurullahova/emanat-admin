import React from 'react'
import InternShipHeader from './InternShipHeader/InternShipHeader'
import '../InternShipProgram/Intern.scss'
import InternShipAbout from './InternShipAbout/InternShipAbout'
const InternShipProgram = () => {
  return (
    <div className='intern'>
        <InternShipHeader/>
        <InternShipAbout/>
    </div>
  )
}

export default InternShipProgram