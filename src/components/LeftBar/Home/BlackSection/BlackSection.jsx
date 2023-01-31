import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';



const BlackSection = () => {
  const [data, setData] = useState(null);
  const [id, setId] = useState("");
  const [initialValues1, setInitialValues1] = useState(null)
  const [initialValues2, setInitialValues2] = useState(null)
  const [initialValues3, setInitialValues3] = useState(null)
  // const initialValuesRaw1 = {}

  const fetchData = () => {
    axios.get((`${process.env.REACT_APP_URL}/admin/main/information`))
      .then(res => {
        console.log(res.data);

        setInitialValues1(res.data[0])
        setInitialValues2(res.data[1])
        setInitialValues3(res.data[2])

        setData(res.data)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  const onSubmitHandler = async (values) => {
    console.log(values);
    const dataForm = new FormData();
    dataForm.append('id', id)
    dataForm.append('azTitle', values.azTitle)
    dataForm.append('enTitle', values.enTitle)
    dataForm.append('ruTitle', values.ruTitle)
    dataForm.append('azDescription', values.azDescription)
    dataForm.append('enDescription', values.enDescription)
    dataForm.append('ruDescription', values.ruDescription)

    console.log(dataForm);
    try {
      const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/main/information`, dataForm)
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
          <p>
            Ana Səhifə
          </p>
        </div>
        <div className='middle-main-comp-bottom'>
          <p><span>Claradix</span> / BlackSection</p>
        </div>
      </div>
      <div className='middle-main-bottom'>
        {data && initialValues &&
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
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Title (en)</label>
                    <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                  </div>
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Title (ru)</label>
                    <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                  </div>

                </div>
                <div className='middle-main-bottom-form-div'>
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Description (az)</label>
                    <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription" />
                  </div>
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Description (en)</label>
                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
                  </div>
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Description (ru)</label>
                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
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

export default BlackSection
