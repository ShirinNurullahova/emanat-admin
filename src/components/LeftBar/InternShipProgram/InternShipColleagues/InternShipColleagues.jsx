import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import ElementIn from './ElementIn/ElementIn';
import ModalIntern from './ModalIntern/ModalIntern';
const InternShipColleagues = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState('')
  const [open, setOpen] = useState(null)
  const [initialValues, setInitialValues] = useState(null)
  const initialValuesRaw = {}

  const fetchData = () => {

    axios.get((`${process.env.REACT_APP_URL}/admin/internship/colleagues/`))
      .then(res => {
        console.log(res)
        setData(res.data[0]?.sections)
        setId(res.data[0]?._id)
      })
      .catch((err) => { });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='middle-main'>
      <div className='middle-main-comp'>

        <div className='middle-main-comp-bottom'>
          <p>/ Əməkdaşlarımız</p>
        </div>
      </div>
      <div className='middle-main-btn' onClick={() => setOpen(!open)}>
        <button>Add</button>
      </div>
      {
        data && data.map((e) => {
          return (
            <ElementIn initialValues={e} id={id} />
          )
        })
      }
      {
        open &&
        <ModalIntern setOpen={setOpen} id={id}/>

      }
    </div>
  )
}

export default InternShipColleagues