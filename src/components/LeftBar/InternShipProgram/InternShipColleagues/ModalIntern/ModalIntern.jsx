import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const ModalIntern = ({ setOpen }) => {

    const [initialValues, setInitialValues] = useState({
        "azKey": "",
        "azValue": "",
        "enKey": "",
        "enValue": "",
        "ruKey": "",
        "ruValue": ""
      },
    );
    const [idValue, setIdValue] = useState(0)


    const onSubmitHandler = async (values) => {
        console.log(values);
        const dataForm = {};

        // try {
        //     const response = await axios.post(`${process.env.REACT_APP_URL}/tag/hashTag`, dataForm)
        //     if (response.status == 200) {

        //     }

        // } catch (error) {
        //     alert("error")
        // }

        // setOpen(false)
    }





    return (
        <div className='modal' >
            <Formik
              initialValues={ initialValues }
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
                    <Form className='modal-form' onSubmit={handleSubmit}>
                        <div className='modal-form-div'>
                            <div>
                                <div className='modal-form-div-el'>
                                    <label>Başlıq (az)</label>
                                    <Field onChange={handleChange} id={idValue} value={values.azKey} type="text" name="azKey" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (az)</label>
                                    <Field value={values.azValue} id={idValue} type="text" placeholder='' name="azValue" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Başlıq (en)</label>
                                    <Field onChange={handleChange} id={idValue} value={values.enKey} type="text" name="enKey" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (en)</label>
                                    <Field value={values.enValue} id={idValue} type="text" placeholder='' name="enValue" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Başlıq (ru)</label>
                                    <Field onChange={handleChange} id={idValue} value={values.ruKey} type="text" name="ruKey" />
                                </div>
                                <div className='modal-form-div-el'> 
                                    <label>Mətn (ru)</label>
                                    <Field value={values.ruValue} id={idValue} type="text" placeholder='' name="ruValue" />
                                </div>
                            </div>
                            <p>+</p>
                        </div>
                        <div className='modal-form-div'>
                            <div className='modal-form-div-el'>
                                <label>Şəkil</label>
                                <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
                            </div>
                        </div>
                        <div className='modal-form-btn'>
                            <button type='submit'>Add</button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default ModalIntern