import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import FaqKategoriaCard from './FaqKategoriaCard';

const FaqKategoria = ({ data }) => {
    console.log(data)

    const [button, setButton] = useState(false);
    const [id, setId] = useState('');
    const onSubmitHandler = async (values) => {

        const dataForm = {}
        dataForm.azTitle = values.azTitle
        dataForm.enTitle = values.enTitle
        dataForm.ruTitle = values.ruTitle
        dataForm.id = values._id

        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/faq/main/categories`, dataForm)
            if (response.status == 200) {

            }

        } catch (error) {
            alert("error")
        }
    }
    const handleDelete = (id) => {

    }
    return (
        <div className='card-main'>
            <div className="table-main">
                <table className="table-main-bottom">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {

                        data?.map((e) => (
                            <tbody>
                                <tr>
                                    <td>{e && e?.azTitle}</td>
                                    <td onClick={()=>{
                                        setButton(true)
                                        setId(e?._id)
                                    }}>Add</td>
                                    <td onClick={() => {
                                        setButton(true)
                                        setId(e?._id)
                                    }}>Edit</td>
                                    <td onClick={() => handleDelete(e?.id)}>Delete</td>
     
                                </tr>
                            </tbody>
                        ))

                    }
                </table>
               
            </div>
            {
                data?.map((e)=>(
                (e._id===id)?<FaqKategoriaCard data={e} id={id} setButton={setButton} button={button} />:''
                ))
                }
            
            {
                // button && 
            }


            {/* {
                data &&
                data.map((e) => {
                    return(
                        <table style={{ border: '1px solid gray' }}>
                        <tr>
                            <th>{e.azTitle}</th>
                        </tr>

                    </table>
                    )
                   


                })

            } */}
        </div>
    )
}

export default FaqKategoria