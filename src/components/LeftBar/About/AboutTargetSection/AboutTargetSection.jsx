import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

const AboutTargetSection = ({ initialValues }) => {

  
    const onSubmitHandler = async (values) => {
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
        <div className='target'>
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
                        <Form className='modal-form' id='modal'>
                            <div className='modal-form-div'>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (az)</label>
                                    <Field onChange={handleChange} value={values.azDescription} type="text" name="azDescription"   required/>
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Kiçik başlıq (az)</label>
                                    <Field onChange={handleChange} value={values.azSubTitle} type="text" name="azSubTitle"   required/>
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (ru)</label>
                                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription"   required/>
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Kiçik başlıq  (ru)</label>
                                    <Field onChange={handleChange} value={values.ruSubTitle} type="text" name="ruSubTitle"   required/>
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (en)</label>
                                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription"   required/>
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Kiçik başlıq  (en)</label>
                                    <Field onChange={handleChange} value={values.enSubTitle} type="text" name="enSubTitle"   required/>
                                </div>
                            </div>
                            <div className='modal-form-btn'>
                                <button type='submit'>Yadda saxla</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            }

        </div>
    )
}

export default AboutTargetSection