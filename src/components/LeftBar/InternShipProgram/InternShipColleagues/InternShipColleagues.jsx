import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import ElementIn from './ElementIn/ElementIn';

const InternShipColleagues = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState('')
  const [initialValues, setInitialValues] = useState(null)
  const initialValuesRaw = {}

  const fetchData = () => {

    axios.get((`${process.env.REACT_APP_URL}/admin/internship/colleagues/`))
      .then(res => {
        console.log(res.data[0]?.sections[6])
        setData(res.data[0]?.sections[6]?.data)
        setId(res.data[0]?.sections[6]?._id)
      })
      .catch((err) => { });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='middle-main'>

      {
        data && data.map((e) => {
          return (
            <ElementIn initialValues={e} id={id}/>
          )
        })
      }
    </div>
  )
}

export default InternShipColleagues