import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
let unknown='';
const VakansiyaFilterData = () => {
  const [initialValues, setInitialValues] = useState(null);
  const [vl,setVl]=useState(null);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/vacation/filter`)
      .then((res) => {
        setInitialValues(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async () => {
    const dataForm = {};
    dataForm.id=vl._id
    dataForm.azTitle=vl.azTitle
    dataForm.enTitle=vl.enTitle
    dataForm.ruTitle=vl.ruTitle
    dataForm.azDescription=vl?.azDescription
    dataForm.enDescription=vl?.enDescription
    dataForm.ruDescription=vl?.ruDescription
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_URL}/admin/vacation/filter`,
        dataForm
      );
      if (response.status == 200 || response.status == 201) {
        document.querySelector('.alertModalApi .text').innerHTML='Redaktə edildi';
        document.querySelector('.alertModalApi').classList.add('patch')
        document.querySelector('.alertModalApi').classList.remove('post')
        document.querySelector('.alertModalApi').classList.remove('delete')
        document.querySelector('.alertModalApi').classList.add('visible')
        document.querySelector('.alertModalApi').classList.remove('hidden')
      setTimeout(()=>{
        document.querySelector('.alertModalApi').classList.remove('visible')
        document.querySelector('.alertModalApi').classList.add('hidden')
     },1000)
        fetchData()
    }
    } catch (error) {
      alert("error");
    }
  };

  const handleChangeTitle = (e, vl) => {
        let name = e.target.name;
        vl[[name]] = e.target.value;
      };
const handleChangeText = (e, vl) => {
        let name = e.target.name;
        vl[name] = e.target.value.split(";");
}
const handleDeleteData=async(id)=>{
  try {
    const res = await axios.delete((`${process.env.REACT_APP_URL}/admin/vacation/filter/${id}`))
    if (res.status == 200 || res.status == 201) {
      document.querySelector('.alertModalApi .text').innerHTML='Silindi';
      document.querySelector('.alertModalApi').classList.add('delete')
      document.querySelector('.alertModalApi').classList.remove('post')
      document.querySelector('.alertModalApi').classList.remove('patch')
      document.querySelector('.alertModalApi').classList.add('visible')
      document.querySelector('.alertModalApi').classList.remove('hidden')
    setTimeout(()=>{
      document.querySelector('.alertModalApi').classList.remove('visible')
      document.querySelector('.alertModalApi').classList.add('hidden')
   },1000)
  }
    fetchData();
} catch (error) { }
}
  return (
    <>
      <div className="middle-main">
        <div className="middle-main-bottom">
          {initialValues && (
            <Formik
              initialValues={initialValues}
              onSubmit={() => {
                onSubmitHandler();
              }}
            >
              {({ values,handleSubmit }) => (
                <Form
                  className="middle-main-bottom-form"
                  onSubmit={handleSubmit}
                >
                    {
                        values?.map((vl)=>(
                            (vl?.azTitle)?<>
                 <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Başlıq (az)</label>
                      <Field
                        onChange={(e)=>handleChangeTitle(e,vl)}
                        defaultValue={vl?.azTitle}
                        type="text"
                        name="azTitle"
                        required
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>Mətn (az)</label>
                      <Field
                        onChange={(e)=>handleChangeText(e,vl)}
                        defaultValue={vl?.azDescription.reduce((a,b)=>(a+";"+b))}
                        rows='15' component="textarea" 
                        placeholder=""
                        name="azDescription"
                        required
                      />
                    </div>
                  </div>
                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Başlıq (ru)</label>
                      <Field
                        onChange={(e)=>handleChangeTitle(e,vl)}
                        defaultValue={vl?.ruTitle}
                        type="text"
                        name="ruTitle"
                        required
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>Mətn (ru)</label>
                      <Field
                        onChange={(e)=>handleChangeText(e,vl)}
                        defaultValue={vl?.ruDescription?.reduce((a,b)=>(a+";"+b))}
                        rows='15' component="textarea"
                        name="ruDescription"
                        required
                      />
                    </div>
                  </div>

                  <div className="middle-main-bottom-form-div">
                    <div className="middle-main-bottom-form-div-el">
                      <label>Başlıq (en)</label>
                      <Field
                        onChange={(e)=>handleChangeTitle(e,vl)}
                        defaultValue={vl?.enTitle}
                        type="text"
                        name="enTitle"
                        required
                      />
                    </div>
                    <div className="middle-main-bottom-form-div-el">
                      <label>Mətn (en)</label>
                      <Field
                        onChange={(e)=>handleChangeText(e,vl)}
                        defaultValue={vl?.enDescription?.reduce((a,b)=>(a+";"+b))}
                        rows='15' component="textarea"
                        name="enDescription"
                        required
                      />
                    </div>
                  </div>
                <div style={{display:"flex",flexDirection:"row-reverse"}}>
                 <div className="middle-main-bottom-form-btn" id="delete">
                    <button onClick={()=>handleDeleteData(vl?._id)} className='delete'>Delete</button>
                  </div>
                  <div className="middle-main-bottom-form-btn">
                    <button type="submit" onClick={()=>setVl(vl)}>Yadda saxla</button>
                  </div>
                 </div>
                            </>:''
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

export default VakansiyaFilterData;