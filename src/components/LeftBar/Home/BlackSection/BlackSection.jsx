import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormRow from './Form/FormRow';

const BlackSection = () => {
  const [initialValues1, setInitialValues1] = useState(null)
  const [initialValues2, setInitialValues2] = useState(null)
  const [initialValues3, setInitialValues3] = useState(null)

  const fetchData = () => {
      axios.get((`${process.env.REACT_APP_URL}/admin/main/information`))
          .then(res => {
              setInitialValues1(res.data[0])
              setInitialValues2(res.data[1])
              setInitialValues3(res.data[2])
          })
          .catch((err) => console.log(err));
  }

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <div className='middle-main'>
      <div className='middle-main-comp'>
        <div className='middle-main-comp-p'>
          <p>
            Ana Səhifə
          </p>
        </div>
        <div className='middle-main-comp-bottom'>
          <p><span>Claradix</span> / BlackSection</p>
        </div>
      </div>
      <div className='middle-main-bottom'>
             <FormRow initialValues={initialValues1}/>
             <FormRow  initialValues={initialValues2}/>
             <FormRow  initialValues={initialValues3}/>
      </div>

    </div>
  )
}

export default BlackSection
