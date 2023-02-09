import React from 'react'
import '../Cooperative/Cooperative.scss'
import CooperativePageHeader from './CooperativePageHeader/CooperativePageHeader'
import CooperativePageSection from './CooperativePageSection/CooperativePageSection'
const Cooperative = () => {
  return (
    <div className='cooperative-m'>
       <CooperativePageHeader/>
       <CooperativePageSection/>
    </div>
  )
}

export default Cooperative