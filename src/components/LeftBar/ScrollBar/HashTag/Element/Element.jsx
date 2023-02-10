import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';


const Element = ({ e }) => {
    const [initialValues, setInitialValues] = useState(null);

    const initialValuesRaw = {
        "azHashtag": '',
        "ruHashtag": "",
        "enHashtag": "",
        "page": '',
        "id": ''
    }

    useEffect(() => {
        initialValuesRaw.page = e.page
        initialValuesRaw.id = e._id
        for (let i = 0; i < e.azHashtag.length; i++) {
            if (i === e.azHashtag.length - 1) {
                initialValuesRaw.azHashtag += e.azHashtag[i]
            } else {
                initialValuesRaw.azHashtag += e.azHashtag[i] + ", "
            }
        }
        for (let i = 0; i < e.enHashtag.length; i++) {
            if (i === e.enHashtag.length - 1) {
                initialValuesRaw.enHashtag += e.enHashtag[i]
            } else {
                initialValuesRaw.enHashtag += e.enHashtag[i] + ", "
            }
        }
        for (let i = 0; i < e.ruHashtag.length; i++) {
            if (i === e.ruHashtag.length - 1) {
                initialValuesRaw.ruHashtag += e.ruHashtag[i]
            } else {
                initialValuesRaw.ruHashtag += e.ruHashtag[i] + ", "
            }
        }
        // for(const el of e.azHashtag) {
        //     initialValuesRaw.azHashtag += el + ", "
        // }
        setInitialValues(initialValuesRaw);
    }, [e])

    const onSubmitHandler = async (values) => {
        const dataForm = {};
        dataForm.azHashtag = values.azHashtag.split(', ');
        dataForm.ruHashtag = values.ruHashtag.split(', ');
        dataForm.enHashtag = values.enHashtag.split(', ');
        dataForm.page = values.page;
        dataForm.id = values.id;
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/tag/hashTag`, dataForm)
            if (response.status == 200) {
            }

        } catch (error) {
            alert("error")
        }

    }

    return (

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
                    }) => (
                        <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Hashtag (az)</label>
                                    <Field onChange={handleChange} value={values.azHashtag} type="text" name="azHashtag" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Hashtag (en)</label>
                                    <Field onChange={handleChange} value={values.enHashtag} type="text" placeholder='' name="enHashtag" />
                                </div>

                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Hashtag(ru)</label>
                                    <Field onChange={handleChange} value={values.ruHashtag} type="text" placeholder='' name="ruHashtag" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Səhifə</label>
                                    <Field onChange={handleChange} value={values.page} type="text" placeholder='' name="page" />
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
    )
}

export default Element