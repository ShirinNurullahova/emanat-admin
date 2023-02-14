import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const ModalIntern = ({ setOpen, id }) => {
    // const [initialValues, setInitialValues] = useState([{
    //     "azKey": "",
    //     "azValue": "",
    //     "enKey": "",
    //     "enValue": "",
    //     "ruKey": "",
    //     "ruValue": ""
    // }]);
    const initialValues = {
        "azKey": "hd",
        "azValue": "",
        "enKey": "",
        "enValue": "",
        "ruKey": "",
        "ruValue": ""
    }
    const addedData = [initialValues]
    const [stepValue, setStepValue] = useState([0])


    const onSubmitHandler = async (values) => {
        console.log(addedData);
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


    const addContentHandler= (e) => {
        setStepValue([...stepValue, stepValue[stepValue.length - 1] + 1])
    }

    const handleChange = (e, item) => {
        // item[e.target.name] = e.target.value
        console.log(item[e.target.name]);
    }


    return (
        <div className='modal' >
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    onSubmitHandler(values);
                }}
            >
                {({
                    values,
                    // handleChange,
                    handleSubmit,
                    setFieldValue
                }) => (
                    <Form className='modal-form' onSubmit={handleSubmit}>
                        {stepValue && addedData.map((item, index) => (
                            <div key={index} className='modal-form-div'>
                                <p style={{fontSize: '16px', fontWeight: 'bold', marginTop: '40px'}}>Əməkdaşımız haqqında məlumat {item + 1}</p>
                                <div className='modal-form-div-el'>
                                    <label>Başlıq (az)</label>
                                    <Field onChange={(e) => handleChange(e, item)} id={item} defaultValue={item.azKey} type="text" name="azKey" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (az)</label>
                                    <Field onChange={(e) => handleChange(e, item)} id={item} defaultValue={item.azValue} type="text" name="azValue" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Başlıq (en)</label>
                                    <Field onChange={(e) => handleChange(e, item)} id={item} defaultValue={item.enKey} type="text" name="enKey" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (en)</label>
                                    <Field onChange={(e) => handleChange(e, item)} id={item} defaultValue={item.enValue}  type="text" name="enValue" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Başlıq (ru)</label>
                                    <Field onChange={(e) => handleChange(e, item)} id={item} defaultValue={item.ruKey} type="text" name="ruKey" />
                                </div>
                                <div className='modal-form-div-el'>
                                    <label>Mətn (ru)</label>
                                    <Field onChange={(e) => handleChange(e, item)} id={item} defaultValue={item.ruValue}  type="text" name="ruValue" />
                                </div>
                            </div>
                        ))}
                        <div style={{textAlign: 'center', marginTop: '30px'}}>
                            <p onClick={e => addContentHandler(e)} style={{fontSize: '30px', cursor: 'pointer', fontWeight: 'bold', padding: '5px', display: 'inline'}}>+</p>
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