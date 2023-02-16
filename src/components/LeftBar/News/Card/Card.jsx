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
            alert("Vakansiya silindi")
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
                            <p>
                                <button onClick={()=>handleDeleteCard(e.id)}>Delete</button>
                            </p>
                        </div>
                    )
                })
            }
        </>
    )
}