import "./ElementCard.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import '../ElementCard/ElementCard.scss'
const ElementCard = ({ id, setButton, button }) => {
  const [initialValues, setInitialValues] = useState(null);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/vacation/job/${id}`)
      .then((res) => {
        console.log(res.data);
        setInitialValues(res.data.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchData();

  }, []);

  const onSubmitHandler = async (values) => {
    const dataForm = {};
    dataForm.id = id;
    dataForm.data = values;
    dataForm.page = "Career";
       if (button) {
            try {
                const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/vacation/job`, dataForm)
                if (response.status == 200) {

                }

            } catch (error) {
                alert("error")
            }
        }

        setButton(false)
  };

  const handleChange = (e,vl) => {
    let name=e.target.name
    vl[[name]]=e.target.value;
  };

  const itemHandleChange = (e, vl) => {
    vl[[e.target.name]][e.target.id]=e.target.value;
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
            // handleChange,
            handleSubmit,
          }) => (
            <Form className="modal-form1">
              <div className="modal-form-div">
                {values.map((vl, index) => (
                  <div className="modal-form-div-el">
                    <label>Title (az)</label>
                    <Field
                      onChange={(e) => handleChange(e,vl)}
                      id={index}
                      defaultValue={vl.azTitle}
                      type="text"
                      name="azTitle"
                      required
                    />
                    <label>Items (az)</label>
                    {
                    ( index===0) ? <Field
                      onChange={(e) => handleChange(e,vl)}
                      id={index}
                      defaultValue={vl.azItems}
                      type="text"
                      name="azItems"
                      required
                    /> : vl.azItems.map((itm, index1)=>(
                        <Field
                        onChange={(e) => itemHandleChange(e, vl)}
                        id={index1}
                        defaultValue={itm}
                        type="text"
                        name="azItems"
                        required
                      /> 
                    ))
                    }
                    <label>Title (ru)</label>
                    <Field
                      onChange={(e) => handleChange(e,vl)}
                      id={index}
                      defaultValue={vl.ruTitle}
                      type="text"
                      name="ruTitle"
                      required
                    />

                    <label>Items (ru)</label>
                    {
                         vl.ruItems.map((itm,index1)=>(
                            <Field
                            onChange={(e) => itemHandleChange(e, vl)}
                            id={index1}
                            defaultValue={itm}
                            type="text"
                            name="ruItems"
                            required
                          /> 
                        ))
                    }
                    <label>Title (en)</label>
                    <Field
                      onChange={(e) => handleChange(e,vl)}
                      id={index}
                      defaultValue={vl.enTitle}
                      type="text"
                      name="enTitle"
                      required
                    />

                    <label>Items (en)</label>
                    {
                         vl.enItems.map((itm,index1)=>(
                            <Field
                            onChange={(e) => itemHandleChange(e, vl)}
                            id={index1}
                            defaultValue={itm}
                            type="text"
                            name="enItems"
                            required
                          /> 
                        ))
                    }
                  </div>
                ))}
              </div>

              <div className="modal-form-btn">
                <button type="submit">Edit</button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default ElementCard;
