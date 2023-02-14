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
      .catch((err) => {});
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
            <p>Marketinq</p>
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
              {({ values, handleChange, handleSubmit, setFieldValue }) => (
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
                    <div className="middle-main-bottom-form-div-el">
                      <label>Son başlıq (az)</label>
                      <Field
                        onChange={handleChange}
                        value={values.azFooterHead}
                        type="text"
                        placeholder=""
                        name="azFooterHead"
                        required
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>Son Mətn (az)</label>
                      <Field
                        onChange={handleChange}
                        value={values.azFooterDesc}
                        type="text"
                        placeholder=""
                        name="azFooterDesc"
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
                    <div className="middle-main-bottom-form-div-el">
                      <label>Son başlıq (ru)</label>
                      <Field
                        onChange={handleChange}
                        value={values.ruFooterHead}
                        type="text"
                        placeholder=""
                        name="ruFooterHead"
                        required
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>Son Mətn(ru)</label>
                      <Field
                        onChange={handleChange}
                        value={values.ruFooterDesc}
                        type="text"
                        placeholder=""
                        name="ruFooterDesc"
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
                    <div className="middle-main-bottom-form-div-el">
                      <label>Son başlıq (en)</label>
                      <Field
                        onChange={handleChange}
                        value={values.enFooterHead}
                        type="text"
                        placeholder=""
                        name="enFooterHead"
                        required
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>Son Mətn (en)</label>
                      <Field
                        onChange={handleChange}
                        value={values.enFooterDesc}
                        type="text"
                        placeholder=""
                        name="enFooterDesc"
                        required
                      />
                    </div>
                  </div>
                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Nömrələr</label>
                      <Field
                        onChange={handleChange}
                        value={values.numbers}
                        type="text"
                        placeholder=""
                        name="numbers"
                        required
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
                        required
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

export default MarketingCooperation;
