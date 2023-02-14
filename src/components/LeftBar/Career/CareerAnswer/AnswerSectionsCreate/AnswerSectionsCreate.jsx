import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

const AnswerSectionsCreate = ({ id,initialValues }) => {
    const initialValuesAdd = {
        'azDescription': '',
        'enDescription': '',
        'ruDescription': '',
        'azSubTitle': '',
        'enSubTitle': '',
        'ruSubTitle': ''
    }

    const onSubmitHandler = async (values) => {
        const dataForm = {};
        dataForm.id=id;
        dataForm.azDescription=values.azDescription
        dataForm.ruDescription=values.ruDescription
        dataForm.enDescription=values.enDescription
        dataForm.azSubTitle=values.azSubTitle
        dataForm.ruSubTitle=values.ruSubTitle
        dataForm.enSubTitle=values.enSubTitle
            try {
                const response = await axios.post(`${process.env.REACT_APP_URL}/admin/career/answers/sections`, dataForm)
                if (response.status == 200) {

                }

            } catch (error) {
                alert("error")
            }

    }
    return (
        <>
          {initialValues &&
                    <Formik
                        initialValues={initialValuesAdd}
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
                                        <label>Id</label>
                                        <Field onChange={handleChange} value={id} type="text" placeholder='' name="id"   required/>
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'> 
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Mətn (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Kiçik başlıq (az)</label>
                                        <Field onChange={handleChange} value={values.azSubTitle} type="text" name="azSubTitle"   required/>
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Mətn (ru)</label>
                                        <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Kiçik başlıq (ru)</label>
                                        <Field onChange={handleChange} value={values.ruSubTitle} type="text" name="ruSubTitle"   required/>
                                    </div>
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                 <div className='middle-main-bottom-form-div-el'>
                                        <label>Mətn (en)</label>
                                        <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription"   required/>
                                    </div>
                                <div className='middle-main-bottom-form-div-el'>
                                        <label>Kiçik başlıq (en)</label>
                                        <Field onChange={handleChange} value={values.enSubTitle} type="text" name="enSubTitle"   required/>
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-btn'>
                                    <button type='submit'>Əlavə et</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                }

        </>
    )
}

export default AnswerSectionsCreate