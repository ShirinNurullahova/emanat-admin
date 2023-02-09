import "../Form.scss";
import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
const MarketingCooperation = () => {
  const [id, setId] = useState("");
  const [initialValues, setInitialValues] = useState(null);
  const initialValuesRaw = {};

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/marketingPage`)
      .then((res) => {
        console.log(res.data);
        initialValuesRaw.azTitle = res.data[0]?.azTitle;
        initialValuesRaw.azDescription = res.data[0]?.azDescription;
        initialValuesRaw.azSubTitle = res.data[0]?.azSubTitle;
        initialValuesRaw.azFooterHead = res.data[0]?.azFooterHead;
        initialValuesRaw.azFooterDesc = res.data[0]?.azFooterDesc;
        initialValuesRaw.ruTitle = res.data[0]?.ruTitle;
        initialValuesRaw.ruDescription = res.data[0]?.ruDescription;
        initialValuesRaw.ruSubTitle = res.data[0]?.ruSubTitle;
        initialValuesRaw.ruFooterHead = res.data[0]?.ruFooterHead;
        initialValuesRaw.ruFooterDesc = res.data[0]?.ruFooterDesc;
        initialValuesRaw.enTitle = res.data[0]?.enTitle;
        initialValuesRaw.enDescription = res.data[0]?.enDescription;
        initialValuesRaw.enSubTitle = res.data[0]?.enSubTitle;
        initialValuesRaw.enFooterHead = res.data[0]?.enFooterHead;
        initialValuesRaw.enFooterDesc = res.data[0]?.enFooterDesc;
        initialValuesRaw.numbers = res.data[0]?.numbers;
        initialValuesRaw.email = res.data[0]?.email;
        initialValuesRaw.MarketingPageImage = res.data[0]?.images[0]?.url;
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
    const dataForm = new FormData();
    dataForm.append("id", id);
    dataForm.append("azTitle", values.azTitle);
    dataForm.append("enTitle", values.enTitle);
    dataForm.append("ruTitle", values.ruTitle);
    dataForm.append("azDescription", values.azDescription);
    dataForm.append("enDescription", values.enDescription);
    dataForm.append("ruDescription", values.ruDescription);
    dataForm.append("azSubTitle", values.azSubTitle);
    dataForm.append("ruSubTitle", values.ruSubTitle);
    dataForm.append("enSubTitle", values.enSubTitle);
    dataForm.append("azFooterHead", values.azFooterHead);
    dataForm.append("enFooterHead", values.enFooterHead);
    dataForm.append("ruFooterHead", values.ruFooterHead);
    dataForm.append("azFooterDesc", values.azFooterDesc);
    dataForm.append("enFooterDesc", values.enFooterDesc);
    dataForm.append("ruFooterDesc", values.ruFooterDesc);
    dataForm.append("numbers", values.numbers);
    dataForm.append("email", values.email);
    if (values.image) {
      dataForm.append("MarketingPageImage", values.image);
    } else {
      dataForm.append("MarketingPageImage", values.MarketingPageImage);
    }
    console.log(dataForm);
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_URL}/admin/marketingPage`,
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
    <div className="form">
      <div className="middle-main">
        <div className="middle-main-comp">
          <div className="middle-main-comp-p">
            <p>Marketing</p>
          </div>
          <div className="middle-main-comp-bottom">
            <p>/ Marketing</p>
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
                <Form
                  className="middle-main-bottom-form"
                  onSubmit={handleSubmit}
                >
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
                      <label>SubTitle (az)</label>
                      <Field
                        onChange={handleChange}
                        value={values.azSubTitle}
                        type="text"
                        placeholder=""
                        name="azSubTitle"
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>FooterHead (az)</label>
                      <Field
                        onChange={handleChange}
                        value={values.azFooterHead}
                        type="text"
                        placeholder=""
                        name="azFooterHead"
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>FooterDesc (az)</label>
                      <Field
                        onChange={handleChange}
                        value={values.azFooterDesc}
                        type="text"
                        placeholder=""
                        name="azFooterDesc"
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
                      <label>SubTitle (ru)</label>
                      <Field
                        onChange={handleChange}
                        value={values.ruSubTitle}
                        type="text"
                        placeholder=""
                        name="ruSubTitle"
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>FooterHead (ru)</label>
                      <Field
                        onChange={handleChange}
                        value={values.ruFooterHead}
                        type="text"
                        placeholder=""
                        name="ruFooterHead"
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>FooterDesc (ru)</label>
                      <Field
                        onChange={handleChange}
                        value={values.ruFooterDesc}
                        type="text"
                        placeholder=""
                        name="ruFooterDesc"
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
                      <label>SubTitle (en)</label>
                      <Field
                        onChange={handleChange}
                        value={values.enSubTitle}
                        type="text"
                        placeholder=""
                        name="enSubTitle"
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>FooterHead (en)</label>
                      <Field
                        onChange={handleChange}
                        value={values.enFooterHead}
                        type="text"
                        placeholder=""
                        name="enFooterHead"
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>FooterDesc (en)</label>
                      <Field
                        onChange={handleChange}
                        value={values.enFooterDesc}
                        type="text"
                        placeholder=""
                        name="enFooterDesc"
                      />
                    </div>
                  </div>
                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Numbers</label>
                      <Field
                        onChange={handleChange}
                        value={values.numbers}
                        type="text"
                        placeholder=""
                        name="numbers"
                      />
                    </div>
                  </div>
                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Email</label>
                      <Field
                        onChange={handleChange}
                        value={values.email}
                        type="text"
                        placeholder=""
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Image</label>
                      <Field
                        value={values.filename}
                        onChange={(e) =>
                          setFieldValue("image", e.currentTarget.files[0])
                        }
                        type="file"
                        name="filename"
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
    </div>
  );
};

export default MarketingCooperation;
