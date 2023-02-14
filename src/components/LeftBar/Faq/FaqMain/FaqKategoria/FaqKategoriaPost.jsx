import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
const FaqKategoriaPost = ({id , button , setButton}) => {
    const initialValues={
        id:id,
        azQuestion:'',
        azAnswer:'',
        enQuestion:'',
        enAnswer:'',
        ruQuestion:'',
        ruAnswer:'',
        FaqMainCategoriesItemImage:''
    }
    const onSubmitHandler = async (values) => {

      const dataForm = new FormData()
        dataForm.append('id', id)
        dataForm.append('azQuestion', values. azQuestion)
        dataForm.append('azAnswer', values.azAnswer)
        dataForm.append('enQuestion', values.enQuestion)
        dataForm.append('enAnswer', values.enAnswer)
        dataForm.append('ruQuestion', values.ruQuestion)
        dataForm.append('ruAnswer', values.ruAnswer)
        if (values.image) {
            dataForm.append('FaqMainCategoriesItemImage', values.image)
        } else {
            dataForm.append('FaqMainCategoriesItemImage', values.FaqMainCategoriesItemImage)
        }
         if (button) {
              try {
                  const response = await axios.post(`${process.env.REACT_APP_URL}/admin/faq/main/categories/item`, dataForm)
                  if (response.status == 200) {

                  }

              } catch (error) {
                  alert("error")
              }
          }

          setButton(false)
    };

 

  return (
    <>
      {initialValues && (
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
            <Form className="modal-form1">
              <div className="modal-form-div">
                    <div className="modal-form-div-el">
                      <label>Question (az)</label>
                      <Field
                        onChange={handleChange}
                        defaultValue={values.azQuestion}
                        type="text"
                        name="azQuestion"
                        required
                      />
                      <label>Answer (az)</label>
                      <Field
                       onChange={handleChange}
                        defaultValue={values.azAnswer}
                        type="text"
                        name="azAnswer"
                        required
                      />
                      <label>Question (ru)</label>
                      <Field
                         onChange={handleChange}
                        defaultValue={values.ruQuestion}
                        type="text"
                        name="ruQuestion"
                        required
                      />

                      <label>Answer (ru)</label>
                      <Field
                onChange={handleChange}
                        defaultValue={values.ruAnswer}
                        type="text"
                        name="ruAnswer"
                        required
                      />
                      <label>Question (en)</label>
                      <Field
                       onChange={handleChange}
                        defaultValue={values.enQuestion}
                        type="text"
                        name="enQuestion"
                        required
                      />

                      <label>Answer (en)</label>
                      <Field
                        onChange={handleChange}
                        defaultValue={values.enAnswer}
                        type="text"
                        name="enAnswer"
                        required
                      />
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
              </div>

              <div className="modal-form-btn">
                <button type="submit">Əlavə et</button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default FaqKategoriaPost;
