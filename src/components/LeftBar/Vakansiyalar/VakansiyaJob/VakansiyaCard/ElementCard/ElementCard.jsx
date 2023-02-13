import './ElementCard.scss'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
const ElementCard = ({id,setButton,button}) => {
    const [initialValues, setInitialValues] = useState(null);
    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/vacation/job/${id}`))
            .then(res => {
               console.log(res.data)
               setInitialValues(res.data.data);
            })
            .catch((err) => {});
    }
    useEffect(() => {
            fetchData();
    }, []);

    // const onSubmitHandler = async (values) => {
    //     const dataForm = {}

    //    
    //     if (btn === "Əlavə et") {
    //         try {
    //             const response = await axios.post(`${process.env.REACT_APP_URL}/admin/about/services/sections`, dataForm)
    //             if (response.status == 200) {

    //             }

    //         } catch (error) {
    //             alert("error")
    //         }
    //     } else if (btn === "Redaktə et") {
    //         try {
    //             const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/about/services/sections`, dataForm)
    //             if (response.status == 200) {

    //             }

    //         } catch (error) {
    //             alert("error")
    //         }
    //     }

    //     setBtn(null)
    // }

    return ( 
        <>
        {( initialValues) &&
        <Formik
            initialValues={initialValues}
            // onSubmit={(values) => {
            //     onSubmitHandler(values);
            // }}
        >
            {({
                values,
                handleChange
            }) => (
                <Form className='modal-form' >
                    <div className='modal-form-div'>
                        {
                            values.map(vl=>{
                                return (
                                     <div className='modal-form-div-el'>
                                  <label>Title (az)</label>
                               <Field onChange={handleChange} value={vl.azTitle} type="text" name="azTitle" />
                               <label>Items (az)</label>
                               <Field onChange={handleChange} value={vl.azItems} type="text" name="azItems" />
                                <label>Title (ru)</label>
                            <Field onChange={handleChange} value={vl.ruTitle} type="text" name="ruTitle" />

                            <label>Items (ru)</label>
                            <Field onChange={handleChange} value={vl.ruItems} type="text" name="ruItems" />   
                              <label>Title (en)</label>
                            <Field onChange={handleChange} value={vl.enTitle} type="text" name="enTitle" />

                            <label>Items (en)</label>
                            <Field onChange={handleChange} value={vl.enItems} type="text" name="enItems" />
                        </div>
                                )
                            })
                        }
                       
                    </div>

                    <div className='modal-form-btn'>
                        <button type='submit'>Edit</button>
                    </div>
                </Form>
            )}
        </Formik>
    }
</>
     );
}
 
export default ElementCard;