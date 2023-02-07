import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const WorkWithSections = ({initialValues}) => {
    const onSubmitHandler = async (values) => {
        console.log(values);
        const dataForm = {}
        dataForm.id= values._id
        dataForm.azDescription= values.azDescription
        dataForm.enDescription= values.enDescription
        dataForm.ruDescription= values.ruDescription
        // console.log( dataForm.get("azSubTitle"));
        if (values.image) {
            dataForm.append('MarketingPageWorkWithSectionIcon', values.image)
        } else {
            dataForm.append('MarketingPageWorkWithSectionIcon', values.images[0]?.url)
        }
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/marketing/work-with/sections`, dataForm)
            if (response.status == 200) {
            
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
                            setFieldValue
                        }) => (
                            <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (ru)</label>
                                        <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                    </div>
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (en)</label>
                                        <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                   <div className='middle-main-bottom-form-div-el'>
                                        <label>Image</label>
                                        <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-btn'>
                                    <button type='submit'>Save</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                }

            </div>
    </div>
  )
}

export default WorkWithSections