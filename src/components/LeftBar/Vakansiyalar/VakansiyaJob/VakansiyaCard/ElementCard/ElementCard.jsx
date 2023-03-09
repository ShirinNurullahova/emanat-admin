import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";

const ElementCard = ({ id, setButton }) => {
  const [initialValues, setInitialValues] = useState(null);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/vacation/job/${id}`)
      .then((res) => {
        setInitialValues(res.data.data);
      })
      .catch((err) => { });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (values) => {
    const dataForm = {};
    dataForm.id = id;
    dataForm.data = values;
    dataForm.page = "Career";
    dataForm.last_date=values[1].azItems[0]
    console.log(values);
    try {
      const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/vacation/job`, dataForm)
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

    setButton(false)
  };

  const handleChange = (e, vl) => {
    let name = e.target.name
    vl[[name]] = e.target.value;
  };

  const itemHandleChange = (e, vl) => {
    vl[[e.target.name]][e.target.id] = e.target.value;
  }

  return (
    <div className='modal-v'>
      {initialValues && (
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {({
            values
          }) => (
            <Form className="modal-form">
              <div className="modal-form-div">
                {values.map((vl, index) => (
                  <div className="modal-form-div-el" key={index}>
                    <label>Başlıq (az)</label>
                    <Field
                      onChange={(e) => handleChange(e, vl)}
                      id={index}
                      defaultValue={vl.azTitle}
                      type="text"
                      name="azTitle"
                      required
                    />
                    <label>Kateqoriya məlumatları (az)</label>
                    {
                      (index === 0) ? <Field
                        onChange={(e) => handleChange(e, vl)}
                        id={index}
                        defaultValue={vl.azItems}
                        type="text"
                        name="azItems"
                        required
                      /> : vl.azItems.map((itm, index1) => (
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
                    <label>Başlıq (ru)</label>
                    <Field
                      onChange={(e) => handleChange(e, vl)}
                      id={index}
                      defaultValue={vl.ruTitle}
                      type="text"
                      name="ruTitle"
                      required
                    />

                    <label>Kateqoriya məlumatları (ru)</label>
                    {
                      vl.ruItems.map((itm, index1) => (
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
                    <label>Başlıq (en)</label>
                    <Field
                      onChange={(e) => handleChange(e, vl)}
                      id={index}
                      defaultValue={vl.enTitle}
                      type="text"
                      name="enTitle"
                      required
                    />

                    <label>Kateqoriya məlumatları (en)</label>
                    {
                      vl.enItems.map((itm, index1) => (
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
                <button type="submit">Yadda saxla</button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ElementCard;
