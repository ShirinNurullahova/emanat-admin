import React from 'react'
import InternShipHeader from './InternShipHeader/InternShipHeader'
import '../InternShipProgram/Intern.scss'
import InternShipAbout from './InternShipAbout/InternShipAbout'
import InternShipColleagues from './InternShipColleagues/InternShipColleagues'
const InternShipProgram = () => {
  return (
    <div className='intern'>
        <InternShipHeader/>
        <InternShipAbout/>
        {/* <InternShipColleagues/> */}
    </div>
  )
}

export default InternShipProgram