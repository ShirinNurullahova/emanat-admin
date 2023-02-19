import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import FaqKategoriaCard from './FaqKategoriaCard';
import FaqKategoriaPost from './FaqKategoriaPost';
import AddModalCategories from './AddModalCategories';
import EditModalCategories from './EditModalCategories';
import Item from './Item';


const FaqKategoria = ({ data, idC }) => {
    const [addButton, setAddButton] = useState(null)
    const [editButton, setEditButton] = useState(null)
    const [button, setButton] = useState(false);
    const [buttonPost, setButtonPost] = useState(false);
    const [dataC, setDataC] = useState('');
    const [idPost, setIdPost] = useState('');

    const onSubmitHandler = async (values) => {

        const dataForm = {}
        dataForm.azTitle = values.azTitle
        dataForm.enTitle = values.enTitle
        dataForm.ruTitle = values.ruTitle
        dataForm.id = values._id

        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/admin/faq/main/categories`, dataForm)
            if (response.status == 200 || response.status == 201) {
                document.querySelector('.alertModalApi .text').innerHTML='Redaktə Edildi';
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
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_URL}/admin/faq/main/categories/${id}`)
            if (response.status == 200 || response.status == 201) {
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
                            {/* <th className='redaktə'  onClick={()=>{
                                        setEditButton(true)
                                    }}>Kategoriya redaktə et</th> */}
                            <th></th>
                            <th onClick={() => {
                                setAddButton(true)
                            }}>Kategoriya əlavə et</th>
                        </tr>
                    </thead>
                    {

                        data?.map((e) => (
                            <tbody>
                                <tr>
                                    <td>{e && e?.azTitle}</td>
                                    {/* <td onClick={()=>{
                                        setButtonPost(true)
                                        setIdPost(e?._id)
                                    }}>Əlavə et</td> */}
                                    <td></td>
                                    <td onClick={() => {
                                        setButton(true)
                                        setDataC(e)
                                    }}>Redaktə et</td>
                                    <td onClick={() => handleDelete(e?._id)}>Sil</td>

                                </tr>
                            </tbody>
                        ))

                    }
                </table>

            </div>
            {button &&
                <FaqKategoriaCard data={dataC} setButton={setButton} button={button} />
            }

            {/* {
                buttonPost && <FaqKategoriaPost id={idPost} button={buttonPost} setButton={setButtonPost}/>
            } */}

            {
                addButton &&
                <AddModalCategories button={addButton} idC={idC} setButton={setAddButton} />

            }
            {/* {
            editButton&& 
              <EditModalCategories button={addButton} setButton={setEditButton} data={data}/>

          } */}

            {
                data &&
                data.map((e) => {
                    return (
                         <Item e={e}/>


                        )
                })





            }
        </div>
    )
}

export default FaqKategoria