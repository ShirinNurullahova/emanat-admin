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
        .catch((err) => { });

    }
  }, [btn])



  const onSubmitHandler = async (values) => {
    const dataForm = new FormData()
    dataForm.id = values._id;
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
    try {
      const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/page-images`, dataForm)
      if (response.status == 200 || response.status == 201) {
        document.querySelector('.alertModalApi .text').innerHTML = 'Redaktə edildi';
        document.querySelector('.alertModalApi').classList.add('patch')
        document.querySelector('.alertModalApi').classList.remove('post')
        document.querySelector('.alertModalApi').classList.remove('delete')
        document.querySelector('.alertModalApi').classList.add('visible')
        document.querySelector('.alertModalApi').classList.remove('hidden')
        setTimeout(() => {
          document.querySelector('.alertModalApi').classList.remove('visible')
          document.querySelector('.alertModalApi').classList.add('hidden')
        }, 1000)
      }
    } catch (error) {
      alert("error")
    }
    setBtn(false)
  }
  const cancelFunction = () => {
    setBtn(false);
  }

  return (

    <div className='modal-pi' >
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
                <div className="modal-form-cancel" onClick={() => cancelFunction()}>
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <path fill="white" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                  </svg>
                </div>
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
                <button type='submit'>Redaktə et</button>
              </div>
            </Form>
          )}
        </Formik>
      }
    </div>
  )
}

export default PageImagesPatch
