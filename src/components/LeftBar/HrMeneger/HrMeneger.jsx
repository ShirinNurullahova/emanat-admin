import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';



const HrMeneger = () => {
    let navigate = useNavigate()
    const initialValues = {
        name: "",
        surname: "",
        email: "",
    }

    const onSubmitHandler = async (values) => {
        console.log(values);
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/superadmin/createHrManager`, values)
            if(response.status === 201 || response.status === 200){
                console.log(response);
                // navigate("/");
            } else if ('') {
                // alert("User already exists")
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='middle-main'>
    <div className='middle-main-comp'>
        <div className='middle-main-comp-p'>
            <p>
              Hr Menecer
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
                    handleSubmit
                }) => (
                    <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                        <div className='middle-main-bottom-form-div'>
                            <div className='middle-main-bottom-form-div-el'>
                                <label>Ad</label>
                                <Field onChange={handleChange} value={values.name} type="text" name="name"   required/>
                            </div>
                            <div className='middle-main-bottom-form-div-el'>
                                <label>Soyad</label>
                                <Field onChange={handleChange} value={values.surname} type="text" placeholder='' name="surname"   required/>
                            </div>
                            <div className='middle-main-bottom-form-div-el'>
                                <label>Email</label>
                                <Field onChange={handleChange} value={values.email} type="email" placeholder='' name="email"   required/>
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

export default HrMeneger