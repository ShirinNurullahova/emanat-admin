import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import AboutModal from '../AboutModal/AboutModal'
import axios from 'axios';


const AboutServiceHead = () => {
    const [btn, setBtn] = useState(null)
    const [id, setId] = useState(null)
    const [initialValues, setInitialValues] = useState(null)
    const [data, setData] = useState(null)
    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/about/services/head`))
            .then(res => {
                console.log(res)
                setInitialValues(res.data.dtoHead[0])
                setData(res.data.dtoSection)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onSubmitHandler = async (values) => {
        let updatedVelus = {}
        updatedVelus.id = values._id;
        updatedVelus.azTitle = values.azTitle
        updatedVelus.ruTitle = values.ruTitle
        updatedVelus.enTitle = values.enTitle

        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/about/services/head`, updatedVelus)
        } catch (error) {
            alert("error")
        }
    }

    const onClickHandler = (e) => {
        setBtn("Edit news")
        setId(e)
    }

    return (
        <div className='middle-main'>
            <div className='middle-main-comp'>
                <div className='middle-main-comp-p'>
                    <p>
                        About
                    </p>
                </div>
                <div className='middle-main-comp-bottom'>
                    <p>/ Service Head</p>
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
                    </Formik>}
            </div>
            <div className='about-services-btn'>
                <button onClick={() => setBtn("Add news")}>
                    Add
                </button>
            </div>
            <div className='about-services-section'>

                {
                    data &&
                    data.map((e) => {
                        return (
                            <div className='about-services-section-div' onClick={() => onClickHandler(e.id)}>
                                <div className='about-services-section-div-img'>
                                    <img src={e.icon} />
                                </div>
                                <div className='about-services-section-div-title'>
                                    <p>{e.azDescription}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                btn &&

                <AboutModal id={id} setBtn={setBtn} btn={btn}/>
            }

        </div>
    )
}

export default AboutServiceHead