import React, { useState, useEffect, useRef } from 'react';
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
                setInitialValues(res.data.dtoHead[0])
                setData(res.data.dtoSection)
            })
            .catch((err) => { });
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
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML = 'Redaktə Edildi';
                document.querySelector('.alertModalApi').classList.add('patch')
                document.querySelector('.alertModalApi').classList.remove('post')
                document.querySelector('.alertModalApi').classList.remove('delete')
                document.querySelector('.alertModalApi').classList.add('visible')
                document.querySelector('.alertModalApi').classList.remove('hidden')
                setTimeout(() => {
                    document.querySelector('.alertModalApi').classList.remove('visible')
                    document.querySelector('.alertModalApi').classList.add('hidden')
                }, 1000)
            }
        } catch (error) {
            alert("error")
        }
    }

    const onClickHandler = (e) => {
        setBtn("Redaktə et")
        setId(e)
    }
    var body = document.getElementsByTagName('body')[0];

    if (btn) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'visible'

    }
    // const menuRef = useRef()
    // useEffect(() => {
    //     let handler = (e) => {
    //         if (menuRef.current.contains(e.target)) {

    //             setBtn(false);
    //         }
    //     }
    //     document.addEventListener('mousedown', handler);
    //     return () => {
    //         document.removeEventListener('mousedown', handler)
    //     }
    // })
    return (
        <div className='middle-main' >
            <div className='middle-main-comp'>
                <div className='middle-main-comp-p'>
                    <p>
                        Haqqımızda
                    </p>
                </div>
                <div className='middle-main-comp-bottom'>
                    <p>/ servis başlığı</p>
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
                                        <label>Başlıq (az)</label>
                                        <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" required />
                                    </div>

                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (ru)</label>
                                        <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" required />
                                    </div>

                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Başlıq (en)</label>
                                        <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" required />
                                    </div>

                                </div>
                                <div className='middle-main-bottom-form-btn'>
                                    <button type='submit'>Yadda saxla</button>
                                </div>
                            </Form>
                        )}
                    </Formik>}
            </div>

            <div className='about-services-btn'>

                <button onClick={() => setBtn("Əlavə et")}>
                    Əlavə et
                </button>
            </div>
            <div className='about-services-section'>

                {
                    data &&
                    data.map((e) => {
                        return (
                            <div className='about-services-section-div' onClick={() => onClickHandler(e)}>
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
                {
                    btn &&

                    <AboutModal id={id} setBtn={setBtn} btn={btn} />
                }
            </div>


        </div>
    )
}

export default AboutServiceHead