import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';



const NewsMain = () => {
    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)
    const initialValuesRaw = {}

    const fetchData = () => {
            
        axios.get((`${process.env.REACT_APP_URL}/admin/news/page/header`))
            .then(res => {
                initialValuesRaw.azTitle = res.data[0]?.azTitle;
                initialValuesRaw.azDescription = res.data[0]?.azDescription;
                initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
                initialValuesRaw.ruDescription = res.data[0]?.ruDescription;
                initialValuesRaw.enTitle = res.data[0]?.enTitle;
                initialValuesRaw.enDescription = res.data[0]?.enDescription;
                initialValuesRaw.AzNewsPageHeaderImage= res.data[0]?.azImages[0]?.url;
                initialValuesRaw.EnNewsPageHeaderImage= res.data[0]?.enImages[0]?.url;
                initialValuesRaw.RuNewsPageHeaderImage= res.data[0]?.ruImages[0]?.url;
                setInitialValues(initialValuesRaw)
                setId(res.data[0]?._id)
            })
            .catch((err) => {});
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
        if (values.azImage) {
            dataForm.append('AzNewsPageHeaderImage', values.azImage)
        } else {
            dataForm.append('AzNewsPageHeaderImage', values.AzNewsPageHeaderImage)
        }
        if (values.ruImage) {
            dataForm.append('RuNewsPageHeaderImage', values.ruImage)
        } else {
            dataForm.append('RuNewsPageHeaderImage', values.RuNewsPageHeaderImage)
        }
        if (values.enImage) {
            dataForm.append('EnNewsPageHeaderImage', values.enImage)
        } else {
            dataForm.append('EnNewsPageHeaderImage', values.EnNewsPageHeaderImage)
        }
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/news/page/header`, dataForm)
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML='Redakt?? edildi';
                document.querySelector('.alertModalApi').classList.add('patch')
                document.querySelector('.alertModalApi').classList.remove('post')
                document.querySelector('.alertModalApi').classList.remove('delete')
                document.querySelector('.alertModalApi').classList.add('visible')
                document.querySelector('.alertModalApi').classList.remove('hidden')
              setTimeout(()=>{
                document.querySelector('.alertModalApi').classList.remove('visible')
                document.querySelector('.alertModalApi').classList.add('hidden')
             },1000)
                fetchData()
            }

        } catch (error) {
            alert("error")
        }
    }


    return (
        <div className='middle-main'>
           
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
                                        <label>Ba??l??q (az)</label>
                                        <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>M??tn (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>????kil (az)</label>
                                        <Field value={values.filename} onChange={e => setFieldValue("azImage", e.currentTarget.files[0])} type="file" name="azImage" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Ba??l??q (ru)</label>
                                        <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>M??tn (ru)</label>
                                        <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription"   required/>
                                    </div>

                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>????kil (ru)</label>
                                        <Field value={values.filename} onChange={e => setFieldValue("ruImage", e.currentTarget.files[0])} type="file" name="ruImage" />
                                    </div>
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Ba??l??q (en)</label>
                                        <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>M??tn (en)</label>
                                        <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription"   required/>
                                    </div>

                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>????kil (en)</label>
                                        <Field value={values.filename} onChange={e => setFieldValue("enImage", e.currentTarget.files[0])} type="file" name="enImage" />
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

export default NewsMain