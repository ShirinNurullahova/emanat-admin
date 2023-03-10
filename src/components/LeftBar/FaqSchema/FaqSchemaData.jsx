import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
const FaqSchemaData = () => {
  const [initialValues, setInitialValues] = useState(null);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/faqSchema`)
      .then((res) => {
        setInitialValues(res.data[0]);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchData();
  }, []);

    const onSubmitHandler = async (values) => {
      const dataForm = {};
      dataForm.id=values._id
      dataForm.data=values.data
      try {
        const response = await axios.patch(
          `${process.env.REACT_APP_URL}/admin/faqSchema`,
          dataForm
        );
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
          fetchData()
      }
      } catch (error) {
        alert("error");
      }
    };

    const handleChange= (e, dt) => {
          let name = e.target.name;
          dt[[name]] = e.target.value;
        };
  return (
    <>
      <div className="middle-main">
        <div className="middle-main-bottom">
          {initialValues && (
            <Formik
              initialValues={initialValues}
                onSubmit={(values) => {
                  onSubmitHandler(values);
                }}
            >
              {({ values, handleSubmit }) => (
                <Form
                  className="middle-main-bottom-form"
                  onSubmit={handleSubmit}
                >
                  {values?.data?.map((dt) =>
                      <>
                        <div className="middle-main-bottom-form-div">
                          <div className="middle-main-bottom-form-div-el">
                            <label>Question (az)</label>
                            <Field
                              onChange={(e)=>handleChange(e,dt)}
                              defaultValue={dt?.azQuestion}
                              type="text"
                              name="azQuestion"
                              required
                            />
                          </div>
                          <div className="middle-main-bottom-form-div-el">
                            <label>Answer (az)</label>
                            <Field
                               onChange={(e)=>handleChange(e,dt)}
                              defaultValue={dt?.azAnswer}
                              type="text"
                              placeholder=""
                              name="azAnswer"
                              required
                            />
                          </div>
                        </div>
                        <div className="middle-main-bottom-form-div">
                          <div className="middle-main-bottom-form-div-el">
                            <label>Question (en)</label>
                            <Field
                              onChange={(e)=>handleChange(e,dt)}
                              defaultValue={dt?.enQuestion}
                              type="text"
                              name="enQuestion"
                              required
                            />
                          </div>
                          <div className="middle-main-bottom-form-div-el">
                            <label>Answer (en)</label>
                            <Field
                               onChange={(e)=>handleChange(e,dt)}
                              defaultValue={dt?.enAnswer}
                              type="text"
                              name="enAnswer"
                              required
                            />
                          </div>
                        </div>

                        <div className="middle-main-bottom-form-div">
                          <div className="middle-main-bottom-form-div-el">
                            <label>Question (ru)</label>
                            <Field
                             onChange={(e)=>handleChange(e,dt)}
                              defaultValue={dt?.ruQuestion}
                              type="text"
                              name="ruQuestion"
                              required
                            />
                          </div>
                          <div className="middle-main-bottom-form-div-el">
                            <label>Answer (ru)</label>
                            <Field
                              onChange={(e)=>handleChange(e,dt)}
                              defaultValue={dt?.ruAnswer}
                              type="text"
                              name="ruAnswer"
                              required
                            />
                          </div>
                        </div>
                     <div className="middle-main-bottom-form-btn">
                            <button type="submit">
                              Yadda saxla
                            </button>
                        </div>
                    </>
                  )}
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
};

export default FaqSchemaData;
