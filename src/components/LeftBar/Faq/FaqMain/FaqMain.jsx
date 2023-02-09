import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import FaqKategoria from './FaqKategoria/FaqKategoria';

const FaqMain = () => {

    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)
    const [initialValues1 , setInitialValues1] = useState(null)
    const [initialValues2 , setInitialValues2] = useState(null)
    const [initialValues3 , setInitialValues3] = useState(null)

    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/faq/main`))
            .then(res => {
                console.log(res)
                setInitialValues(res.data[0])
                setInitialValues1(res.data[0]?.categories[0])
                setInitialValues2(res.data[0]?.categories[1])
                setInitialValues3(res.data[0]?.categories[2])

                setId(res.data[0]?._id)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onSubmitHandler = async (values) => {
        console.log(values);
        const dataForm = {};
        dataForm.azTitle = values.azTitle;
        dataForm.ruTitle = values.ruTitle;
        dataForm.enTitle = values.enTitle;
        dataForm.id = values._id;
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/faq/main`, dataForm)
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
                
                <div className='middle-main-comp-bottom'>
                    <p>/ Main</p>
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



                                </div>
                                <div className='middle-main-bottom-form-btn'>
                                    <button type='submit'>Save</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                }

            </div>
            <div className='middle-main-bottom'>
              
           

                <FaqKategoria initialValues={initialValues1} id={id}/>
                <FaqKategoria initialValues={initialValues2} id={id}/>
                <FaqKategoria initialValues={initialValues3} id={id}/>

              
            </div>
        </div>
    )
}

export default FaqMain