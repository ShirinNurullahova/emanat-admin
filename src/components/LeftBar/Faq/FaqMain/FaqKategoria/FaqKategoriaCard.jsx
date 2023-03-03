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
        if (response.status == 200 || response.status == 201) {
          document.querySelector('.alertModalApi .text').innerHTML='Redaktə Edildi';
          document.querySelector('.alertModalApi').classList.add('patch')
          document.querySelector('.alertModalApi').classList.remove('post')
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
            <Form className="modal-form">
              <div className="modal-form-div">
                <div className="modal-form-div-el">
                  <label>Başlıq (az)</label>
                  <Field
                    onChange={(e) => handleChange(e, values.data)}
                    defaultValue={values.data.azTitle}
                    type="text"
                    name="azTitle"
                    required
                  />
                  <label>Başlıq (ru)</label>
                  <Field
                    onChange={(e) => handleChange(e, values.data)}
                    defaultValue={values.data.ruTitle}
                    type="text"
                    name="ruTitle"
                    required
                  />
                  <label>Başlıq (en)</label>
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
