import '../Form.scss'
import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const Terminal = () => {
    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)
    const initialValuesRaw = {}

    const fetchData = () => {
            
        axios.get((`${process.env.REACT_APP_URL}/admin/terminalPage`))
            .then(res => {
                initialValuesRaw.azTitle = res.data[0]?.azTitle;
                initialValuesRaw.azDescription = res.data[0]?.azDescription;
                initialValuesRaw.azFooterHead = res.data[0]?.azFooterHead;
                initialValuesRaw.azFooterDesc = res.data[0]?.azFooterDesc;
                initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
                initialValuesRaw.ruDescription = res.data[0]?.ruDescription;
                initialValuesRaw.ruFooterHead = res.data[0]?.ruFooterHead;
                initialValuesRaw.ruFooterDesc = res.data[0]?.ruFooterDesc;
                initialValuesRaw.enTitle = res.data[0]?.enTitle;
                initialValuesRaw.enDescription = res.data[0]?.enDescription;
                initialValuesRaw.enFooterHead = res.data[0]?.enFooterHead;
                initialValuesRaw.enFooterDesc = res.data[0]?.enFooterDesc;
                initialValuesRaw.numbers = res.data[0]?.numbers;
                initialValuesRaw.email = res.data[0]?.email;
                initialValuesRaw.TerminalPageImage = res.data[0]?.images[0]?.url;
                setInitialValues(initialValuesRaw)
                setId(res.data[0]?._id)
            })
            .catch((err) =>{});
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onSubmitHandler = async (values) => {
        const dataForm = new FormData()
        dataForm.append('id', id)
        dataForm.append('azTitle', values.azTitle)
        dataForm.append('enTitle', values.enTitle)
        dataForm.append('ruTitle', values.ruTitle)
        dataForm.append('azDescription', values.azDescription)
        dataForm.append('enDescription', values.enDescription)
        dataForm.append('ruDescription', values.ruDescription)
        dataForm.append('azFooterHead', values.azFooterHead)
        dataForm.append('enFooterHead', values.enFooterHead)
        dataForm.append('ruFooterHead', values.ruFooterHead)
        dataForm.append('azFooterDesc', values.azFooterDesc)
        dataForm.append('enFooterDesc', values.enFooterDesc)
        dataForm.append('ruFooterDesc', values.ruFooterDesc)
        dataForm.append('numbers', values.numbers)
        dataForm.append('email', values.email)
        if (values.image) {
            dataForm.append('HrFormPageImage', values.image)
        } else {
            dataForm.append('HrFormPageImage', values.HrFormPageImage)
        }
       
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/terminalPage`, dataForm)
            if (response.status == 200) {
                fetchData()
            }

        } catch (error) {
            alert("error")
        }
    }


    return (
        <div className='form'>
        <div className='middle-main'>
            <div className='middle-main-comp'>
                <div className='middle-main-comp-p'>
                    <p>
                        Terminal
                    </p>
                </div>
                <div className='middle-main-comp-bottom'>
                    <p>/ əsas</p>
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
                                        <label>Başlıq (az)</label>
                                        <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Təsvir (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Son başlıq (az)</label>
                                        <Field onChange={handleChange} value={values.azFooterHead} type="text" placeholder='' name="azFooterHead" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Son təsvir (az)</label>
                                        <Field onChange={handleChange} value={values.azFooterDesc} type="text" placeholder='' name="azFooterDesc" />
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
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Son başlıq (ru)</label>
                                        <Field onChange={handleChange} value={values.ruFooterHead} type="text" placeholder='' name="ruFooterHead" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Son təsvir (ru)</label>
                                        <Field onChange={handleChange} value={values.ruFooterDesc} type="text" placeholder='' name="ruFooterDesc" />
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
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Son başlıq (en)</label>
                                        <Field onChange={handleChange} value={values.enFooterHead} type="text" placeholder='' name="enFooterHead" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Son təsvir (en)</label>
                                        <Field onChange={handleChange} value={values.enFooterDesc} type="text" placeholder='' name="enFooterDesc" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                        <label>Nömrələr</label>
                                        <Field onChange={handleChange} value={values.numbers} type="text" placeholder='' name="numbers" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                        <label>Email</label>
                                        <Field onChange={handleChange} value={values.email} type="text" placeholder='' name="email" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Şəkil</label>
                                        <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
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
        
         
        
        </div>
    )
}

export default Terminal