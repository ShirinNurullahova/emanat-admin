import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import '../TerminalUsage/TerminalUsage.scss'


const TerminalUsage = () => {
    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)
    const initialValuesRaw = {}

    const fetchData = () => {

        axios.get((`${process.env.REACT_APP_URL}/admin/useTerminal`))
            .then(res => {
                initialValuesRaw.azTitle = res.data[0]?.azTitle;
                initialValuesRaw.azDescription = res.data[0]?.azDescription;
                initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
                initialValuesRaw.ruDescription = res.data[0]?.ruDescription;
                initialValuesRaw.enTitle = res.data[0]?.enTitle;
                initialValuesRaw.enDescription = res.data[0]?.enDescription;
                initialValuesRaw.MainPageHeaderImage = res.data[0]?.images[0]?.url;
                setInitialValues(initialValuesRaw)
                setId(res.data[0]?._id)
            })
            .catch((err) => { });
    }

    useEffect(() => {
        fetchData();
    }, []);



    const onSubmitHandler = async (values) => {
        const dataForm = new FormData();
        dataForm.append("id", id);
        dataForm.append("azTitle", values.azTitle);
        dataForm.append("enTitle", values.enTitle);
        dataForm.append("ruTitle", values.ruTitle);

        if (typeof values.azDescription === "string") {
            values.azDescription.split(";").map(item => {
                dataForm.append("azDescription", item);
            })
        } else {
            values.azDescription.map(item => {
                dataForm.append("azDescription", item);
            })
        }

        if (typeof values.enDescription === "string") {
            values.enDescription.split(";").map(item => {
                dataForm.append("enDescription", item);
            })
        } else {
            values.enDescription.map(item => {
                dataForm.append("enDescription", item);
            })
        }

        if (typeof values.ruDescription === "string") {
            values.ruDescription.split(";").map(item => {
                dataForm.append("ruDescription", item);
            })
        } else {
            values.ruDescription.map(item => {
                dataForm.append("ruDescription", item);
            })
        }

        if (values.image) {
            dataForm.append('UseTerminalRulesImage', values.image)
        } else {
            dataForm.append('UseTerminalRulesImage', values.UseTerminalRulesImage)
        }

        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/useTerminal`, dataForm)
            if (response.status == 200) {
                fetchData()
            }

        } catch (error) {
            alert("error")
        }
    }


    return (
        <div className='terminal-usage'>
            <div className='middle-main'>
                <div className='middle-main-comp'>
                    <div className='middle-main-comp-p'>
                        <p>
                            Terminal istifadə
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
                                handleSubmit,
                                setFieldValue
                            }) => (
                                <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                                    <div className='middle-main-bottom-form-div'>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Başlıq (az)</label>
                                            <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" />
                                        </div>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Təsvir (az)</label>
                                            <Field onChange={handleChange} value={values.azDescription} rows='15' component="textarea" placeholder='' name="azDescription" />
                                        </div>
                                    </div>
                                    <div className='middle-main-bottom-form-div'>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Başlıq (ru)</label>
                                            <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                                        </div>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Təsvir (ru)</label>
                                            <Field onChange={handleChange} value={values.ruDescription} rows='15' component="textarea" name="ruDescription" />
                                        </div>
                                    </div>

                                    <div className='middle-main-bottom-form-div'>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Başlıq (en)</label>
                                            <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                                        </div>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Təsvir (en)</label>
                                            <Field onChange={handleChange} value={values.enDescription} rows='15' component="textarea" name="enDescription" />
                                        </div>

                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Şəkil</label>
                                            <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
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


        </div>
    )
}

export default TerminalUsage