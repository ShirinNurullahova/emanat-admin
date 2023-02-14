import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
const VakansiyaPostItem = ({ id, setButton, button }) => {
  const  initialValues =[
    {
    azTitle:'',
    azItems:[],
    ruTitle:'',
    ruItems:[],
    enTitle:'',
    enItems:[],
  }
  ]

//   const onSubmitHandler = async (values) => {
//     const dataForm = {};
//     dataForm.id = id;
//     dataForm.data = values;
//     dataForm.page = "Career";
//        if (button) {
//             try {
//                 const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/vacation/job`, dataForm)
//                 if (response.status == 200) {

//                 }

//             } catch (error) {
//                 alert("error")
//             }
//         }

//         setButton(false)
//   };
  return (
    <>
      {initialValues && (
        <Formik
          initialValues={initialValues}
        //   onSubmit={(values) => {
        //     onSubmitHandler(values);
        //   }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
          }) => (
            <Form className="modal-form1">
              <div className="modal-form-div">
                  <div className="modal-form-div-el">
                    <label>Title (az)</label>
                    <Field
                      onChange={handleChange}
                      defaultValue={values.azTitle}
                      type="text"
                      name="azTitle"
                      required
                    />
                    <label>Items (az)</label>
                    <Field
                      onChange={handleChange}
                      defaultValue={values.azItems}
                      type="text"
                      name="azItems"
                      required
                    /> 
                    <label>Title (ru)</label>
                    <Field
                      onChange={handleChange}
                      defaultValue={values.ruTitle}
                      type="text"
                      name="ruTitle"
                      required
                    />

                    <label>Items (ru)</label>
                            <Field
                            onChange={handleChange}
                            defaultValue={values.ruItems}
                            type="text"
                            name="ruItems"
                            required
                          /> 
    
                    <label>Title (en)</label>
                    <Field
                      onChange={handleChange}
                      defaultValue={values.enTitle}
                      type="text"
                      name="enTitle"
                      required
                    />

                    <label>Items (en)</label>
                            <Field
                            onChange={handleChange}
                            defaultValue={values.enItems}
                            type="text"
                            name="enItems"
                            required
                          /> 
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

export default VakansiyaPostItem;
