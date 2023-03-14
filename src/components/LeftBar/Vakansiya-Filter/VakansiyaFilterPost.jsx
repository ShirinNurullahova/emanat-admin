import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
const vacancyValues = []

const VakansiyaFilterPost = ({ setBtnAdd }) => {
  const [initialValues, setInitialValues] = useState(null)

  const onSubmitHandler = async (values) => {
    const dataForm = {};
    vacancyValues.map(async (vacancy) => {
      dataForm.azTitle = vacancy.azTitle;
      dataForm.enTitle = vacancy.enTitle;
      dataForm.ruTitle = vacancy.ruTitle;
      dataForm.azDescription = vacancy.azDescription;
      dataForm.enDescription = vacancy.enDescription;
      dataForm.ruDescription = vacancy.ruDescription;
      try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/admin/vacation/filter/`, dataForm)
        if (response.status == 200 || response.status == 201) {
          document.querySelector('.alertModalApi .text').innerHTML = 'Əlavə edildi';
          document.querySelector('.alertModalApi').classList.add('post')
          document.querySelector('.alertModalApi').classList.remove('patch')
          document.querySelector('.alertModalApi').classList.remove('delete')
          document.querySelector('.alertModalApi').classList.add('visible')
          document.querySelector('.alertModalApi').classList.remove('hidden')
          setTimeout(() => {
            document.querySelector('.alertModalApi').classList.remove('visible')
            document.querySelector('.alertModalApi').classList.add('hidden')
          }, 1000)
        }
      } catch (error) { }


    })

    setBtnAdd(false)
  }

  const handleChangeTitle = (e, id) => {
    let name = e.target.name;
    vacancyValues[id][name] = e.target.value;
  }

  const handleChangeText = (e, id) => {
    let name = e.target.name;
    vacancyValues[id][name] = e.target.value.split(";");
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
    <div className='modal-f' >
      {initialValues &&
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange
          }) => (
            <Form className='modal-form' onSubmit={handleSubmit}>
              {initialValues?.map((item, index) => (
                <div key={index} className='modal-form-div'>
                  <div className="modal-form-cancel" onClick={() => cancelFunction()}>
                    <svg class="svg-icon" viewBox="0 0 20 20">
                      <path fill="white" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                    </svg>
                  </div>
                  <p style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '40px' }}>Kateqoriya {index + 1}</p>
                  <div className='modal-form-div-el'>
                    <label>Başlıq (az)</label>
                    <Field onChange={(e) => handleChangeTitle(e, index)} type="text" name="azTitle" />
                  </div>
                  <div className='modal-form-div-el'>
                    <label>Başlıq (en)</label>
                    <Field onChange={(e) => handleChangeTitle(e, index)} type="text" name="enTitle" />
                  </div>
                  <div className='modal-form-div-el'>
                    <label>Başlıq (ru)</label>
                    <Field onChange={(e) => handleChangeTitle(e, index)} type="text" name="ruTitle" />
                  </div>

                  <p style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '40px' }}>Kateqoriya məlumatları {index + 1}</p>
                  <div className='modal-form-div-el'>
                    <label>Mətn (az)</label>
                    <Field onChange={(e) => handleChangeText(e, index)} rows='15' component="textarea" name="azDescription" required />
                  </div>
                  <div className='modal-form-div-el'>
                    <label>Mətn (en)</label>
                    <Field onChange={(e) => handleChangeText(e, index)} rows='15' component="textarea" name="enDescription" required />
                  </div>
                  <div className='modal-form-div-el'>
                    <label>Mətn (ru)</label>
                    <Field onChange={(e) => handleChangeText(e, index)} rows='15' component="textarea" name="ruDescription" required />
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

export default VakansiyaFilterPost;
