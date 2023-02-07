import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

const AboutModal = ({ id, setBtn, btn }) => {
    console.log(id)
    const [initialValues, setInitialValues] = useState(null)
    const initialValuesAdd = {
        'azDescription': '',
        'enDescription': '',
        'ruDescription': '',
        'AboutPageServiceSectionIcon': ''
    }

    const onSubmitHandler = async (values) => {
        console.log(values);
        const dataForm = new FormData()

        dataForm.append('azDescription' , values.azDescription)
        dataForm.append('ruDescription' , values.ruDescription)
        dataForm.append('enDescription' , values.enDescription)

        if (btn === "Edit icons") {
            dataForm.append('id', values._id)
        }

        if (values.image) {
            console.log("sdfgsdf")
            dataForm.append('AboutPageServiceSectionIcon', values.image)
        } else {
            console.log("sdgsdrgsdrgsrdgsdrgsrgr")
            dataForm.append('AboutPageServiceSectionIcon', values.icon)
        }

        if (btn === "Add icons") {
            try {
                const response = await axios.post(`${process.env.REACT_APP_URL}/admin/about/services/sections`, dataForm)
                if (response.status == 200) {

                }

            } catch (error) {
                alert("error")
            }
        } else if (btn === "Edit icons") {
            console.log("editttt");
            try {
                const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/about/services/sections`, dataForm)
                if (response.status == 200) {

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
        <>
            {(btn === "Add icons" || initialValues) &&
                <Formik
                    initialValues={btn === "Add icons" ? initialValuesAdd : initialValues}
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
                                    <label>Description (az)</label>
                                    <Field onChange={handleChange} value={values.azDescription} type="text" name="azDescription" />
                                </div>
                                
                                <div className='modal-form-div-el'>
                                    <label>Description (ru)</label>
                                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Description (en)</label>
                                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Image</label>
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

        </>
    )
}

export default AboutModal