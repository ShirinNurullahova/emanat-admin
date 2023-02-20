import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import ElementIn from './ElementIn/ElementIn';
import ModalIntern from './ModalIntern/ModalIntern';
import ColleaguesTitle from './ColleaguesTitle/ColleaguesTitle';
const InternShipColleagues = () => {
  const [id, setId] = useState("63ea01e9a7ec529a1d288b3f");
  const [data, setData] = useState('')
  const [open, setOpen] = useState(null)
  const [initialValues, setInitialValues] = useState(null)
  const initialValuesRaw = {}

  const fetchData = () => {

    axios.get((`${process.env.REACT_APP_URL}/admin/internship/colleagues/`))
      .then(res => {
        setData(res.data[0]?.sections)
        setId(res.data[0]?._id)
      })
      .catch((err) => { });
  }

  useEffect(() => {
    fetchData();
  }, []);
  var body = document.getElementsByTagName('body')[0];

  if (open) {
      body.style.overflow = 'hidden'
  } else {
      body.style.overflow = 'visible'

  }
  return (
    <div className='middle-main'>
      <div className='middle-main-comp'>

        <div className='middle-main-comp-bottom'>
          <p>/ Əməkdaşlarımız</p>
        </div>
      </div> 
      {
        <ColleaguesTitle/>
      }
       <div className='middle-main-btn' onClick={() => setOpen(!open)}>
          <button>Əlavə et</button>
        </div>
     
     
        {
          open &&
          <ModalIntern setOpen={setOpen} id={id} />

        }

      {
        data && data.map((e) => {
          return (
            <ElementIn initialValues={e} id={id} />
          )
        })
      }
    </div>
  )
}

export default InternShipColleagues