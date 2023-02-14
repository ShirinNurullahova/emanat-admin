import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import FaqKategoriaCard from './FaqKategoriaCard';
import FaqKategoriaPost from './FaqKategoriaPost';
import AddModalCategories from './AddModalCategories';
import EditModalCategories from './EditModalCategories';


const FaqKategoria = ({ data , idC}) => {
    console.log(data)
    const [addButton , setAddButton]= useState(null)
    const [editButton , setEditButton]= useState(null)
    const [button, setButton] = useState(false);
    const [buttonPost, setButtonPost] = useState(false);
    const [id, setId] = useState('');
    const [idPost, setIdPost] = useState('');

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
    const handleDelete =  async (id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_URL}/admin/faq/main/categories/${id}`)
            if (response.status == 200) {

            }

        } catch (error) {
            alert("error")
        }
    }
    return (
        <div className='card-main'>
           

            <div className="table-main">
                <table className="table-main-bottom">
                    <thead>
                        <tr>
                            <th>Başlıq</th>
                            <th></th>
                            <th className='redaktə'  onClick={()=>{
                                        setEditButton(true)
                                    }}>Redaktə et</th>
                            <th onClick={()=>{
                                        setAddButton(true)
                                    }}>Kategoriya əlavə et</th>
                        </tr>
                    </thead>
                    {

                        data?.map((e) => (
                            <tbody>
                                <tr>
                                    <td>{e && e?.azTitle}</td>
                                    <td onClick={()=>{
                                        setButtonPost(true)
                                        setIdPost(e?._id)
                                    }}>Əlavə et</td>
                                    <td onClick={() => {
                                        setButton(true)
                                        setId(e?._id)
                                    }}>Redaktə et</td>
                                    <td onClick={() => handleDelete(e?._id)}>Sil</td>
     
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
                buttonPost && <FaqKategoriaPost id={idPost} button={buttonPost} setButton={setButtonPost}/>
            }

          {
            addButton && 
            <AddModalCategories button={addButton} idC={idC} setButton={setAddButton}/>

          }
       {
            editButton&& 
              <EditModalCategories button={addButton} setButton={setEditButton}/>

          }
        </div>
    )
}

export default FaqKategoria