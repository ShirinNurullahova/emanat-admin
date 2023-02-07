import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const AboutBranchSection = ({ initialValues }) => {




    const onSubmitHandler = async (values) => {
        console.log(values);
        const dataForm = new FormData()
        dataForm.append('id', values._id)
        dataForm.append('azDescription', values.azDescription)
        dataForm.append('enDescription', values.enDescription)
        dataForm.append('ruDescription', values.ruDescription)
        if (values.image) {
            dataForm.append('AboutPageBranchSectionIcon', values.image)
        } else {
            dataForm.append('AboutPageBranchSectionIcon', values.icon)
        }
        console.log(dataForm);
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/about/branch/sections`, dataForm)
            if (response.status == 200) {

            }

        } catch (error) {
            alert("error")
        }
    }




    return (
        <div>
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
                                    <label>Desc (az)</label>
                                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                </div>

                            </div>
                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Desc (ru)</label>
                                    <Field onChange={handleChange} value={values.azDescription} type="text" name="azDescription" />
                                </div>

                            </div>

                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Desc (en)</label>
                                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
                                </div>


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
    )
}

export default AboutBranchSection