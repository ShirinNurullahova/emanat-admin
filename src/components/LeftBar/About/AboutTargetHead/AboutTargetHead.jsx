import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import AboutTargetSection from '../AboutTargetSection/AboutTargetSection';



const AboutTargetHead = () => {
    const [ initialValues1 , setInitialValues1]= useState(null)
    const [ initialValues2 , setInitialValues2]= useState(null)
    const [ initialValues3 , setInitialValues3]= useState(null)

    const [id, setId] = useState("");
    const [ data ,setData]= useState(null)
    const [initialValues, setInitialValues] = useState(null)
    const initialValuesRaw = {}

    const fetchData = () => {
            
        axios.get((`${process.env.REACT_APP_URL}/admin/about/target/head`))
            .then(res => {
                console.log(res)
                initialValuesRaw.azTitle = res.data.message.dtoHead[0]?.azTitle;
                initialValuesRaw.ruTitle = res.data.message.dtoHead[0]?.ruTitle;
                initialValuesRaw.enTitle = res.data.message.dtoHead[0]?.enTitle;
                initialValuesRaw.AboutPageTargetsImage = res.data.message.dtoHead[0]?.images[0]?.url;
                setInitialValues(initialValuesRaw)
                setId(res.data.message.dtoHead[0]?._id)
                setInitialValues1(res.data.message.dtoHead[0]?.sections[0])
                setInitialValues2(res.data.message.dtoHead[0]?.sections[1])
                setInitialValues3(res.data.message.dtoHead[0]?.sections[2])
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
            dataForm.append('AboutPageTargetsImage', values.image)
        } else {
            dataForm.append('AboutPageTargetsImage', values.AboutPageTargetsImage)
        }
        console.log(dataForm);
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/about/target/head`, dataForm)
            if (response.status == 200) {
                fetchData()
            }

        } catch (error) {
            alert("error")
        }
    }


    return (
        <div className='middle-main'>
            <div className='middle-main-comp'>
                <div className='middle-main-comp-p'>
                   
                </div>
                <div className='middle-main-comp-bottom'>
                    <p>/ Target Head</p>
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

                
             <AboutTargetSection initialValues={initialValues1}/>
             <AboutTargetSection initialValues={initialValues2}/>
             <AboutTargetSection initialValues={initialValues3}/>

        </div>
    )
}

export default AboutTargetHead