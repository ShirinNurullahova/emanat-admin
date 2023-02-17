import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const ColleaguesTitle = () => {
  const [initialValues, setInitialValues] = useState('')
  const fetchData = () => {
    axios.get((`${process.env.REACT_APP_URL}/admin/internship/colleagues/`))
      .then(res => {
        setInitialValues(res.data[0])
      })
      .catch((err) => { });
  }

  useEffect(() => {
    fetchData();
  }, []);

  
  const onSubmitHandler = async (values) => {
    const dataForm = {};
    dataForm.azTitle=values.azTitle
    dataForm.enTitle=values.enTitle
    dataForm.ruTitle=values.ruTitle
    dataForm.id=values._id
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_URL}/admin/internship/colleagues/title`,
        dataForm
      );
      if (response.status == 200) {
        fetchData();
      }
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className='middle-main'>
      <div className='middle-main-bottom'>
        {initialValues && (
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                onSubmitHandler(values);
              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <Form
                  className="middle-main-bottom-form"
                  onSubmit={handleSubmit}
                >
                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Başlıq (az)</label>
                      <Field
                        onChange={handleChange}
                        value={values.azTitle}
                        type="text"
                        name="azTitle"
                        required
                      />
                    </div>
                  </div>
                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Başlıq (ru)</label>
                      <Field
                        onChange={handleChange}
                        value={values.ruTitle}
                        type="text"
                        name="ruTitle"
                        required
                      />
                    </div>
                  </div>

                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Başlıq (en)</label>
                      <Field
                        onChange={handleChange}
                        value={values.enTitle}
                        type="text"
                        name="enTitle"
                        required
                      />
                    </div>
                  </div>
                  <div className="middle-main-bottom-form-btn">
                    <button type="submit">Yadda saxla</button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
      </div>
       
    </div>
  )
}

export default ColleaguesTitle



//   const onSubmitHandler = async (values) => {
//     const dataForm = new FormData();
//     dataForm.append("id", id);
//     dataForm.append("azTitle", values.azTitle);
//     dataForm.append("enTitle", values.enTitle);
//     dataForm.append("ruTitle", values.ruTitle);
//     dataForm.append("azDescription", values.azDescription);
//     dataForm.append("enDescription", values.enDescription);
//     dataForm.append("ruDescription", values.ruDescription);
//     if (values.image) {
//       dataForm.append("HrFormPageImage", values.image);
//     } else {
//       dataForm.append("HrFormPageImage", values.HrFormPageImage);
//     }
   
//     try {
//       const response = await axios.patch(
//         `${process.env.REACT_APP_URL}/admin/hrPage`,
//         dataForm
//       );
//       if (response.status == 200) {
//         fetchData();
//       }
//     } catch (error) {
//       alert("error");
//     }
//   };

//   return (
//     <div className="form">
//       <div className="middle-main">
//         <div className="middle-main-comp">
//           <div className="middle-main-comp-p">
//             <p>Hr</p>
//           </div>
//           <div className="middle-main-comp-bottom">
//             <p>/ əsas</p>
//           </div>
//         </div>
//         <div className="middle-main-bottom">
//          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hr;
