import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';



const AboutHeader = () => {
    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)
    const initialValuesRaw = {}

    const fetchData = () => {
            
        axios.get((`${process.env.REACT_APP_URL}/admin/about/header`))
            .then(res => {
                console.log(res)
                initialValuesRaw.azTitle = res.data[0]?.azTitle;
                initialValuesRaw.azDescription = res.data[0]?.azDescription;
                initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
                initialValuesRaw.ruDescription = res.data[0]?.ruDescription;
                initialValuesRaw.enTitle = res.data[0]?.enTitle;
                initialValuesRaw.enDescription = res.data[0]?.enDescription;
                initialValuesRaw.AboutPageHeaderImage = res.data[0]?.images[0]?.url;
                setInitialValues(initialValuesRaw)
                setId(res.data[0]?._id)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onSubmitHandler = async (values) => {
        console.log(values);
        const dataForm = new FormData()
        dataForm.append('id', id)
        dataForm.append('azTitle', values.azTitle)
        dataForm.append('enTitle', values.enTitle)
        dataForm.append('ruTitle', values.ruTitle)
        dataForm.append('azDescription', values.azDescription)
        dataForm.append('enDescription', values.enDescription)
        dataForm.append('ruDescription', values.ruDescription)
        if (values.image) {
            dataForm.append('AboutPageHeaderImage', values.image)
        } else {
            dataForm.append('AboutPageHeaderImage', values.AboutPageHeaderImage)
        }
        console.log(dataForm);
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/about/header`, dataForm)
            if (response.status == 200) {
                fetchData()
            }

        } catch (error) {
            alert("error")
        }
    }


    return (
        <div className='middle-main'>
            <div className='middle-main-comp'>
                <div className='middle-main-comp-p'>
                    <p>
                        About
                    </p>
                </div>
                <div className='middle-main-comp-bottom'>
                    <p>/ Banner</p>
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
                                        <label>Title (az)</label>
                                        <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Title (ru)</label>
                                        <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (ru)</label>
                                        <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                    </div>
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Title (en)</label>
                                        <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (en)</label>
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

        </div>
    )
}

export default AboutHeader