import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const ModalIntern = ({ setOpen, id }) => {
    const initialValuesRaw = {
        "azKey": "",
        "azValue": "",
        "enKey": "",
        "enValue": "",
        "ruKey": "",
        "ruValue": ""
    }
    const [initialValues, setInitialValues] = useState([initialValuesRaw])
    let dataValues = [];  
    dataValues.push(initialValuesRaw);
    const [stepValue, setStepValue] = useState([0])

    const onSubmitHandler = async (values) => {
        console.log(initialValues);
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


    const addContentHandler= () => {
        dataValues.push(initialValuesRaw)
        console.log(dataValues);
        setInitialValues([...initialValues, initialValuesRaw])
        // setStepValue([...stepValue, stepValue[stepValue.length - 1] + 1])
    }

    const handleChange = (e, id, item) => {
        // item[e.target.name] = e.target.value
        let name = e.target.name;
        console.log(id);
        console.log(dataValues);
        console.log(dataValues[id]);
        // setInitialValues([...initialValues, [initialValues[id].name] = e.target.value])
    }

    useEffect(() => {
        // console.log(initialValues);
    }, [initialValues])

    return (
        <div className='modal' >
            {initialValues && 
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        onSubmitHandler(values);
                    }}
                >
                    {({
                        values,
                        handleSubmit,
                        setFieldValue
                    }) => (
                        <Form className='modal-form' onSubmit={handleSubmit}>
                            {initialValues.map((item, index) => (
                                <div key={index} className='modal-form-div'>
                                    <p style={{fontSize: '16px', fontWeight: 'bold', marginTop: '40px'}}>Əməkdaşımız haqqında məlumat {index + 1}</p>
                                    <div className='modal-form-div-el'>
                                        <label>Başlıq (az)</label>
                                        <Field onChange={(e) => handleChange(e, index, item)} defaultValue={item.azKey} type="text" name="azKey" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Mətn (az)</label>
                                        <Field onChange={(e) => handleChange(e, index, item)} defaultValue={item.azValue} type="text" name="azValue" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Başlıq (en)</label>
                                        <Field onChange={(e) => handleChange(e, index, item)} defaultValue={item.enKey} type="text" name="enKey" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Mətn (en)</label>
                                        <Field onChange={(e) => handleChange(e, index, item)} defaultValue={item.enValue} type="text" name="enValue" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Başlıq (ru)</label>
                                        <Field onChange={(e) => handleChange(e, index, item)} defaultValue={item.ruKey} type="text" name="ruKey" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Mətn (ru)</label>
                                        <Field onChange={(e) => handleChange(e, index, item)} defaultValue={item.ruValue} type="text" name="ruValue" />
                                    </div>
                                </div>
                            ))}
                            <div style={{textAlign: 'center', marginTop: '30px'}}>
                                <p onClick={addContentHandler} style={{fontSize: '30px', cursor: 'pointer', fontWeight: 'bold', padding: '5px', display: 'inline'}}>+</p>
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
            }
        </div>
    )
}

export default ModalIntern