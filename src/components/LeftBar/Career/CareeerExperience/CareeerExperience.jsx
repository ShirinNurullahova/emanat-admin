import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const CareerExperience = () => {
  const [id, setId] = useState("");
  const [initialValues, setInitialValues] = useState(null);
  const initialValuesRaw = {};

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/career/experience`)
      .then((res) => {
        console.log(res.data);
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
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (values) => {
    console.log(values);
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
    console.log(dataForm);
    try {
      const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/career/experience`,dataForm);
      if (response.status == 200) {
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
          <p>/ Experience</p>
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
                    <label>Title (az)</label>
                    <Field
                      onChange={handleChange}
                      value={values.azTitle}
                      type="text"
                      name="azTitle"
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Description (az)</label>
                    <Field
                      onChange={handleChange}
                      value={values.azDescription}
                      type="text"
                      placeholder=""
                      name="azDescription"
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Sections (az)</label>
                    <Field
                      onChange={handleChange}
                      value={values.azSections}
                      type="text"
                      placeholder=""
                      name="azSections"
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>SubTitle (az)</label>
                    <Field
                      onChange={handleChange}
                      value={values.azSubTitle}
                      type="text"
                      placeholder=""
                      name="azSubTitle"
                    />
                  </div>
                </div>
                <div className="middle-main-bottom-form-div">
                  <div className="middle-main-bottom-form-div-el">
                    <label>Title (ru)</label>
                    <Field
                      onChange={handleChange}
                      value={values.ruTitle}
                      type="text"
                      name="ruTitle"
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Description (ru)</label>
                    <Field
                      onChange={handleChange}
                      value={values.ruDescription}
                      type="text"
                      name="ruDescription"
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Sections (ru)</label>
                    <Field
                      onChange={handleChange}
                      value={values.ruSections}
                      type="text"
                      placeholder=""
                      name="ruSections"
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>SubTitle (ru)</label>
                    <Field
                      onChange={handleChange}
                      value={values.ruSubTitle}
                      type="text"
                      placeholder=""
                      name="ruSubTitle"
                    />
                  </div>
                </div>

                <div className="middle-main-bottom-form-div">
                  <div className="middle-main-bottom-form-div-el">
                    <label>Title (en)</label>
                    <Field
                      onChange={handleChange}
                      value={values.enTitle}
                      type="text"
                      name="enTitle"
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Description (en)</label>
                    <Field
                      onChange={handleChange}
                      value={values.enDescription}
                      type="text"
                      name="enDescription"
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>Sections (en)</label>
                    <Field
                      onChange={handleChange}
                      value={values.enSections}
                      type="text"
                      placeholder=""
                      name="enSections"
                    />
                  </div>
                  <div className="middle-main-bottom-form-div-el">
                    <label>SubTitle (en)</label>
                    <Field
                      onChange={handleChange}
                      value={values.enSubTitle}
                      type="text"
                      placeholder=""
                      name="enSubTitle"
                    />
                  </div>
                </div>
                <div className="middle-main-bottom-form-btn">
                  <button type="submit">Save</button>
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
