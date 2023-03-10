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
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML='Redakt?? edildi';
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
        <div className='terminal-usage'>
            <div className='middle-main'>
                <div className='middle-main-comp'>
                    <div className='middle-main-comp-p'>
                        <p>
                            Terminal istifad??
                        </p>
                    </div>
                    <div className='middle-main-comp-bottom'>
                        <p>/ ??sas</p>
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
                                            <label>Ba??l??q (az)</label>
                                            <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle"   required/>
                                        </div>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>M??tn (az)</label>
                                            <Field onChange={handleChange} value={values.azDescription} rows='15' component="textarea" placeholder='' name="azDescription"   required/>
                                        </div>
                                    </div>
                                    <div className='middle-main-bottom-form-div'>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Ba??l??q (ru)</label>
                                            <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle"   required/>
                                        </div>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>M??tn (ru)</label>
                                            <Field onChange={handleChange} value={values.ruDescription} rows='15' component="textarea" name="ruDescription"   required/>
                                        </div>
                                    </div>

                                    <div className='middle-main-bottom-form-div'>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>Ba??l??q (en)</label>
                                            <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle"   required/>
                                        </div>
                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>M??tn (en)</label>
                                            <Field onChange={handleChange} value={values.enDescription} rows='15' component="textarea" name="enDescription"   required/>
                                        </div>

                                        <div className='middle-main-bottom-form-div-el'>
                                            <label>????kil</label>
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