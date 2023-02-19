import axios from 'axios';
import { Formik, Field, Form } from 'formik';

const FormRow = ({ initialValues }) => {


    const onSubmitHandler = async (values) => {
        let updatedVelus = {}
        updatedVelus.id = values._id;
        updatedVelus.azTitle = values.azTitle
        updatedVelus.azDescription = values.azDescription
        updatedVelus.ruTitle = values.ruTitle
        updatedVelus.ruDescription = values.ruDescription
        updatedVelus.enTitle = values.enTitle
        updatedVelus.enDescription = values.enDescription
        
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/main/information`, updatedVelus)
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
        } catch (error) {
            alert("error")
        }
    }

    return (
        <>
            {initialValues &&
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        onSubmitHandler(values);

                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <Form className='middle-main-bottom-form' onSubmit={handleSubmit}>
                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq (az)</label>
                                    <Field   required onChange={handleChange} value={values.azTitle} type="text" name="azTitle" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Mətn (az)</label>
                                    <Field   required onChange={handleChange} value={values.azDescription} type="text" name="azDescription" />
                                </div>
                            </div>

                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq  (ru)</label>
                                    <Field   required onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Mətn (ru)</label>
                                    <Field   required onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                </div>
                            </div>
                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Başlıq  (en)</label>
                                    <Field   required onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Mətn (en)</label>
                                    <Field   required onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
                                </div>
                            </div>
                            <div className='middle-main-bottom-form-btn'>
                                <button type='submit'>Yadda saxla</button>
                            </div>
                        </Form>
                    )}
                </Formik>}
        </>
    )
}

export default FormRow