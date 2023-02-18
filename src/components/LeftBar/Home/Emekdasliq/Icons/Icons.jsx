import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import '../Icons/Icons.scss'
import axios from 'axios';



const Icons = ({ setId, setOpen, open , setIcon }) => {
    const [data, setData] = useState(null)

    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/main/cooperation/head`), {
            headers: {
                "accept-language": "az"
            }
        })
            .then(res => {
                setData(res.data.dtoIcons);
            })
            .catch((err) => {});
    }

    useEffect(() => {
        if (!open) {
            fetchData();
        }
    }, [open]);

    const onClickHandler = (e) => {
        setOpen("Redaktə et")
        setIcon(e)
    }

   const handleIconDelete=async(id)=>{
    try {
        const response = await axios.delete(`${process.env.REACT_APP_URL}/admin/main/cooperation/icons/${id}`)
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
    setOpen(null)
   }
    return (

        <>
            {
                data &&
                data.map((e) => {
                    return (
                        <div className='icons'  onClick={() => onClickHandler(e)}>
                            <div className='icons-img'>
                                <img src={e.url} />
                            </div>
                            <div className='delete'>
                                <button  onClick={() => handleIconDelete(e.id)}>Sil</button>
                            </div>
                        </div>
                    )
                })
            }
        </>


    )
}

export default Icons
