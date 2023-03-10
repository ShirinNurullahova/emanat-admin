import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "../Modal/Modal.scss";
import axios from "axios";
import Editor from "../../../../pages/Editor/Editor";

const Modal = ({ id, setBtn, btn }) => {
  const [initialValues, setInitialValues] = useState(
    JSON.parse(localStorage.getItem("editorData")) | []
  );
  const initialValuesAdd = {
    azDescription: "",
    azTitle: "",
    enDescription: "",
    enTitle: "",
    AzNewsImage: "",
    EnNewsImage: "",
    RuNewsImage: "",
    page: "",
    ruDescription: "",
    ruTitle: "",
  };

  useEffect(() => {
    if (btn && id) {
      axios
        .get(`${process.env.REACT_APP_URL}/admin/news/${id}`)
        .then((res) => {
          setInitialValues(res.data);
          localStorage.setItem("editorData",JSON.stringify(res.data))
        })
        .catch((err) => {});
    }
  }, [id]);
  console.log({ eeennnvv: process.env.REACT_APP_URL });
  const onSubmitHandler = async (values) => {
    const mainData = JSON.parse(localStorage.getItem("editorData"));

    const dataForm = new FormData();
    if (mainData) {
      dataForm.append("azTitle", JSON.stringify((typeof(mainData.azTitle)==='string')?(JSON.parse(mainData?.azTitle)):mainData.azTitle));
      dataForm.append("enTitle", JSON.stringify((typeof(mainData.enTitle)==='string')?(JSON.parse(mainData?.enTitle)):mainData.enTitle));
      dataForm.append("ruTitle", JSON.stringify((typeof(mainData.ruTitle)==='string')?(JSON.parse(mainData?.ruTitle)):mainData.ruTitle));
      dataForm.append("azDescription", JSON.stringify((typeof(mainData.azDescription)==='string')?(JSON.parse(mainData?.azDescription)):mainData.azDescription));
      dataForm.append("enDescription", JSON.stringify((typeof(mainData.enDescription)==='string')?(JSON.parse(mainData?.enDescription)):mainData.enDescription));
      dataForm.append("ruDescription", JSON.stringify((typeof(mainData.ruDescription)==='string')?(JSON.parse(mainData?.ruDescription)):mainData.ruDescription));
      dataForm.append("page", values.page);
    }

    if (btn === "Redakt?? et") {
      dataForm.append("id", values._id);
    }
    if (values.azImage) {
      dataForm.append("AzNewsImage", values.azImage);
    } else {
      dataForm.append("AzNewsImage", values.AzNewsImage);
    }
    if (values.ruImage) {
      dataForm.append("RuNewsImage", values.ruImage);
    } else {
      dataForm.append("RuNewsImage", values.RuNewsImage);
    }
    if (values.enImage) {
      dataForm.append("EnNewsImage", values.enImage);
    } else {
      dataForm.append("EnNewsImage", values.EnNewsImage);
    }
   if(mainData.azTitle.length!==0 && mainData.enTitle.length!==0 && mainData.ruTitle.length!==0 && mainData.azDescription.length!==0 && mainData.enDescription.length!==0 && mainData.ruDescription.length!==0){
    if (btn === "??lav?? et") {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/admin/news`,
          dataForm
        );
        if (response.status == 200 || response.status == 201) {
          document.querySelector(".alertModalApi .text").innerHTML =
            "??lav?? edildi";
          document.querySelector(".alertModalApi").classList.add("post");
          document.querySelector(".alertModalApi").classList.remove("patch");
          document.querySelector(".alertModalApi").classList.remove("delete");
          document.querySelector(".alertModalApi").classList.add("visible");
          document.querySelector(".alertModalApi").classList.remove("hidden");
          setTimeout(() => {
            document
              .querySelector(".alertModalApi")
              .classList.remove("visible");
            document.querySelector(".alertModalApi").classList.add("hidden");
          }, 1000);
          localStorage.removeItem("editorData")
        }
      } catch (error) {
        alert("error");
      }
    } else if (btn === "Redakt?? et") {
      try {
        localStorage.removeItem("editorData")
        const response = await axios.patch(
          `${process.env.REACT_APP_URL}/admin/news`,
          dataForm
        );
        if (response.status == 200 || response.status == 201) {
          document.querySelector(".alertModalApi .text").innerHTML =
            "Redakt?? edildi";
          document.querySelector(".alertModalApi").classList.add("patch");
          document.querySelector(".alertModalApi").classList.remove("post");
          document.querySelector(".alertModalApi").classList.remove("delete");
          document.querySelector(".alertModalApi").classList.add("visible");
          document.querySelector(".alertModalApi").classList.remove("hidden");
          setTimeout(() => {
            document
              .querySelector(".alertModalApi")
              .classList.remove("visible");
            document.querySelector(".alertModalApi").classList.add("hidden");
          }, 1000);
        }
      } catch (error) {
        alert("error");
      }
    }}
    else{
      alert('scv')
    }
    setBtn(null);
  };


  return (
    <>
      {(btn === "??lav?? et" || initialValues) && (
        <Formik
          initialValues={
            btn === "Redakt?? et" ? initialValues : initialValuesAdd
          }
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            setFieldValue,
            isSubmitting
          }) => {
            return (
              <Form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-form-div">
                  <div className="modal-form-div-el">
                    <label>Ba??l??q (az)</label>
                    <div
                      className="remove-scrollbar"
                      style={{
                        // padding: "10px",
                        // backgroundColor: "#fff",
                        // margin: "10px 0",
                        padding: "5px",
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        border: "1px solid #393d42",
                        fontSize: "14px",
                        borderRadius: "50px",
                        color: "#77797c",
                        overflowY: "auto",
                      }}
                    >
                      <Editor
                        customStyles={{}}
                        placeholder={"azTitle"}
                        value={initialValues}
                      />
                    </div>
                  </div>
                  <div className="modal-form-div-el">
                    <label>M??tn (az)</label>
                    <div
                      className="remove-scrollbar"
                      style={{
                        // padding: "10px",
                        // backgroundColor: "#fff",
                        // margin: "10px 0",
                        padding: "5px",
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        border: "1px solid #393d42",
                        fontSize: "14px",
                        borderRadius: "50px",
                        color: "#77797c",
                        overflowY: "auto",
                      }}
                    >
                      <Editor
                        customStyles={{}}
                        placeholder={"azDescription"}
                        value={initialValues}
                      />
                    </div>
                  </div>
                  <div className="modal-form-div-el">
                    <label>????kil (az)</label>
                    <Field
                      value={values.filename}
                      onChange={(e) =>
                        setFieldValue("azImage", e.currentTarget.files[0])
                      }
                      type="file"
                      name="azImage"
                    />
                  </div>
                  <div className="modal-form-div-el">
                    <label>Ba??l??q (ru)</label>
                    <div
                      className="remove-scrollbar"
                      style={{
                        // padding: "10px",
                        // backgroundColor: "#fff",
                        // margin: "10px 0",
                        padding: "5px",
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        border: "1px solid #393d42",
                        fontSize: "14px",
                        borderRadius: "50px",
                        color: "#77797c",
                        overflowY: "auto",
                      }}
                    >
                      <Editor
                        customStyles={{}}
                        placeholder={"ruTitle"}
                        value={initialValues}
                      />
                    </div>
                  </div>
                  <div className="modal-form-div-el">
                    <label>M??tn (ru)</label>
                    <div
                      className="remove-scrollbar"
                      style={{
                        // padding: "10px",
                        // backgroundColor: "#fff",
                        // margin: "10px 0",
                        padding: "5px",
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        border: "1px solid #393d42",
                        fontSize: "14px",
                        borderRadius: "50px",
                        color: "#77797c",
                        overflowY: "auto",
                      }}
                    >
                      <Editor
                        customStyles={{}}
                        placeholder={"ruDescription"}
                        value={initialValues}
                      />
                    </div>
                  </div>
                  <div className="modal-form-div-el">
                    <label>????kil (ru)</label>
                    <Field
                      value={values.filename}
                      onChange={(e) =>
                        setFieldValue("ruImage", e.currentTarget.files[0])
                      }
                      type="file"
                      name="ruImage"
                    />
                  </div>
                  <div className="modal-form-div-el">
                    <label>Ba??l??q (en)</label>
                    <div
                      className="remove-scrollbar"
                      style={{
                        // padding: "10px",
                        // backgroundColor: "#fff",
                        // margin: "10px 0",
                        padding: "5px",
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        border: "1px solid #393d42",
                        fontSize: "14px",
                        borderRadius: "50px",
                        color: "#77797c",
                        overflowY: "auto",
                      }}
                    >
                      <Editor
                        customStyles={{}}
                        placeholder={"enTitle"}
                        value={initialValues}
                      />
                    </div>
                  </div>
                  <div className="modal-form-div-el">
                    <label>M??tn (en)</label>
                    <div
                      className="remove-scrollbar"
                      style={{
                        // padding: "10px",
                        // backgroundColor: "#fff",
                        // margin: "10px 0",
                        padding: "5px",
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        border: "1px solid #393d42",
                        fontSize: "14px",
                        borderRadius: "50px",
                        color: "#77797c",
                        overflowY: "auto",
                      }}
                    >
                      <Editor
                        customStyles={{}}
                        placeholder={"enDescription"}
                        value={initialValues}
                      />
                    </div>
                  </div>
                  <div className="modal-form-div-el">
                    <label>????kil (en)</label>
                    <Field
                      value={values.filename}
                      onChange={(e) =>
                        setFieldValue("enImage", e.currentTarget.files[0])
                      }
                      type="file"
                      name="enImage"
                    />
                  </div>
                  <div className="modal-form-div-el">
                    <label>S??hif??</label>
                    <Field
                      value={values.page}
                      type="text"
                      placeholder=""
                      name="page"
                    />
                  </div>
                </div>
                <div className="modal-form-btn">
                  <button type="submit">{btn}</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default Modal;
