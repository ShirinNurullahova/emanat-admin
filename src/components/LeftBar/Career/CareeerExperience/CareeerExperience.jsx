import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const CareerExperience = () => {
  const [id, setId] = useState("");
  const [initialValues, setInitialValues] = useState(null);
  const initialValuesRaw = {};

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/manager/career/experience`)
      .then((res) => {
        initialValuesRaw.azTitle = res.data[0]?.azTitle;
        initialValuesRaw.azDescription = res.data[0]?.azDescription;
        initialValuesRaw.azSections = res.data[0]?.azSections;
        initialValuesRaw.azSubTitle = res.data[0]?.azSubTitle;
        initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
        initialValuesRaw.ruDescription = res.data[0]?.ruDescription;
        initialValuesRaw.ruSections = res.data[0]?.ruSections;
        initialValuesRaw.ruSubTitle = res.data[0]?.ruSubTitle;
        initialValuesRaw.enTitle = res.data[0]?.enTitle;
        initialValuesRaw.enDescription = res.data[0]?.enDescription;
        initialValuesRaw.enSections = res.data[0]?.enSections;
        initialValuesRaw.enSubTitle = res.data[0]?.enSubTitle;
        setInitialValues(initialValuesRaw);
        setId(res.data[0]?._id);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (values) => {
    const dataForm ={}
    dataForm.id= id;
    dataForm.azTitle=values.azTitle
    dataForm.enTitle=values.enTitle
    dataForm.ruTitle=values.ruTitle
    dataForm.azDescription=values.azDescription
    dataForm.enDescription=values.enDescription
    dataForm.ruDescription= values.ruDescription
    dataForm.azSubTitle=values.azSubTitle
    dataForm.enSubTitle=values.enSubTitle
    dataForm.ruSubTitle=values.ruSubTitle
    if (typeof values.azSections === "string") {
      dataForm.azSections=values.azSections.split(",")
    } else {
      dataForm.azSections=values.azSections
    }

    if (typeof values.enSections === "string") {
      dataForm.enSections=values.enSections.split(",")
    } else {
      dataForm.enSections=values.enSections
    }

    if (typeof values.ruSections === "string") {
      dataForm.ruSections=values.ruSections.split(",")
    } else {
      dataForm.ruSections=values.ruSections
    }
   
    try {
      const response = await axios.patch(`${process.env.REACT_APP_URL}/manager/career/experience`,dataForm);
      if (response.status == 200 || response.status == 201) {
        document.querySelector('.alertModalApi .text').innerHTML='Redaktə edildi';
        document.querySelector('.alertModalApi').classList.add('patch')
        document.querySelector('.alertModalApi').classList.remove('post')
                document.querySelector('.alertModalApi').classList.remove('delete')
                document.querySelector('.alertModalApi').classList.add('visible')
                document.querySelector('.alertModalApi').classList.remove('hidden')
              setTimeout(()=>{
                document.querySelector('.alertModalApi').classList.remove('visible')
                document.querySelector('.alertModalApi').classList.add('hidden')
             },1000)
        fetchData();
      }
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="middle-main">
      <div className="middle-main-comp">
        <div className="middle-main-comp-bottom">
          <p>/ Təcrübə</p>
        </div>
      </div>
      <div className="middle-main-bottom">
        {initialValues && (
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              onSubmitHandler(values);
            }}
          >
            {({ values, handleChange, handleSubmit}) => (
              <Form className="middle-main-bottom-form" onSubmit={handleSubmit}>
                <div className="middle-main-bottom-form-div">
                  <div className="middle-main-bottom-form-div-el">
                    <label>Başlıq (az)</label>
                    <Field
                      onChange={handleChange}
                      value={values.azTitle}
                      type="text"
                      name="azTitle"
                      required
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Mətn (az)</label>
                    <Field
                      onChange={handleChange}
                      value={values.azDescription}
                      type="text"
                      placeholder=""
                      name="azDescription"
                      required
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Bölmə (az)</label>
                    <Field
                      onChange={handleChange}
                      value={values.azSections}
                      type="text"
                      placeholder=""
                      name="azSections"
                      required
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Kiçik başlıq (az)</label>
                    <Field
                      onChange={handleChange}
                      value={values.azSubTitle}
                      type="text"
                      placeholder=""
                      name="azSubTitle"
                      required
                    />
                  </div>
                </div>
                <div className="middle-main-bottom-form-div">
                  <div className="middle-main-bottom-form-div-el">
                    <label>Başlıq (ru)</label>
                    <Field
                      onChange={handleChange}
                      value={values.ruTitle}
                      type="text"
                      name="ruTitle"
                      required
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Mətn (ru)</label>
                    <Field
                      onChange={handleChange}
                      value={values.ruDescription}
                      type="text"
                      name="ruDescription"
                      required
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Bölmə (ru)</label>
                    <Field
                      onChange={handleChange}
                      value={values.ruSections}
                      type="text"
                      placeholder=""
                      name="ruSections"
                      required
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Kiçik başlıq (ru)</label>
                    <Field
                      onChange={handleChange}
                      value={values.ruSubTitle}
                      type="text"
                      placeholder=""
                      name="ruSubTitle"
                      required
                    />
                  </div>
                </div>

                <div className="middle-main-bottom-form-div">
                  <div className="middle-main-bottom-form-div-el">
                    <label>Başlıq (en)</label>
                    <Field
                      onChange={handleChange}
                      value={values.enTitle}
                      type="text"
                      name="enTitle"
                      required
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Mətn (en)</label>
                    <Field
                      onChange={handleChange}
                      value={values.enDescription}
                      type="text"
                      name="enDescription"
                      required
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Bölmə (en)</label>
                    <Field
                      onChange={handleChange}
                      value={values.enSections}
                      type="text"
                      placeholder=""
                      name="enSections"
                      required
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Kiçik başlıq (en)</label>
                    <Field
                      onChange={handleChange}
                      value={values.enSubTitle}
                      type="text"
                      placeholder=""
                      name="enSubTitle"
                      required
                    />
                  </div>
                </div>
                <div className="middle-main-bottom-form-btn">
                  <button type="submit">Yadda saxla</button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default CareerExperience;
