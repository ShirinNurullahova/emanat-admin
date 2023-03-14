import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
const vacancyValues = []
const FaqSchemaPost = ({ setBtnAdd }) => {
  const [initialValues, setInitialValues] = useState(null)
  const [previousData,setPreviousData]=useState(null)
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/admin/faqSchema`)
      .then((res) => {
        setPreviousData(res.data[0]);
      })
      .catch((err) => {});
  };
  const onSubmitHandler = async (values) => {
    fetchData()
    const dataForm = {};
    dataForm.id=previousData._id;
    dataForm.data=[...previousData.data,...vacancyValues];
    try {
      const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/faqSchema`, dataForm)
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
    }
    } catch (error) { }
 
    setBtnAdd(false)
  }

  const handleChange= (e, id) => {
    let name = e.target.name;
    vacancyValues[id][name] = e.target.value;
  }

  const addContentHandler = () => {
    const initialValuesRaw = new Object();
    vacancyValues.push(initialValuesRaw)
    setInitialValues([...initialValues, initialValuesRaw])
  }

  useEffect(() => {
    const initialValuesRaw = new Object();
    vacancyValues.push(initialValuesRaw);
    setInitialValues([initialValuesRaw]);
  }, [])
  const cancelFunction = () => {
    setBtnAdd(false);
}
  return (
    <div className='modal' >
      {initialValues &&
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {({
            values,
            handleSubmit
          }) => (
            <Form className='modal-form' onSubmit={handleSubmit}>
              {initialValues?.map((item, index) => (
                <div key={index} className='modal-form-div'>
                   <div className="modal-form-cancel" onClick={() => cancelFunction()}>
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path fill="white" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                                    </svg>
                                </div>
                  <p style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '40px' }}>Data məlumatları {index + 1}</p>
                  <div className='modal-form-div-el'>
                    <label>Question (az)</label>
                    <Field onChange={(e) => handleChange(e, index)} type="text" name="azQuestion" />
                  </div>
                  <div className='modal-form-div-el'>
                    <label>Answer (az)</label>
                    <Field onChange={(e) => handleChange(e, index)} type="text" name="azAnswer" />
                  </div>
                  <div className='modal-form-div-el'>
                    <label>Question (en)</label>
                    <Field onChange={(e) => handleChange(e, index)} type="text" name="enQuestion" />
                  </div>
                  <div className='modal-form-div-el'>
                    <label>Answer (en)</label>
                    <Field onChange={(e) => handleChange(e, index)} type="text" name="enAnswer" />
                  </div>
                  <div className='modal-form-div-el'>
                    <label>Question (ru)</label>
                    <Field onChange={(e) => handleChange(e, index)} type="text" name="ruQuestion" />
                  </div>
                  <div className='modal-form-div-el'>
                    <label>Answer (ru)</label>
                    <Field onChange={(e) => handleChange(e, index)} type="text" name="ruAnswer" />
                  </div>
                </div>
              ))}
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <p onClick={addContentHandler} style={{ fontSize: '30px', cursor: 'pointer', fontWeight: 'bold', padding: '5px', display: 'inline' }}>+</p>
              </div>
              <div className='modal-form-btn'>
                <button type='submit'>Yadda saxla</button>
              </div>
            </Form>
          )}
        </Formik>
      }
    </div>
  );
};

export default FaqSchemaPost;
