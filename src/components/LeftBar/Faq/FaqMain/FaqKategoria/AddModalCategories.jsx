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
    const cancelFunction =()=>{
        setButton(false);
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
                        <div className="modal-form-cancel" onClick={()=>cancelFunction()}>
                    <svg class="svg-icon" viewBox="0 0 20 20">
                      <path fill="white" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                    </svg>
                  </div>
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