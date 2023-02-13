import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';



const UniSection = ({ initialValues, }) => {

    const onSubmitHandler = async (values) => {
        const dataForm = new FormData()
        dataForm.append('id', values._id)
        dataForm.append('azSubtitle', values.azSubtitle)
        dataForm.append('enSubtitle', values.enSubtitle)
        dataForm.append('ruSubtitle', values.ruSubtitle)
        dataForm.append('azDescription', values.azDescription)
        dataForm.append('enDescription', values.enDescription)
        dataForm.append('ruDescription', values.ruDescription)
        if (values.image) {
            dataForm.append('UniPageImage', values.image)
        } else {
            dataForm.append('UniPageImage', values.icon)
        }

        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/uniPage/sections`, dataForm)
            if (response.status == 200) {

            }

        } catch (error) {
            alert("error")
        }
    }




    return (
        <div className='middle-main'>


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
                        setFieldValue
                    }) => (
                        <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq (az)</label>
                                    <Field onChange={handleChange} value={values.azSubtitle} type="text" name="azSubtitle" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Mətn (az)</label>
                                    <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription" />
                                </div>
                            </div>
                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq (ru)</label>
                                    <Field onChange={handleChange} value={values.ruSubtitle} type="text" name="ruSubtitle" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Mətn (ru)</label>
                                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                </div>
                            </div>

                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq (en)</label>
                                    <Field onChange={handleChange} value={values.enSubtitle} type="text" name="enSubtitle" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Mətn (en)</label>
                                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
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
    )
}

export default UniSection