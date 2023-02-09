import React from 'react'
import '../Career/Career.scss'
import CareerExperience from './CareeerExperience/CareeerExperience'
import CareerAnswer from './CareerAnswer/CareerAnswer'
import CareerFuture from './CareerFuture/CareerFuture'
import CareerHeader from './CareerHeader/CareerHeader'
import CareerOurvalues from './CareerOurvalues/CareerOurvalues'
import CareerWhyEmanat from './CareerWhyEmanat/CareerWhyEmanat'
const Career = () => {
    return (
        <div className='career-main'>
        <CareerHeader/>
        <CareerOurvalues/>
        <CareerWhyEmanat/>
        <CareerExperience/>
        <CareerFuture/>
        <CareerAnswer/>
        </div>
    )
}

export default Career