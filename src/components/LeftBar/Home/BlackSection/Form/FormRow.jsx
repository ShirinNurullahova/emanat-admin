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
                                    <label>Title (az)</label>
                                    <Field onChange={handleChange} value={values.azTitle} type="text" name="azTitle" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Description (az)</label>
                                    <Field onChange={handleChange} value={values.azDescription} type="text" name="azDescription" />
                                </div>
                            </div>

                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Title (ru)</label>
                                    <Field onChange={handleChange} value={values.ruTitle} type="text" name="ruTitle" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Description (ru)</label>
                                    <Field onChange={handleChange} value={values.ruDescription} type="text" name="ruDescription" />
                                </div>
                            </div>
                            <div className='middle-main-bottom-form-div'>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Title (en)</label>
                                    <Field onChange={handleChange} value={values.enTitle} type="text" name="enTitle" />
                                </div>
                                <div className='middle-main-bottom-form-div-el'>
                                    <label>Description (en)</label>
                                    <Field onChange={handleChange} value={values.enDescription} type="text" name="enDescription" />
                                </div>
                            </div>
                            <div className='middle-main-bottom-form-btn'>
                                <button type='submit'>Save</button>
                            </div>
                        </Form>
                    )}
                </Formik>}
        </>
    )
}

export default FormRow