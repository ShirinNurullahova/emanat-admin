import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import AboutBranchSection from './AboutBranchSection/AboutBranchSection';


const AboutBranchHead = () => {
    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)
    const [initialValues1, setInitialValues1] = useState(null)
    const [initialValues2, setInitialValues2] = useState(null)
    const [initialValues3, setInitialValues3] = useState(null)

    const initialValuesRaw = {}

    const fetchData = () => {

        axios.get((`${process.env.REACT_APP_URL}/admin/about/branch/head`))
            .then(res => {
                console.log(res)
                initialValuesRaw.azTitle = res.data.message.dtoHead[0]?.azTitle;
                initialValuesRaw.enTitle = res.data.message.dtoHead[0]?.enTitle;
                initialValuesRaw.ruTitle = res.data.message.dtoHead[0]?.ruTitle;
                initialValuesRaw.AboutPageBranchImage = res.data.message.dtoHead[0]?.images[0]?.url;
                setInitialValues(initialValuesRaw)

                setInitialValues1(res.data.message.dtoSection[0])
                setInitialValues2(res.data.message.dtoSection[1])

                setInitialValues3(res.data.message.dtoSection[2])

                setId(res.data.message.dtoHead[0]?._id)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onSubmitHandler = async (values) => {
        console.log(values);
        const dataForm = new FormData()
        dataForm.append('id', id)
        dataForm.append('azTitle', values.azTitle)
        dataForm.append('enTitle', values.enTitle)
        dataForm.append('ruTitle', values.ruTitle)
        if (values.image) {
            dataForm.append('AboutPageBranchImage', values.image)
        } else {
            dataForm.append('AboutPageBranchImage', values.AboutPageBranchImage)
        }
        console.log(dataForm);
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/about/branch/head`, dataForm)
            if (response.status == 200) {
                fetchData()
            }

        } catch (error) {
            alert("error")
        }
    }


    return (
        <div className='middle-main'>

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
                                        <label>Title (az)</label>
                                        <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" />
                                    </div>

                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Title (ru)</label>
                                        <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                                    </div>

                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Title (en)</label>
                                        <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                                    </div>


                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Image</label>
                                        <Field value={values.filename} onChange={e => setFieldValue("image", e.currentTarget.files[0])} type="file" name="filename" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-btn'>
                                    <button type='submit'>Save</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                }

            </div>
           <AboutBranchSection initialValues={initialValues1}/>
           <AboutBranchSection initialValues={initialValues2}/>
           <AboutBranchSection initialValues={initialValues3}/>

        </div>
    )
}

export default AboutBranchHead