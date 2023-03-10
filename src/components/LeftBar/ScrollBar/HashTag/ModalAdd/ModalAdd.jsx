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
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML='Əlavə edildi';
                document.querySelector('.alertModalApi').classList.add('post')
                document.querySelector('.alertModalApi').classList.remove('patch')
                document.querySelector('.alertModalApi').classList.remove('delete')
                document.querySelector('.alertModalApi').classList.add('visible')
                document.querySelector('.alertModalApi').classList.remove('hidden')
              setTimeout(()=>{
                document.querySelector('.alertModalApi').classList.remove('visible')
                document.querySelector('.alertModalApi').classList.add('hidden')
             },1000)
            }
      
          } catch (error) {
            alert("error")
          }
        
        setOpen(false)
      }
    return (
        <div className='hashtag-add'>
            <div className='middle-main-bottom-3'>
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
                                        <Field onChange={handleChange} value={values.azHashtag} type="text" name="azHashtag"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Hashtag (en)</label>
                                        <Field onChange={handleChange} value={values.enHashtag} type="text" placeholder='' name="enHashtag"   required/>
                                    </div>

                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Hashtag(ru)</label>
                                        <Field onChange={handleChange} value={values.ruHashtag} type="text" placeholder='' name="ruHashtag"   required/>
                                    </div>
                                    <div className='middle-main-bottom-form-div-el'>
                                        <label>Səhifə</label>
                                        <Field onChange={handleChange} value={values.page} type="text" placeholder='' name="page"   required/>
                                    </div>
                                </div>
                                <div className='middle-main-bottom-form-btn'>
                                    <button type='submit'>Yenisini yadda saxla</button>
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