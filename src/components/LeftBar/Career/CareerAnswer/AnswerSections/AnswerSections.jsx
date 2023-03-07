import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const AnswerSections = ({initialValues}) => {
    const onSubmitHandler = async (values) => {
        const dataForm ={}
        dataForm.id= values._id
        dataForm.azDescription=values.azDescription
        dataForm.enDescription=values.enDescription
        dataForm.ruDescription=values.ruDescription
        dataForm.azSubTitle=values.azSubTitle
        dataForm.enSubTitle=values.enSubTitle
        dataForm.ruSubTitle=values.ruSubTitle
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/manager/career/answers/sections`, dataForm)
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML='Redaktə edildi';
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
    <div className='middle-main'>
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
                            handleSubmit
                        }) => (
                            <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Mətn (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Kiçik başlıq (az)</label>
                                        <Field onChange={handleChange} value={values.azSubTitle} type="text" placeholder='' name="azSubTitle"   required/>
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Mətn (ru)</label>
                                        <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Kiçik başlıq (ru)</label>
                                        <Field onChange={handleChange} value={values.ruSubTitle} type="text" placeholder='' name="ruSubTitle"   required/>
                                    </div>
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Mətn (en)</label>
                                        <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Kiçik başlıq (en)</label>
                                        <Field onChange={handleChange} value={values.enSubTitle} type="text" placeholder='' name="enSubTitle"   required/>
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

export default AnswerSections