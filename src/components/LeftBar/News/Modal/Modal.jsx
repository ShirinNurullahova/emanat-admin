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
    NewsImage: "",
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
          localStorage.setItem("editorData", JSON.stringify(res.data))
        })
        .catch((err) => { });
    }
  }, [id]);
  console.log({ eeennnvv: process.env.REACT_APP_URL });
  const onSubmitHandler = async (values) => {
    const mainData = JSON.parse(localStorage.getItem("editorData"));
    console.log({ mainData });
    const dataForm = new FormData();
    if (mainData) {
      dataForm.append("azTitle", JSON.stringify(mainData.azTitle));
      dataForm.append("enTitle", JSON.stringify(mainData.enTitle));
      dataForm.append("ruTitle", JSON.stringify(mainData.ruTitle));
      dataForm.append("azDescription", JSON.stringify(mainData.azDescription));
      dataForm.append("enDescription", JSON.stringify(mainData.enDescription));
      dataForm.append("ruDescription", JSON.stringify(mainData.ruDescription));
      dataForm.append("page", values.page);
    }

    if (btn === "Redaktə et") {
      dataForm.append("id", values._id);
    }
    if (values.image) {
      dataForm.append("NewsImage", values.image);
    } else {
      dataForm.append("NewsImage", values.newsImage);
    }
    if (mainData.azTitle.length !== 0 && mainData.enTitle.length !== 0 && mainData.ruTitle.length !== 0 && mainData.azDescription.length !== 0 && mainData.enDescription.length !== 0 && mainData.ruDescription.length !== 0) {
      if (btn === "Əlavə et") {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_URL}/admin/news`,
            dataForm
          );
          if (response.status == 200 || response.status == 201) {
            document.querySelector(".alertModalApi .text").innerHTML =
              "Əlavə edildi";
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
      } else if (btn === "Redaktə et") {
        const mainData = JSON.parse(localStorage.getItem("editorData"));
        console.log({ mainData });
        try {
          const response = await axios.patch(
            `${process.env.REACT_APP_URL}/admin/news`,
            dataForm
          );
          if (response.status == 200 || response.status == 201) {
            document.querySelector(".alertModalApi .text").innerHTML =
              "Redaktə edildi";
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
      }
    }
    else {
      alert('scv')
    }
    setBtn(null);
  };
    const cancelFunction =()=>{
      setBtn(null);
    } 
   
  return (
    <>
      {(btn === "Əlavə et" || initialValues) && (
        <Formik
          initialValues={
            btn === "Redaktə et" ? initialValues : initialValuesAdd
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
                  <div className="modal-form-cancel" onClick={()=>cancelFunction()}>
                    <svg class="svg-icon" viewBox="0 0 20 20">
                      <path fill="white" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                    </svg>
                  </div>
                  <div className="modal-form-div-el">
                    <label>Başlıq (az)</label>
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
                    <label>Mətn (az)</label>
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
                    <label>Başlıq (ru)</label>
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
                    <label>Mətn (ru)</label>
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
                    <label>Başlıq (en)</label>
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
                    <label>Mətn (en)</label>
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
                    <label>Səhifə</label>
                    <Field
                      value={values.page}
                      type="text"
                      placeholder=""
                      name="page"
                      required
                    />
                  </div>
                  <div className="modal-form-div-el">
                    <label>Şəkil</label>
                    <Field
                      value={values.filename}
                      onChange={(e) =>
                        setFieldValue("image", e.currentTarget.files[0])
                      }
                      type="file"
                      name="filename"
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
