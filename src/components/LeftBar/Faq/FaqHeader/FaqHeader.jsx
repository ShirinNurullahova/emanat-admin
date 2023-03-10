import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';



const FaqHeader = () => {
    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)
    const initialValuesRaw = {}

    const fetchData = () => {
            
        axios.get((`${process.env.REACT_APP_URL}/admin/faq/header`))
            .then(res => {
                initialValuesRaw.azTitle = res.data[0]?.azTitle;
                initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
                initialValuesRaw.enTitle = res.data[0]?.enTitle;
                initialValuesRaw.FaqHeaderImage = res.data[0]?.image.url;
                initialValuesRaw.enFaqHeaderImage = res.data[0]?.enImage.url;
                initialValuesRaw.ruFaqHeaderImage = res.data[0]?.ruImage.url;
                setInitialValues(initialValuesRaw)
                setId(res.data[0]?._id)
                console.log(res.data[0]);
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
        if (values.azImage) {
            dataForm.append('FaqHeaderImage', values.azImage)
        } else {
            dataForm.append('FaqHeaderImage', values.FaqHeaderImage)
        }
        if (values.enImage) {
            dataForm.append('enFaqHeaderImage', values.enImage)
        } else {
            dataForm.append('enFaqHeaderImage', values.enFaqHeaderImage)
        }
        if (values.ruImage) {
            dataForm.append('ruFaqHeaderImage', values.ruImage)
        } else {
            dataForm.append('ruFaqHeaderImage', values.ruFaqHeaderImage)
        }
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/faq/header`, dataForm)
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML='Redakt?? Edildi';
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
            <div className='middle-main-comp'>
                <div className='middle-main-comp-p'>
                    <p>
                        Faq
                    </p>
                </div>
                <div className='middle-main-comp-bottom'>
                    <p>/ ??sas</p>
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
                                        <label>Ba??l??q (az)</label>
                                        <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle"   required/>
                                    </div>
                                  
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Ba??l??q (ru)</label>
                                        <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle"   required/>
                                    </div>
                                   
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Ba??l??q (en)</label>
                                        <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle"   required/>
                                    </div>
                              
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>????kil (az)</label>
                                        <Field value={values.filename} onChange={e => setFieldValue("azImage", e.currentTarget.files[0])} type="file" name="azImage" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>????kil (en)</label>
                                        <Field value={values.filename} onChange={e => setFieldValue("enImage", e.currentTarget.files[0])} type="file" name="enImage" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>????kil (ru)</label>
                                        <Field value={values.filename} onChange={e => setFieldValue("ruImage", e.currentTarget.files[0])} type="file" name="ruImage" />
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

export default FaqHeader