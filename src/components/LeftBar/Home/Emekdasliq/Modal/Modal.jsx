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
                if (response.status == 200) {

                }

            } catch (error) {
                alert("error")
            }

        } else if (open === "Redaktə et") {
            try {
                const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/main/cooperation/icons`, dataForm)
                if (response.status == 200) {

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


    return (
        <div>
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