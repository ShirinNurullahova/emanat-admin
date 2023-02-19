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
                                    <Field onChange={handleChange} value={values.azSubtitle} type="text" name="azSubtitle"   required/>
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Mətn (az)</label>
                                    <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription"   required/>
                                </div>
                            </div>
                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq (ru)</label>
                                    <Field onChange={handleChange} value={values.ruSubtitle} type="text" name="ruSubtitle"   required/>
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Mətn (ru)</label>
                                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription"   required/>
                                </div>
                            </div>

                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq (en)</label>
                                    <Field onChange={handleChange} value={values.enSubtitle} type="text" name="enSubtitle"   required/>
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Mətn (en)</label>
                                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription"   required/>
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