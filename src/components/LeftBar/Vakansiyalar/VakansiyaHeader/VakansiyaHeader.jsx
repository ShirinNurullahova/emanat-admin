import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const VakansiyaHeader = () => {
    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)

    const fetchData = () => {

        axios.get((`${process.env.REACT_APP_URL}/admin/vacation/header`))
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
        dataForm.azTitle= values.azTitle;
        dataForm.ruTitle= values.ruTitle;
        dataForm.enTitle= values.enTitle;
        dataForm.azDescription= values.azDescription;
        dataForm.ruDescription= values.ruDescription;
        dataForm.enDescription= values.enDescription;
        dataForm.id = values._id;
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/vacation/header` , dataForm)
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML='Redaktə edildi';
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
        <div>
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
                                        <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Mətn (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription"   required/>
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (ru)</label>
                                        <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Mətn (ru)</label>
                                        <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription"   required/>
                                    </div>
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (en)</label>
                                        <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Mətn (en)</label>
                                        <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription"   required/>
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

export default VakansiyaHeader