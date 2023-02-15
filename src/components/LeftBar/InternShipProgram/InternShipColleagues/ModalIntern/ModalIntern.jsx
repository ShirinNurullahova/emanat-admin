import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
let dataValues = [];

const ModalIntern = ({ setOpen, id }) => {
    const [initialValues, setInitialValues] = useState(null)
    // const initial = {
    //     "azKey": '',
    //     "azValue": '',
    //     "enKey": '',
    //     "enValue": '',
    //     "ruKey": '',
    //     "ruValue": ''
    // }
    // const [stepValue, setStepValue] = useState([0])
    // setStepValue([...stepValue, stepValue[stepValue.length - 1] + 1])

    const onSubmitHandler = async (values) => {
        const dataForm = new FormData()
        dataForm.append('id', id);
        dataForm.append('data', JSON.stringify(dataValues));
        dataForm.append('InternshipProgramColleagueImage', values.image);

        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/admin/internship/colleagues/`, dataForm)
            if (response.status === 201) {
                alert("okayyyy")
            }
        } catch (error) {
            alert("error")
        }

        setOpen(false)
    }


    const addContentHandler= () => {
        const initialValuesRaw = new Object();
        dataValues.push(initialValuesRaw)
        setInitialValues([...initialValues, initialValuesRaw])
    }

    const handleChange = (e, id) => {
        let name = e.target.name;
        dataValues[id][name] = e.target.value;
    }

    useEffect(() => {
        const initialValuesRaw = new Object();
        dataValues.push(initialValuesRaw);
        setInitialValues([initialValuesRaw]);
    }, [])

    return (
        <div className='modal-2' >
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
                        <Form className='modal-form-2' onSubmit={handleSubmit}>
                            {initialValues?.map((item, index) => (
                                <div key={index} className='modal-form-div'>
                                    <p style={{fontSize: '16px', fontWeight: 'bold', marginTop: '40px'}}>Əməkdaşımız haqqında məlumat {index + 1}</p>
                                    <div className='modal-form-div-el'>
                                        <label>Başlıq (az)</label>
                                        <Field onChange={(e) => handleChange(e, index)} type="text" name="azKey" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Mətn (az)</label>
                                        <Field onChange={(e) => handleChange(e, index)} type="text" name="azValue" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Başlıq (en)</label>
                                        <Field onChange={(e) => handleChange(e, index)} type="text" name="enKey" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Mətn (en)</label>
                                        <Field onChange={(e) => handleChange(e, index)} type="text" name="enValue" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Başlıq (ru)</label>
                                        <Field onChange={(e) => handleChange(e, index)} type="text" name="ruKey" />
                                    </div>
                                    <div className='modal-form-div-el'>
                                        <label>Mətn (ru)</label>
                                        <Field onChange={(e) => handleChange(e, index)} type="text" name="ruValue" />
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
                                <button type='submit'>Əlavə et</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            }
        </div>
    )
}

export default ModalIntern