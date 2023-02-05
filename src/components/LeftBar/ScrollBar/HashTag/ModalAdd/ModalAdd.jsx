import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const ModalAdd = ({setOpen}) => {
    const [initialValues, setInitialValues] = useState({
        "azHashtag": '',
        "ruHashtag": "",
        "enHashtag": "",
        "page": ''
    }   
    );

    
    const onSubmitHandler = async (values) => {
        const dataForm = {};
        dataForm.azHashtag = values.azHashtag.split(', ');
        dataForm.ruHashtag = values.ruHashtag.split(', ');
        dataForm.enHashtag = values.enHashtag.split(', ');
        dataForm.page = values.page;
          try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/tag/hashTag`, dataForm)
            if (response.status == 200) {
      
            }
      
          } catch (error) {
            alert("error")
          }
        
        setOpen(false)
      }
    return (
        <div>
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
                                        <label>Hashtag (az)</label>
                                        <Field onChange={handleChange} value={values.azHashtag} type="text" name="azHashtag" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Hashtag (en)</label>
                                        <Field onChange={handleChange} value={values.enHashtag} type="text" placeholder='' name="enHashtag" />
                                    </div>

                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Hashtag(ru)</label>
                                        <Field onChange={handleChange} value={values.ruHashtag} type="text" placeholder='' name="ruHashtag" />
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Page</label>
                                        <Field onChange={handleChange} value={values.page} type="text" placeholder='' name="page" />
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-btn'>
                                    <button type='submit'>Save New</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                }

            </div>
        </div>
    )
}

export default ModalAdd