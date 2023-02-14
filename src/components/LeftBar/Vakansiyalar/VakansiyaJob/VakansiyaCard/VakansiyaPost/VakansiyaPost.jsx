import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
const VakansiyaPost = ({}) => {
  const [initialValues,setinitialValues] =useState([
    {
      azTitle: "",
      azItems: [""],
      ruTitle: "",
      ruItems: [""],
      enTitle: "",
      enItems: [""],
    },
  ])
  return (
    <>
      {initialValues && (
        <Formik
          initialValues={initialValues}
          //   onSubmit={(values) => {
          //     onSubmitHandler(values);
          //   }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form className="modal-form1">
              <div className="modal-form-div">
                {values.map((vl, index) => (
                  <div className="modal-form-div-el">
                    <label>Title (az)</label>
                    <Field
                      onChange={handleChange}
                      defaultValue={vl.azTitle}
                      type="text"
                      name="azTitle"
                      required
                    />
                    <label>Items (az)</label>
                    <button onClick={()=>vl.azItems.push("")}>++++</button>
                    {vl?.azItems?.map((itm) => (
                      <Field
                        onChange={handleChange}
                        defaultValue={itm}
                        type="text"
                        name="azItems"
                        required
                      />
                    ))}

                    <label>Title (ru)</label>
                    <Field
                      onChange={handleChange}
                      defaultValue={vl.ruTitle}
                      type="text"
                      name="ruTitle"
                      required
                    />

                    <label>Items (ru)</label>
                    {vl?.ruItems?.map((itm) => (
                      <Field
                        onChange={handleChange}
                        defaultValue={itm}
                        type="text"
                        name="ruItems"
                        required
                      />
                    ))}

                    <label>Title (en)</label>
                    <Field
                      onChange={handleChange}
                      defaultValue={vl.enTitle}
                      type="text"
                      name="enTitle"
                      required
                    />

                    <label>Items (en)</label>
                    {vl?.enItems?.map((itm) => (
                      <Field
                        onChange={handleChange}
                        defaultValue={itm}
                        type="text"
                        name="enItems"
                        required
                      />
                    ))}     
                  </div>
                ))}
                <button onClick={()=>setinitialValues(...values,initialValues)}>+++</button>
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

export default VakansiyaPost;
