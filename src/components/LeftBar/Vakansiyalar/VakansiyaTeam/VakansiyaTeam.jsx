import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const VakansiyaTeam = () => {
    const [id, setId] = useState("");
    const [initialValues, setInitialValues] = useState(null)

    const fetchData = () => {

        axios.get((`${process.env.REACT_APP_URL}/admin/vacation/team`))
            .then(res => {
                setInitialValues(res.data[0])
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
        dataForm.azTitle= values.azTitle;
        dataForm.ruTitle= values.ruTitle;
        dataForm.enTitle= values.enTitle;
        dataForm.azDescription= values.azDescription;
        dataForm.ruDescription= values.ruDescription;
        dataForm.enDescription= values.enDescription;
        dataForm.id = values._id;
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/vacation/team` , dataForm)
            if (response.status == 200) {
                fetchData()
            }

        } catch (error) {
            alert("error")
        }
    }
  return (
    <div>
          <p className='text'>
              Vacation Team
          </p>
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
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (az)</label>
                                        <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Title (ru)</label>
                                        <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (ru)</label>
                                        <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                    </div>
                                </div>

                                <div className='middle-main-bottom-form-div'>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Title (en)</label>
                                        <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Description (en)</label>
                                        <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
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


    </div>
  )
}

export default VakansiyaTeam