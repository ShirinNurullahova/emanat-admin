import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const Modal = ({ id, open, setOpen, icon }) => {
    const [initialValues, setInitialValues] = useState(null)
    const initialValuesAdd = {
        MainPageCooperationIcon: '',
    }

    const onSubmitHandler = async (values) => {
        const dataForm = new FormData()
       
        if (open === "Redaktə et") {
            dataForm.append('id', values.id)
        } else if (open === "Əlavə et") {
            dataForm.append('id', id)
        }

        if (values.image) {
            dataForm.append('MainPageCooperationIcon', values.image)
          } else {
            dataForm.append('MainPageCooperationIcon', values.url)
          }

        if (open === "Əlavə et") {
            try {
                const response = await axios.post(`${process.env.REACT_APP_URL}/admin/main/cooperation/icons`, dataForm)
                if (response.status == 200 || response.status == 201) {
                    document.querySelector('.alertModalApi .text').innerHTML='Əlavə edildi';
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

        } else if (open === "Redaktə et") {
            try {
                const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/main/cooperation/icons`, dataForm)
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
                }

            } catch (error) {
                alert("error")
            }
            setOpen(null)
        }

        setOpen(null)
    }

    useEffect(() => {
        if (icon) {
            setInitialValues(icon);
        }
    }, [icon])

    const cancelFunction = () => {
        setOpen(null);
    }
    return (
        <div className='home-modal'>
            {(open === "Əlavə et" || initialValues) &&
                <Formik
                    initialValues={open === "Əlavə et" ? initialValuesAdd : initialValues}
                    onSubmit={(values) => {
                        onSubmitHandler(values);
                    }}
                >
                    {({
                        values,
                        setFieldValue
                    }) => (
                        <Form className='modal-form' >
                            <div className='modal-form-div'>
                            <div className="modal-form-cancel" onClick={() => cancelFunction()}>
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path fill="white" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                                    </svg>
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Şəkil</label>
                                    <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
                                </div>

                            </div>

                            <div className='modal-form-btn'>
                                <button type='submit'>{open}</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            }
        </div>
    )
}

export default Modal