import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
const FaqSchemaData = () => {
  const [initialValues, setInitialValues] = useState(null);
  const [vl,setVl]=useState(null);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/faqSchema`)
      .then((res) => {
        console.log(res.data);
        setInitialValues(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchData();
  }, []);

//   const onSubmitHandler = async () => {
//     const dataForm = {};
//     dataForm.id=vl._id
//     dataForm.azTitle=vl.azTitle
//     dataForm.enTitle=vl.enTitle
//     dataForm.ruTitle=vl.ruTitle
//     dataForm.azDescription=vl?.azDescription
//     dataForm.enDescription=vl?.enDescription
//     dataForm.ruDescription=vl?.ruDescription
//     try {
//       const response = await axios.patch(
//         `${process.env.REACT_APP_URL}/admin/vacation/filter`,
//         dataForm
//       );
//       if (response.status == 200) {
//         alert("success")
//         fetchData();
//       }
//     } catch (error) {
//       alert("error");
//     }
//   };

//   const handleChangeTitle = (e, vl) => {
//         let name = e.target.name;
//         vl[[name]] = e.target.value;
//       };
// const handleChangeText = (e, vl) => {
//         let name = e.target.name;
//         vl[name] = e.target.value.split(";");
// }
  return (
    <>
      <div className="middle-main">
        <div className="middle-main-bottom">
          {initialValues && (
            <Formik
              initialValues={initialValues}
            //   onSubmit={() => {
            //     onSubmitHandler();
            //   }}
            >
              {({ values,handleSubmit }) => (
                <Form
                  className="middle-main-bottom-form"
                  onSubmit={handleSubmit}
                >
                    {
                        values?.map((vl)=>(
                            console.log(vl)
                //            <>
                //  <div className="middle-main-bottom-form-div">
                //     <div className="middle-main-bottom-form-div-el">
                //       <label>Başlıq (az)</label>
                //       <Field
                //         // onChange={(e)=>handleChangeTitle(e,vl)}
                //         defaultValue={vl?.azTitle}
                //         type="text"
                //         name="azTitle"
                //         required
                //       />
                //     </div>
                //     <div className="middle-main-bottom-form-div-el">
                //       <label>Mətn (az)</label>
                //       <Field
                //         // onChange={(e)=>handleChangeText(e,vl)}
                //         defaultValue={vl?.azDescription.reduce((a,b)=>(a+";"+b))}
                //         rows='15' component="textarea" 
                //         placeholder=""
                //         name="azDescription"
                //         required
                //       />
                //     </div>
                //   </div>
                //   <div className="middle-main-bottom-form-div">
                //     <div className="middle-main-bottom-form-div-el">
                //       <label>Başlıq (ru)</label>
                //       <Field
                //         // onChange={(e)=>handleChangeTitle(e,vl)}
                //         defaultValue={vl?.ruTitle}
                //         type="text"
                //         name="ruTitle"
                //         required
                //       />
                //     </div>
                //     <div className="middle-main-bottom-form-div-el">
                //       <label>Mətn (ru)</label>
                //       <Field
                //         // onChange={(e)=>handleChangeText(e,vl)}
                //         defaultValue={vl?.ruDescription?.reduce((a,b)=>(a+";"+b))}
                //         rows='15' component="textarea"
                //         name="ruDescription"
                //         required
                //       />
                //     </div>
                //   </div>

                //   <div className="middle-main-bottom-form-div">
                //     <div className="middle-main-bottom-form-div-el">
                //       <label>Başlıq (en)</label>
                //       <Field
                //         // onChange={(e)=>handleChangeTitle(e,vl)}
                //         defaultValue={vl?.enTitle}
                //         type="text"
                //         name="enTitle"
                //         required
                //       />
                //     </div>
                //     <div className="middle-main-bottom-form-div-el">
                //       <label>Mətn (en)</label>
                //       <Field
                //         // onChange={(e)=>handleChangeText(e,vl)}
                //         defaultValue={vl?.enDescription?.reduce((a,b)=>(a+";"+b))}
                //         rows='15' component="textarea"
                //         name="enDescription"
                //         required
                //       />
                //     </div>
                //   </div>
                // <div style={{display:"flex",flexDirection:"row-reverse"}}>
                //   <div className="middle-main-bottom-form-btn">
                //     <button type="submit" onClick={()=>setVl(vl)}>Yadda saxla</button>
                //   </div>
                //  </div>
                //             </>
                        ))
                    }
                  
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
};

export default FaqSchemaData;