import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

const AboutTargetSection = ({ initialValues }) => {
    console.log({initialValues})

  
    const onSubmitHandler = async (values) => {
        console.log(values);
        const dataForm = {}
         dataForm.id= values._id
        if (typeof values.ruSubTitle === 'string') {
            dataForm.ruSubTitle= values.ruSubTitle.split(',');
        }else{
            dataForm.ruSubTitle= values.ruSubTitle
        }

        if (typeof values.enSubTitle === 'string') {
            dataForm.enSubTitle= values.enSubTitle.split(',');  
        } else{
            dataForm.enSubTitle= values.enSubTitle
        } 

        if (typeof values.azSubTitle === 'string') {
              dataForm.azSubTitle= values.azSubTitle.split(',');
        }else{
            dataForm.azSubTitle= values.azSubTitle
        }
       
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/about/target/sections`, dataForm)
            if (response.status == 200) {
                
            }

        } catch (error) {
            alert("error")
        }
      
    }

    return (
        <div >
            {
                initialValues &&
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        onSubmitHandler(values);
                    }}
                >
                    {({
                        values,
                        handleChange
                    }) => (
                        <Form className='modal-form' >
                            <div className='modal-form-div'>
                                <div className='modal-form-div-el'>
                                    <label>Description (az)</label>
                                    <Field onChange={handleChange} value={values.azDescription} type="text" name="azDescription" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>SubTitle (az)</label>
                                    <Field onChange={handleChange} value={values.azSubTitle} type="text" name="azSubTitle" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Description (ru)</label>
                                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>SubTitle (ru)</label>
                                    <Field onChange={handleChange} value={values.ruSubTitle} type="text" name="ruSubTitle" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Description (en)</label>
                                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>SubTitle (en)</label>
                                    <Field onChange={handleChange} value={values.enSubTitle} type="text" name="enSubTitle" />
                                </div>
                            </div>
                            <div className='modal-form-btn'>
                                <button type='submit'>Save</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            }

        </div>
    )
}

export default AboutTargetSection