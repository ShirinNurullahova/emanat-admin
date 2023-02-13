import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const FaqKategoria = ({ data }) => {
    console.log(data)


    const onSubmitHandler = async (values) => {

        const dataForm = {}
        dataForm.azTitle = values.azTitle
        dataForm.enTitle = values.enTitle
        dataForm.ruTitle = values.ruTitle
        dataForm.id = values._id

        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/faq/main/categories`, dataForm)
            if (response.status == 200) {

            }

        } catch (error) {
            alert("error")
        }
    }
    return (
        <div className='middle-main'>

            {/* {initialValues &&
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

                            </div>
                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq (ru)</label>
                                    <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                                </div>

                            </div>

                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq (en)</label>
                                    <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                                </div>

                            </div>
                            <div className='middle-main-bottom-form-btn'>
                                <button type='submit'>Yadda saxla</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            } */}

            {
                data &&
                data.map((e) => {
                    return(
                        <table style={{ border: '1px solid gray' }}>
                        <tr>
                            <th>{e.azTitle}</th>
                        </tr>

                    </table>
                    )
                   


                })

            }
        </div>
    )
}

export default FaqKategoria