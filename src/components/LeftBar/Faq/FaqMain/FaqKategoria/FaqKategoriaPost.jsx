import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
const FaqKategoriaPost = ({id}) => {
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
    // const onSubmitHandler = async (values) => {
    //     console.log(values.data);
    //   const dataForm = {};
    //   dataForm.id = id;
    // //   dataForm.data = values;
    // //   dataForm.page = "Career";
    // //      if (button) {
    // //           try {
    // //               const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/faq/main`, dataForm)
    // //               if (response.status == 200) {

    // //               }

    // //           } catch (error) {
    // //               alert("error")
    // //           }
    // //       }

    // //       setButton(false)
    // };

//   const handleChange = (e, vl) => {
//     let name = e.target.name;
//     vl[[name]] = e.target.value;
//     console.log(vl);
//   };

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
          }) => (
            <Form className="modal-form1">
              <div className="modal-form-div">
                    <div className="modal-form-div-el">
                      <label>Question (az)</label>
                      <Field
                        onChange={(e) => handleChange(e, vl)}
                        defaultValue={values.azQuestion}
                        type="text"
                        name="azQuestion"
                        required
                      />
                      <label>Answer (az)</label>
                      <Field
                        onChange={(e) => handleChange(e, vl)}
                        defaultValue={values.azAnswer}
                        type="text"
                        name="azAnswer"
                        required
                      />
                      <label>Question (ru)</label>
                      <Field
                        onChange={(e) => handleChange(e, vl)}
                        defaultValue={values.ruQuestion}
                        type="text"
                        name="ruQuestion"
                        required
                      />

                      <label>Answer (ru)</label>
                      <Field
                        onChange={(e) => handleChange(e, vl)}
                        defaultValue={values.ruAnswer}
                        type="text"
                        name="ruAnswer"
                        required
                      />
                      <label>Question (en)</label>
                      <Field
                        onChange={(e) => handleChange(e, vl)}
                        defaultValue={values.enQuestion}
                        type="text"
                        name="enQuestion"
                        required
                      />

                      <label>Answer (en)</label>
                      <Field
                        onChange={(e) => handleChange(e, vl)}
                        defaultValue={values.enAnswer}
                        type="text"
                        name="enAnswer"
                        required
                      />
                      {/* <label>Şəkil</label>
                      <Field
                        value={values.filename}
                        // onChange={(e) =>
                        //   setFieldValue("image", e.currentTarget.files[0])
                        // }
                        type="file"
                        name="filename"
                      /> */}
                    </div>
              </div>

              <div className="modal-form-btn">
                <button type="submit">Add</button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default FaqKategoriaPost;
