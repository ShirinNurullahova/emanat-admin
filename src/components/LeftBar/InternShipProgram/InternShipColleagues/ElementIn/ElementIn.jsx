import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const ElementIn = ({ initialValues }) => {
  const onSubmitHandler = async (values) => {
    const dataForm = new FormData();
    dataForm.append("id", values._id);
    dataForm.append("data", JSON.stringify(values.data));
    if (values.image) {
      dataForm.append("InternshipProgramColleagueImage", values.image);
    } else {
      dataForm.append("InternshipProgramColleagueImage", values.InternshipProgramColleagueImage);
    }
   
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_URL}/admin/internship/colleagues/`,
        dataForm
      );
      if (response.status == 200) {
      }
    } catch (error) {
      alert("error");
    }
  };

  const handleChange = (e, item) => {
    let name = e.target.name;
    item[name] = e.target.value;
  };

  return (
    <div>
      <div className="middle-main">
        <div className="middle-main-bottom">
          {initialValues && (
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                onSubmitHandler(values);
              }}
            >
              {({
                values,
                // handleChange,
                handleSubmit,
                setFieldValue,
              }) => (
                <Form className="middle-main-bottom-form">
                  {initialValues.data.map((item, index) => {
                    return (
                      <div className="middle-main-bottom-form-div">
                        <div className="middle-main-bottom-form-div-el">
                          <label>Başlıq (az)</label>
                          <Field
                            onChange={(e) => handleChange(e, item)}
                            id={index}
                            defaultValue={item.azKey}
                            type="text"
                            name="azKey"
                          />
                        </div>
                        <div className="middle-main-bottom-form-div-el">
                          <label>Mətn (az)</label>
                          <Field
                            onChange={(e) => handleChange(e, item)}
                            id={index}
                            defaultValue={item.azValue}
                            type="text"
                            placeholder=""
                            name="azValue"
                          />
                        </div>
                        <div className="middle-main-bottom-form-div-el">
                          <label>Başlıq (ru)</label>
                          <Field
                            onChange={(e) => handleChange(e, item)}
                            id={index}
                            defaultValue={item.ruKey}
                            type="text"
                            name="ruKey"
                          />
                        </div>
                        <div className="middle-main-bottom-form-div-el">
                          <label>Mətn (ru)</label>
                          <Field
                            onChange={(e) => handleChange(e, item)}
                            id={index}
                            defaultValue={item.ruValue}
                            type="text"
                            name="ruValue"
                          />
                        </div>
                        <div className="middle-main-bottom-form-div-el">
                          <label>Başlıq (en)</label>
                          <Field
                            onChange={(e) => handleChange(e, item)}
                            id={index}
                            defaultValue={item.enKey}
                            type="text"
                            name="enKey"
                          />
                        </div>
                        <div className="middle-main-bottom-form-div-el">
                          <label>Mətn (en)</label>
                          <Field
                            onChange={(e) => handleChange(e, item)}
                            id={index}
                            defaultValue={item.enValue}
                            type="text"
                            name="enValue"
                          />
                        </div>
                      </div>
                    );
                  })}

                  <div className="middle-main-bottom-form-div-el">
                    <label>Şəkil</label>
                    <Field
                      value={values.filename}
                      onChange={(e) =>
                        setFieldValue("image", e.currentTarget.files[0])
                      }
                      type="file"
                      name="filename"
                    />
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

export default ElementIn;
