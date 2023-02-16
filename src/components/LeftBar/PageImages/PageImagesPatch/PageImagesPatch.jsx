import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import './PageImagesPatch.scss'
import axios from 'axios';

const PageImagesPatch = ({ id, setBtn, btn }) => {
   
  const [initialValues, setInitialValues] = useState(null)

  useEffect(() => {
    if (btn) {
      axios.get((`${process.env.REACT_APP_URL}/admin/page-images`))
        .then(res => {
          setInitialValues(res.data[0]);
        })
        .catch((err) => {});

    }
  }, [btn])



  const onSubmitHandler = async (values) => {
    const dataForm = new FormData()
    dataForm.id=values._id;
    if (values.headerImg) {
      dataForm.append('HeaderImage', values.headerImg)
    } else {
      dataForm.append('HeaderImage', values.headerImage)
    }
    if (values.footerImg) {
        dataForm.append('FooterImage', values.footerImg)
      } else {
        dataForm.append('FooterImage', values.footerImage)
      }
      console.log(dataForm);
      console.log(dataForm.get('HeaderImage'));
      console.log(dataForm.get('FooterImage'));
      try {
        const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/page-images`, dataForm)
        if (response.status == 200) {
  
        }
      } catch (error) {
        alert("error")
      }
    setBtn(false)
  }


  return (

    <div className='modal' >
      {initialValues && 
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {({
            values,
            handleSubmit,
            setFieldValue
          }) => (
            <Form className='modal-form' onSubmit={handleSubmit}>
              <div className='modal-form-div'>
                <div className='modal-form-div-el'>
                  <label>Header Image</label>
                  <Field value={values.filename} onChange={e => setFieldValue("headerImg", e.currentTarget.files[0])} type="file" name="headerImg" />
                </div>
                <div className='modal-form-div-el'>
                  <label>Footer Image</label>
                  <Field value={values.filename} onChange={e => setFieldValue("footerImg", e.currentTarget.files[0])} type="file" name="footerImg" />
                </div>
              </div>

              <div className='modal-form-btn'>
                <button type='submit'>Redakte et</button>
              </div>
            </Form>
          )}
        </Formik>
      }
    </div>
  )
}

export default PageImagesPatch
