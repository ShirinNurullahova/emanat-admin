import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import FaqKategoriaPost from './FaqKategoriaPost';
import EditModalCategories from './EditModalCategories';
const Item = ({ e }) => {
    const role = localStorage.getItem('roleName')
    const [buttonPost, setButtonPost] = useState(false);
    const [editButton, setEditButton] = useState(false)
    const [idItem,setIdItem]=useState(null)
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_URL}/admin/faq/main/categories/item/${id}`)
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
    var body = document.getElementsByTagName('body')[0];

    if (buttonPost || editButton) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'visible'

    }
    // if (editButton) {
    //     body.style.overflow = 'hidden'
    // } else {
    //     body.style.overflow = 'visible'

    // }
    return (
        <div>
            <div className='middle-main-comp'>

                <div className='middle-main-comp-bottom'>
                    <p>/ items</p>
                </div>
            </div>
            <div className="table-main">
                <table className="table-main-bottom">
                    <thead>
                        <tr>
                            <th>{e.azTitle}</th>
                            <th></th>
                            <th></th>
                            <th onClick={() => setButtonPost(true)}>Sual ??lav?? et</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            e.items.map(itm => (
                                <tr>
                                    <td>{itm.azQuestion}</td>
                                    <td></td>
                                    <td onClick={()=> {
                                        setEditButton(true)
                                        setIdItem(itm._id)
                                        }}>Redakt?? et</td>
                                        {role && role === "SUPERADMIN" &&
                                    <td onClick={() => handleDelete(itm._id)}>Sil</td>}
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>

            {buttonPost && 
                <div className='xeber1'>

                <FaqKategoriaPost id={e._id} button={buttonPost} setButton={setButtonPost} />
                </div>
            }
            {
                editButton && e.items.map(itm=>(
                 
                    (itm._id===idItem)?
                
                        
                        <EditModalCategories setButton={setEditButton} data={itm}/> : "" 
                        
                
                   
                ))
          }
        </div>
    )
}

export default Item