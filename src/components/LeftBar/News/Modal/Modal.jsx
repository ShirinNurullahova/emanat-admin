import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import '../Modal/Modal.scss'
import axios from 'axios';

const Modal = ({ id, setBtn, btn }) => {

  const [initialValues, setInitialValues] = useState(null)
  const initialValuesAdd = {
    azDescription: '',
    azTitle: '',
    enDescription: '',
    enTitle: '',
    NewsImage: '',
    page: '',
    ruDescription: '',
    ruTitle: ''
  }

  useEffect(() => {
    if (btn && id) {
      axios.get((`${process.env.REACT_APP_URL}/admin/news/${id}`))
        .then(res => {
          setInitialValues(res.data.message);
        })
        .catch((err) => {});

    }
  }, [id])



  const onSubmitHandler = async (values) => {
    const dataForm = new FormData()
    dataForm.append('azTitle', values.azTitle)
    dataForm.append('enTitle', values.enTitle)
    dataForm.append('ruTitle', values.ruTitle)
    dataForm.append('azDescription', values.azDescription)
    dataForm.append('enDescription', values.enDescription)
    dataForm.append('ruDescription', values.ruDescription)
    dataForm.append('page', values.page)
    if (btn === "Redaktə et") {
      dataForm.append('id', values._id)
    }
    if (values.image) {
      dataForm.append('NewsImage', values.image)
    } else {
      dataForm.append('NewsImage', values.newsImage)
    }

    if (btn === "Əlavə et") {
      try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/admin/news`, dataForm)
        if (response.status == 200) {
  
        }
  
      } catch (error) {
        alert("error")
      }
    } else if (btn === "Redaktə et") {
      try {
        const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/news`, dataForm)
        if (response.status == 200) {
  
        }
  
      } catch (error) {
        alert("error")
      }
    }
    setBtn(null)
  }


  return (

    <div className='modal' >
      {(btn === "Əlavə et" || initialValues) && 
        <Formik
          initialValues={btn === "Redaktə et" ? initialValuesAdd : initialValues}
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            setFieldValue
          }) => (
            <Form className='modal-form' onSubmit={handleSubmit}>
              <div className='modal-form-div'>
                <div className='modal-form-div-el'>
                  <label>Başlıq (az)</label>
                  <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" />
                </div>
                <div className='modal-form-div-el'>
                  <label>Mətn (az)</label>
                  <Field value={values.azDescription} type="text" placeholder='' name="azDescription" />
                </div>
                <div className='modal-form-div-el'>
                  <label>Başlıq (ru)</label>
                  <Field value={values.ruTitle} type="text" name="ruTitle" />
                </div>
                <div className='modal-form-div-el'>
                  <label>Mətn (ru)</label>
                  <Field value={values.ruDescription} type="text" placeholder='' name="ruDescription" />
                </div>
                <div className='modal-form-div-el'>
                  <label>Başlıq (en)</label>
                  <Field value={values.enTitle} type="text" name="enTitle" />
                </div>
                <div className='modal-form-div-el'>
                  <label>Mətn (en)</label>
                  <Field value={values.enDescription} type="text" placeholder='' name="enDescription" />
                </div>
                <div className='modal-form-div-el'>
                  <label>Səhifə</label>
                  <Field value={values.page} type="text" placeholder='' name="page" />
                </div>
                <div className='modal-form-div-el'>
                  <label>Şəkil</label>
                  <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
                </div>
              </div>

              <div className='modal-form-btn'>
                <button type='submit'>{btn}</button>
              </div>
            </Form>
          )}
        </Formik>
      }
    </div>
  )
}

export default Modal
