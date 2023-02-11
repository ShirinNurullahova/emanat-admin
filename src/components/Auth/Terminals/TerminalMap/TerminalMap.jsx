import "../Terminal.scss";
import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
const TerminalMap = () => {
  const [id, setId] = useState("");
  const [initialValues, setInitialValues] = useState(null);
  const initialValuesRaw = {};

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/map/head`)
      .then((res) => {
        initialValuesRaw.azTitle = res.data[0]?.azTitle;
        initialValuesRaw.azDescription = res.data[0]?.azDescription;
        initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
        initialValuesRaw.ruDescription = res.data[0]?.ruDescription;
        initialValuesRaw.enTitle = res.data[0]?.enTitle;
        initialValuesRaw.enDescription = res.data[0]?.enDescription;
        setInitialValues(initialValuesRaw);
        setId(res.data[0]?._id);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (values) => {
    const dataForm = {}
    dataForm.id= id
    dataForm.azTitle=values.azTitle
    dataForm.enTitle=values.enTitle
    dataForm.ruTitle=values.ruTitle
    dataForm.azDescription=values.azDescription
    dataForm.enDescription=values.enDescription
    dataForm.ruDescription=values.ruDescription
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_URL}/admin/map/head`,
        dataForm
      );
      if (response.status == 200) {
        fetchData();
      }
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="terminal">
      <div className="middle-main">
        <div className="middle-main-comp">
          <div className="middle-main-comp-p">
            <p>Xəritə</p>
          </div>
          <div className="middle-main-comp-bottom">
            <p>/ əsas</p>
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
                <Form
                  className="middle-main-bottom-form"
                  onSubmit={handleSubmit}
                >
                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Başlıq (az)</label>
                      <Field
                        onChange={handleChange}
                        value={values.azTitle}
                        type="text"
                        name="azTitle"
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>Təsvir (az)</label>
                      <Field
                        onChange={handleChange}
                        value={values.azDescription}
                        type="text"
                        placeholder=""
                        name="azDescription"
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
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>Təsvir (ru)</label>
                      <Field
                        onChange={handleChange}
                        value={values.ruDescription}
                        type="text"
                        name="ruDescription"
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
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>Təsvir (en)</label>
                      <Field
                        onChange={handleChange}
                        value={values.enDescription}
                        type="text"
                        name="enDescription"
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
    </div>
  );
};

export default TerminalMap;