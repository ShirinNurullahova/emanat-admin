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
                  if (response.status == 200 || response.status == 201) {
                    document.querySelector('.alertModalApi .text').innerHTML='Əlavə Edildi';
                    document.querySelector('.alertModalApi').classList.add('post')
                    document.querySelector('.alertModalApi').classList.remove('patch')
                    document.querySelector('.alertModalApi').classList.remove('delete')
                    document.querySelector('.alertModalApi').classList.add('visible')
                    document.querySelector('.alertModalApi').classList.remove('hidden')
                  setTimeout(()=>{
                    document.querySelector('.alertModalApi').classList.remove('visible')
                    document.querySelector('.alertModalApi').classList.add('hidden')
                 },1000)
                }

              } catch (error) {
                  alert("error")
              }
          }

          setButton(false)
    };

    const cancelFunction =()=>{
      setButton(false);
    } 

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
            <Form className="modal-form">
              <div className="modal-form-div">
              <div className="modal-form-cancel" onClick={() => cancelFunction()}>
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path fill="white" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                                    </svg>
                                </div>
                    <div className="modal-form-div-el">
                      <label>Sual (az)</label>
                      <Field
                        onChange={handleChange}
                        defaultValue={values.azQuestion}
                        type="text"
                        name="azQuestion"
                        required
                      />
                      <label>Cavab (az)</label>
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
