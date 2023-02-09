import React from 'react'
import FaqHeader from './FaqHeader/FaqHeader'
import '../Faq/Faq.scss';
import FaqMain from './FaqMain/FaqMain';

const Faq = () => {
  return (
    <div className='faq'>
        <FaqHeader/>
        <FaqMain/>
    </div>
  )
}

export default Faq