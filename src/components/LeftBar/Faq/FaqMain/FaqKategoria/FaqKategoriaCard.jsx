import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
const FaqKategoriaCard = ({ data, setButton, button }) => {
  const [initialValues, setInitialValues] = useState({ data });
  const onSubmitHandler = async (values) => {
    const dataForm = {};
    dataForm.azTitle = values.data.azTitle
    dataForm.enTitle = values.data.enTitle
    dataForm.ruTitle = values.data.ruTitle
    dataForm.id = values.data._id


    if (button) {
      try {
        const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/faq/main/categories`, dataForm)
        if (response.status == 200) {

        }

      } catch (error) {
        alert("error")
      }
    }

    setButton(false)
  };

  const handleChange = (e, vl) => {
    let name = e.target.name;
    vl[[name]] = e.target.value;
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
            // handleChange
          }) => (
            <Form className="modal-form1">
              <div className="modal-form-div">
                <div className="modal-form-div-el">
                  <label>Title (az)</label>
                  <Field
                    onChange={(e) => handleChange(e, values.data)}
                    defaultValue={values.data.azTitle}
                    type="text"
                    name="azTitle"
                    required
                  />
                  <label>Title (ru)</label>
                  <Field
                    onChange={(e) => handleChange(e, values.data)}
                    defaultValue={values.data.ruTitle}
                    type="text"
                    name="ruTitle"
                    required
                  />
                  <label>Title (en)</label>
                  <Field
                    onChange={(e) => handleChange(e, values.data)}
                    defaultValue={values.data.enTitle}
                    type="text"
                    name="enTitle"
                    required
                  />
                </div>
              </div>

              <div className="modal-form-btn">
                <button type="submit">Redaktə et</button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default FaqKategoriaCard;
