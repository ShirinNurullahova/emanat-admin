import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const EditModalCategories = ({ setButton, button, data }) => {
    const [initialValues, setInitialValues] = useState({ data });
    const [vlData, setVlData] = useState(null)

    const onSubmitHandler = async () => {
        console.log(vlData);
        const dataForm = {}
        dataForm.azTitle = vlData.azTitle
        dataForm.enTitle = vlData.enTitle
        dataForm.ruTitle = vlData.ruTitle
        dataForm.id = vlData._id
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/faq/main/categories`, dataForm)
            if (response.status == 200) {

            }

        } catch (error) {
            alert("error")
        }

      setButton(false)

    };
    const handleChange = (e, vl) => {
        let name = e.target.name;
        vl[[name]] = e.target.value;
      };

    return (
        <div>

            {initialValues && (
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => {
                        onSubmitHandler();
                    }}
                >
                    {({
                        values,
                        // handleChange,
                        handleSubmit
                    }) => (
                        <Form className="modal-form1" >
                            {console.log(values)}
                            <div className="modal-form-div">
                                {values?.data?.map((vl) => (
                                    <div className="modal-form-div-el">
                                        <label>Title(az)</label>
                                        <Field
                                            onChange={(e) => handleChange(e, vl)}
                                            defaultValue={vl.azTitle}
                                            id={vl._id}
                                            type="text"
                                            name="azTitle"
                                            required
                                        />
                                        <label>Title (en)</label>
                                        <Field
                                            onChange={(e) => handleChange(e, vl)}
                                            defaultValue={vl.enTitle}
                                            id={vl._id}
                                            type="text"
                                            name="enTitle"
                                            required
                                        />
                                        <label>Title (ru)</label>
                                        <Field
                                            onChange={(e) => handleChange(e, vl)}
                                            defaultValue={vl.ruTitle}
                                            id={vl._id}
                                            type="text"
                                            name="ruTitle"
                                            required
                                        />
                                        <div className="modal-form-btn">
                                            <button onClick={() => setVlData(vl)} type="submit">Edit</button>
                                        </div>
                                    </div>

                                ))

                                }
                            </div>


                        </Form>
                    )}
                </Formik>
            )}
        </div>
    )
}

export default EditModalCategories