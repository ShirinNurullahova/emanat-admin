import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const InternShipColleagues = () => {
  const [id, setId] = useState("63e77c037d3393a43630cab3");
  const [initialValues, setInitialValues] = useState(null)
  const initialValuesRaw = {}

  const fetchData = () => {

    axios.get((`${process.env.REACT_APP_URL}/admin/internship/about`))
      .then(res => {
        console.log(res.data)
        initialValuesRaw.azTitle = res.data[0]?.azTitle;
        initialValuesRaw.azDescription = res.data[0]?.azDescription;
        initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
        initialValuesRaw.ruDescription = res.data[0]?.ruDescription;
        initialValuesRaw.enTitle = res.data[0]?.enTitle;
        initialValuesRaw.enDescription = res.data[0]?.enDescription;
        initialValuesRaw.InternshipProgramAboutImage = res.data[0]?.icon[0]?.url;
        setInitialValues(initialValuesRaw)
        // setId(res.data[0]?._id)
      })
      .catch((err) => { });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (values) => {
    const dataForm = new FormData()
    const dataNew = [
      {
        "azKey": "Ad, Soyad:",
        "azValue": "Ayxan Səfərli",
        "enKey": "Name, Surname:",
        "enValue": "Aykhan Safarli",
        "ruKey": "Имя и фамилия:",
        "ruValue": "Айхан Сафарли"
      },
      {
        "azKey": "Departament:",
        "azValue": "Rəqəmsal Həllər",
        "enKey": "Department:",
        "enValue": "Digital Solutions:",
        "ruKey": "Отделение:",
        "ruValue": "Цифровые решения"
      },
      {
        "azKey": "Vəzifə:",
        "azValue": "Kiçik İOS proqramçı",
        "enKey": "Position:",
        "enValue": "Small iOS programmer",
        "ruKey": "Позиция:",
        "ruValue": "Маленький iOS-программист."
      },
    ]
    console.log(id)
    dataForm.append('id', id)
    dataNew.map(item => {
      console.log(item)
      dataForm.append('data', item)
    })

    if (values.image) {
      dataForm.append('InternshipProgramColleagueImage', values.image)
    } 
    // else {
    //   dataForm.append('InternshipProgramColleagueImage', values.icon)
    // }

    try {
      const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/internship/colleagues/`, dataForm)
      // if (response.status == 200) {
      //   fetchData()
      // }
      console.log(response)

    } catch (error) {
      alert("error")
    }
  }

  return (
    <div className='middle-main'>
      <div className='middle-main-comp'>

        <div className='middle-main-comp-bottom'>
          <p>/ Əməkdaşlarımız</p>
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
                    <label>Başlıq (az)</label>
                    <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" />
                  </div>
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Təsvir (az)</label>
                    <Field onChange={handleChange} value={values.azDescription} type="text" placeholder='' name="azDescription" />
                  </div>
                </div>
                <div className='middle-main-bottom-form-div'>
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Başlıq (ru)</label>
                    <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                  </div>
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Təsvir (ru)</label>
                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                  </div>
                </div>

                <div className='middle-main-bottom-form-div'>
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Başlıq (en)</label>
                    <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                  </div>
                  <div className='middle-main-bottom-form-div-el'>
                    <label>Təsvir (en)</label>
                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
                  </div>

                  <div className='middle-main-bottom-form-div-el'>
                    <label>Şəkil</label>
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
  )
}

export default InternShipColleagues