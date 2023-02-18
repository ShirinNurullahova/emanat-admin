import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

const AboutModal = ({ id, setBtn, btn }) => {
    const [initialValues, setInitialValues] = useState(null)
    const initialValuesAdd = {
        'azDescription': '',
        'enDescription': '',
        'ruDescription': '',
        'AboutPageServiceSectionIcon': ''
    }

    const onSubmitHandler = async (values) => {
        const dataForm = new FormData()

        dataForm.append('azDescription' , values.azDescription)
        dataForm.append('ruDescription' , values.ruDescription)
        dataForm.append('enDescription' , values.enDescription)

        if (btn === "Redaktə et") {
            dataForm.append('id', values._id)
        }

        if (values.image) {
            dataForm.append('AboutPageServiceSectionIcon', values.image)
        } else {
            dataForm.append('AboutPageServiceSectionIcon', values.icon)
        }

        if (btn === "Əlavə et") {
            try {
                const response = await axios.post(`${process.env.REACT_APP_URL}/admin/about/services/sections`, dataForm)
                if (response.status == 200 || response.status == 201) {
                    document.querySelector('.alertModalApi .text').innerHTML='Əlavə Edildi';
                    document.querySelector('.alertModalApi').classList.add('post')
                    document.querySelector('.alertModalApi').classList.remove('patch')
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
        } else if (btn === "Redaktə et") {
            try {
                const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/about/services/sections`, dataForm)
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

        setBtn(null)
    }

    useEffect(() => {
        if (id) {
            setInitialValues(id);
        }
    }, [id])

    return (
        <div className='service-modal'>
            {(btn === "Əlavə et" || initialValues) &&
                <Formik
                    initialValues={btn === "Redaktə et" ? initialValues : initialValuesAdd}
                    onSubmit={(values) => {
                        onSubmitHandler(values);
                    }}
                >
                    {({
                        values,
                        handleChange,
                        setFieldValue
                    }) => (
                        <Form className='modal-form' >
                            <div className='modal-form-div'>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (az)</label>
                                    <Field onChange={handleChange} value={values.azDescription} type="text" name="azDescription"   required/>
                                </div>
                                
                                <div className='modal-form-div-el'>
                                    <label>Mətn (ru)</label>
                                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription"   required/>
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (en)</label>
                                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription"   required/>
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Şəkil</label>
                                    <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
                                </div>

                            </div>

                            <div className='modal-form-btn'>
                                <button type='submit'>{btn}</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            }

        </div>
    )
}

export default AboutModal