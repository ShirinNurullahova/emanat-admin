import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const EditModalCategories = ({ setButton, button, data }) => {
  const [initialValues, setInitialValues] = useState(data);

  const onSubmitHandler = async (values) => {
    const dataForm = new FormData();
    dataForm.append("id", values._id);
    dataForm.append("azAnswer", values.azAnswer);
    dataForm.append("azQuestion", values.azQuestion);
    dataForm.append("enQuestion", values.enQuestion);
    dataForm.append("enAnswer", values.enAnswer);
    dataForm.append("ruQuestion", values.ruQuestion);
    dataForm.append("ruAnswer", values.ruAnswer);
    if (values.azImages) {
      dataForm.append("FaqItemImage", values.azImages);
    } else {
      dataForm.append("FaqItemImage", values.azFaqItemImage.url);
    }
    if (values.enImages) {
        dataForm.append("enFaqItemImage", values.enImages);
      } else {
        dataForm.append("enFaqItemImage", values.enFaqItemImage.url);
      }
      if (values.ruImages) {
        dataForm.append("ruFaqItemImage", values.ruImages);
      } else {
        dataForm.append("ruFaqItemImage", values.ruFaqItemImage.url);
      }
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_URL}/admin/faq/main/categories/item`,
        dataForm
      );
      if (response.status == 200 || response.status == 201) {
        document.querySelector(".alertModalApi .text").innerHTML =
          "Redaktə Edildi";
        document.querySelector(".alertModalApi").classList.add("patch");
        document.querySelector(".alertModalApi").classList.remove("post");
        document.querySelector(".alertModalApi").classList.remove("delete");
        document.querySelector(".alertModalApi").classList.add("visible");
        document.querySelector(".alertModalApi").classList.remove("hidden");
        setTimeout(() => {
          document.querySelector(".alertModalApi").classList.remove("visible");
          document.querySelector(".alertModalApi").classList.add("hidden");
        }, 1000);
      }
    } catch (error) {
      alert("error");
    }

    setButton(false);
  };
  // const handleChange = (e, vl) => {
  //     let name = e.target.name;
  //     vl[[name]] = e.target.value;
  //   };

  return (
    <div className="xeber1">
      {initialValues && (
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {({ values, setFieldValue, handleChange, handleSubmit }) => (
            <Form className="modal-form">
              <div className="modal-form-div">
                <div className="modal-form-div-el">
                  <label>Sual (az)</label>
                  <Field
                    onChange={handleChange}
                    defaultValue={values.azQuestion}
                    type="text"
                    name="azQuestion"
                    required
                  />
                  <label>Cavab (en)</label>
                  <Field
                    onChange={handleChange}
                    defaultValue={values.azAnswer}
                    type="text"
                    name="azAnswer"
                    required
                  />
                  <label>Sual (ru)</label>
                  <Field
                    onChange={handleChange}
                    defaultValue={values.ruQuestion}
                    type="text"
                    name="ruQuestion"
                    required
                  />
                  <label>Cavab (ru)</label>
                  <Field
                    onChange={handleChange}
                    defaultValue={values.ruAnswer}
                    type="text"
                    name="ruAnswer"
                    required
                  />
                  <label>Sual (en)</label>
                  <Field
                    onChange={handleChange}
                    defaultValue={values.enQuestion}
                    type="text"
                    name="enQuestion"
                    required
                  />
                  <label>Cavab (en)</label>
                  <Field
                    onChange={handleChange}
                    defaultValue={values.enAnswer}
                    type="text"
                    name="enAnswer"
                    required
                  />

                  <label>Şəkil (az)</label>
                  <Field
                    value={values.filename}
                    onChange={(e) =>
                      setFieldValue("azImages", e.currentTarget.files[0])
                    }
                    type="file"
                    name="azImages"
                  />

                  <label>Şəkil (en)</label>
                  <Field
                    value={values.filename}
                    onChange={(e) =>
                      setFieldValue("enImages", e.currentTarget.files[0])
                    }
                    type="file"
                    name="enImages"
                  />
                  <label>Şəkil (ru)</label>
                  <Field
                    value={values.filename}
                    onChange={(e) =>
                      setFieldValue("ruImages", e.currentTarget.files[0])
                    }
                    type="file"
                    name="ruImages"
                  />
                  <div className="modal-form-btn">
                    <button type="submit">Edit</button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default EditModalCategories;
