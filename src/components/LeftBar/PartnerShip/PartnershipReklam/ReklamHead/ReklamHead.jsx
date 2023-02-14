import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';



const ReklamHead = ({ initialValues }) => {

    const onSubmitHandler = async (values) => {
        const dataForm = new FormData()
        dataForm.append('id', values._id)
        dataForm.append('azTitle', values.azTitle)
        dataForm.append('enTitle', values.enTitle)
        dataForm.append('ruTitle', values.ruTitle)

        if (values.image) {
            dataForm.append('MarketingPageReklamHeadImage', values.image)
        } else {
            dataForm.append('MarketingPageReklamHeadImage', values.images[0]?.url)
        }
        if (values.logo1) {
            dataForm.append('MarketingPageReklamHeadIcon1', values.logo1)
        } else {
            dataForm.append('MarketingPageReklamHeadIcon1', values.images[1]?.url)
        }
        if (values.logo2) {
            dataForm.append('MarketingPageReklamHeadIcon2', values.logo2)
        } else {
            dataForm.append('MarketingPageReklamHeadIcon2', values.images[2]?.url)
        }
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/marketing/reklam/head`, dataForm)
            if (response.status == 200) {
            }

        } catch (error) {
            alert("error")
        }
    }


    return (
        <div className='middle-main'>
            <div className='middle-main-comp'>
                <div className='middle-main-comp-p'>
                </div>
                <div className='middle-main-comp-bottom'>
                    <p>/ Reklam</p>
                </div>
            </div>
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
                            setFieldValue
                        }) => (
                            <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (az)</label>
                                        <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle"   required/>
                                    </div>

                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (ru)</label>
                                        <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle"   required/>
                                    </div>

                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (en)</label>
                                        <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle"   required/>
                                    </div>

                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Şəkil</label>
                                    <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Logo1</label>
                                    <Field value={values.filename} onChange={e => setFieldValue("logo1", e.currentTarget.files[0])} type="file" name="filename" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Logo2</label>
                                    <Field value={values.filename} onChange={e => setFieldValue("logo2", e.currentTarget.files[0])} type="file" name="filename" />
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

export default ReklamHead