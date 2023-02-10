import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const VakansiyaTeam = () => {
    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)

    const fetchData = () => {

        axios.get((`${process.env.REACT_APP_URL}/admin/vacation/team`))
            .then(res => {
                setInitialValues(res.data[0])
                setId(res.data[0]?._id)
            })
            .catch((err) => {});
    }

    useEffect(() => {
        fetchData();
    }, []);
    const onSubmitHandler = async (values) => {
        const dataForm = {};
        dataForm.azTitle = values.azTitle;
        dataForm.ruTitle = values.ruTitle;
        dataForm.enTitle = values.enTitle;
        dataForm.azDescription = values.azDescription;
        dataForm.ruDescription = values.ruDescription;
        dataForm.enDescription = values.enDescription;
        dataForm.id = values._id;
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/vacation/team`, dataForm)
            if (response.status == 200) {
                fetchData()
            }

        } catch (error) {
            alert("error")
        }
    }
    return (
        <div>
            <div className='news-main'>
                <div className='news-main-comp'>
                    <div className='news-main-comp-p'>
                        <p>
                            / komanda
                        </p>
                    </div>
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
                            handleSubmit
                        }) => (
                            <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (az)</label>
                                        <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Təsvir (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (ru)</label>
                                        <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Təsvir (ru)</label>
                                        <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                    </div>
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (en)</label>
                                        <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Təsvir (en)</label>
                                        <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
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


        </div>
    )
}

export default VakansiyaTeam