import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const CareerWhyEmanat = () => {
  const [id, setId] = useState("");
  const [initialValues, setInitialValues] = useState(null);
  const initialValuesRaw = {};

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/career/eManat`)
      .then((res) => {
        initialValuesRaw.azTitle = res.data[0]?.azTitle;
        initialValuesRaw.azDescription = res.data[0]?.azDescription;
        initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
        initialValuesRaw.ruDescription = res.data[0]?.ruDescription;
        initialValuesRaw.enTitle = res.data[0]?.enTitle;
        initialValuesRaw.enDescription = res.data[0]?.enDescription;
        initialValuesRaw.CareerPageEmanatImage = res.data[0]?.images[0]?.url;
        initialValuesRaw.CareerPageHeaderIcon = res.data[0]?.icon;
        setInitialValues(initialValuesRaw);
        setId(res.data[0]?._id);
      })
      .catch((err) => { });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (values) => {
    const dataForm = new FormData();
    dataForm.append("id", id);
    dataForm.append("azTitle", values.azTitle);
    dataForm.append("enTitle", values.enTitle);
    dataForm.append("ruTitle", values.ruTitle);

    if (typeof values.azDescription === "string") {
      values.azDescription.split(",").map(item => {
        dataForm.append("azDescription", item);
      })
    } else {
      values.azDescription.map(item => {
        dataForm.append("azDescription", item);
      })
    }

    if (typeof values.enDescription === "string") {
      values.enDescription.split(",").map(item => {
        dataForm.append("enDescription", item);
      })
    } else {
      values.enDescription.map(item => {
        dataForm.append("enDescription", item);
      })
    }

    if (typeof values.ruDescription === "string") {
      values.ruDescription.split(",").map(item => {
        dataForm.append("ruDescription", item);
      })
    } else {
      values.ruDescription.map(item => {
        dataForm.append("ruDescription", item);
      })
    }

    if (values.image) {
      dataForm.append("CareerPageEmanatImage", values.image);
    } else {
      dataForm.append("CareerPageEmanatImage", values.CareerPageEmanatImage);
    }
    if (values.icon) {
      dataForm.append("CareerPageHeaderIcon", values.icon);
    } else {
      dataForm.append("CareerPageHeaderIcon", values.CareerPageHeaderIcon);
    }

    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_URL}/admin/career/eManat`,
        dataForm
      );
    } catch (error) { }
  };

  return (
    <div className="middle-main">
      <div className="middle-main-comp">
        <div className="middle-main-comp-bottom">
          <p>/ niyə emanat</p>
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
            {({ values, handleChange, handleSubmit, setFieldValue }) => (
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

                  <div className="middle-main-bottom-form-div-el">
                    <label>Logo</label>
                    <Field
                      value={values.filename}
                      onChange={(e) =>
                        setFieldValue("icon", e.currentTarget.files[0])
                      }
                      type="file"
                      name="filename"
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

export default CareerWhyEmanat;
