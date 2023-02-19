import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const ServiceSections = ({initialValues}) => {
    const onSubmitHandler = async (values) => {
        const dataForm = {}
        dataForm.id= values._id
        dataForm.azDescription= values.azDescription
        dataForm.enDescription= values.enDescription
        dataForm.ruDescription= values.ruDescription
        dataForm.azSubTitle= values.azSubTitle
        dataForm.enSubTitle= values.enSubTitle
        dataForm.ruSubTitle=values.ruSubTitle
        
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/marketing/service/sections`, dataForm)
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML='Redaktə Edildi';
                document.querySelector('.alertModalApi').classList.add('patch')
                document.querySelector('.alertModalApi').classList.remove('post')
                document.querySelector('.alertModalApi').classList.remove('delete')
                document.querySelector('.alertModalApi').classList.add('visible')
                document.querySelector('.alertModalApi').classList.remove('hidden')
              setTimeout(()=>{
                document.querySelector('.alertModalApi').classList.remove('visible')
                document.querySelector('.alertModalApi').classList.add('hidden')
             },1000)
            }

        } catch (error) {
            alert("error")
        }
    }



  return (
    <div>
         <div className='middle-main-bottom'>
                {initialValues &&
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            onSubmitHandler(values);
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                        }) => (
                            <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Title (az)</label>
                                        <Field onChange={handleChange} value={values.azSubTitle} type="text" name="azSubTitle"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription"   required/>
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Title (ru)</label>
                                        <Field onChange={handleChange} value={values.ruSubTitle} type="text" name="ruSubTitle"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (ru)</label>
                                        <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription"   required/>
                                    </div>
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Title (en)</label>
                                        <Field onChange={handleChange} value={values.enSubTitle} type="text" name="enSubTitle"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (en)</label>
                                        <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription"   required/>
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-btn'>
                                    <button type='submit'>Yadda saxla</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                }

            </div>
    </div>
  )
}

export default ServiceSections