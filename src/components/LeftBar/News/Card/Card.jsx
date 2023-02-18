import React, { useEffect } from 'react'
import axios from 'axios'
import '../Card/Card.scss'
import { useState } from 'react'
import { logDOM } from '@testing-library/react'

export const Card = ({ setId, setBtn, btn }) => {
    const [data, setData] = useState(null);

   

    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/news`), {
            headers: {
                "accept-language": "az"
            }
        })
            .then(res => {
                setData(res.data);
            })
            .catch((err) => {});
    }

// refresh evezine 
// btn icinde data olmuyanda
    useEffect(() => {
        if (!btn) {
            fetchData();
        }
    }, [btn]);

    const onClickHandler = (e) => {
        setBtn("Redaktə et")
        setId(e)
    }
    const handleDeleteCard=async(id)=>{
        try {
            const res = await axios.delete((`${process.env.REACT_APP_URL}/admin/news/${id}`))      
            setBtn(null)
            if (res.status == 200 || res.status == 201) {
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
            fetchData();
        } catch (error) { }
    }
    return (
        <>
            {
                data &&
                data.map((e) => {
                    return (
                        <div className='card'>
                            <div onClick={() => onClickHandler(e.id)}>
                            <div className='card-img'>
                                <img src={e.newsImage} />
                            </div>
                            <p className='card-title'>
                                {e.title}
                            </p>
                            </div>
                            <div className='delete'>
                                <button onClick={()=>handleDeleteCard(e.id)}>Sil</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}