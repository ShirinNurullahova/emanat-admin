import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const ElementIn = ({ initialValues }) => {
    console.log(initialValues)
  
    return (
        <div>
            <div className='middle-main'>
                <div className='middle-main-comp'>

                    <div className='middle-main-comp-bottom'>
                        <p>/ Əməkdaşlarımız</p>
                    </div>
                </div>
                <div className='middle-main-bottom'>
                    {initialValues &&
                        <Formik
                            initialValues={initialValues}
                            // onSubmit={(values) => {
                            //     onSubmitHandler(values);
                            // }}
                        >
                            {({
                                values,
                                handleChange,
                                handleSubmit,
                                setFieldValue
                            }) => (
                                <Form className='middle-main-bottom-form'>
                                    <div className='middle-main-bottom-form-div'>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Başlıq (az)</label>
                                            <Field onChange={handleChange} value={values.azKey} type="text" name="azKey" />
                                        </div>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Mətn (az)</label>
                                            <Field onChange={handleChange} value={values.azValue} type="text" placeholder='' name="azValue" />
                                        </div>
                                    </div>
                                    <div className='middle-main-bottom-form-div'>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Başlıq (ru)</label>
                                            <Field onChange={handleChange} value={values.ruKey} type="text" name="ruKey" />
                                        </div>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Mətn (ru)</label>
                                            <Field onChange={handleChange} value={values.ruValue} type="text" name="ruValue" />
                                        </div>
                                    </div>

                                    <div className='middle-main-bottom-form-div'>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Başlıq (en)</label>
                                            <Field onChange={handleChange} value={values.enKey} type="text" name="enKey" />
                                        </div>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Mətn (en)</label>
                                            <Field onChange={handleChange} value={values.enValue} type="text" name="enValue" />
                                        </div>

                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Şəkil</label>
                                            <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
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
        </div>
    )
}

export default ElementIn