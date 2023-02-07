import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

const AboutTargetSection = ({ initialValues }) => {
    console.log({initialValues})
    const [cred, setCred] = useState({
        'azSubTitle' :'',
        'ruSubTitle' :'',
        'enSubTitle' :''
    }
    )
    
    const  handleChange1 = (e) => {
        const value = e.target.value;
        setCred({
            ...cred,
            [e.target.name]: value

        })
    }

    return (
        <div >

            {
                initialValues &&
                <Formik
                    initialValues={initialValues}

                >
                    {({
                        values,
                        handleChange,
                        handleChange1
                    }) => (
                        <Form className='modal-form' >
                            <div className='modal-form-div'>
                                <div className='modal-form-div-el'>
                                    <label>Description (az)</label>
                                    <Field onChange={handleChange} value={values.azDescription} type="text" name="azDescription" />
                                </div>
                                <div >
                                    {values.azSubTitle.map((e) => {
                                        return (
                                            <input defaultValue={e} onChange={handleChange1} name='azSubTitle'/>
                                          
                                        )

                                    })}

                                </div>


                                <div className='modal-form-div-el'>
                                    <label>Description (ru)</label>
                                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                </div>
                                <div >
                                    {values.enSubTitle.map((e) => {
                                        return (
                                            <input defaultValue={e} onChange={handleChange1} name='ruSubTitle'/>
                                        )

                                    })}

                                </div>


                                <div className='modal-form-div-el'>
                                    <label>Description (en)</label>
                                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
                                </div>
                                <div >
                                    {values.ruSubTitle.map((e) => {
                                        return (
                                            <input defaultValue={e} onChange={handleChange1} name='enSubTitle'/>
                                        )

                                    })}

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