import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const AddModalCategories = ({idC, setButton , button}) => {

    const [initialValues, setInitialValues] = useState({
        "azTitle": "",
        "enTitle": "",
        "ruTitle": ""
    }
    );


    const onSubmitHandler = async (values) => {
        const dataForm = {};
        dataForm.azTitle = values.azTitle;
        dataForm.enTitle = values.enTitle;
        dataForm.ruTitle = values.ruTitle;
        dataForm.id = idC;
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/admin/faq/main/categories`, dataForm)
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML='Əlavə Edildi';
                document.querySelector('.alertModalApi').classList.add('post')
                document.querySelector('.alertModalApi').classList.remove('patch')
                document.querySelector('.alertModalApi').classList.remove('delete')
                document.querySelector('.alertModalApi').classList.add('visible')
                document.querySelector('.alertModalApi').classList.remove('hidden')
              setTimeout(()=>{
                document.querySelector('.alertModalApi').classList.remove('visible')
                document.querySelector('.alertModalApi').classList.add('hidden')
             },1000)
            }

        } catch (error) {
            alert("error")
        }

        setButton(false)
    }

    return (
        <div className='middle-main-bottom'>

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
                                <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" required />
                            </div>
                            <div className='middle-main-bottom-form-div-el'>
                                <label>Mətn (az)</label>
                                <Field onChange={handleChange} value={values.enTitle} type="text" placeholder='' name="enTitle" required />
                            </div>
                            <div className='middle-main-bottom-form-div-el'>
                                <label>Son başlıq (az)</label>
                                <Field onChange={handleChange} value={values.ruTitle} type="text" placeholder='' name="ruTitle" required />
                            </div>

                        </div>
                        <div className='middle-main-bottom-form-btn'>
                            <button type='submit'>Yadda saxla</button>
                        </div>
                    </Form>
                )}
            </Formik>


        </div>
    )
}

export default AddModalCategories