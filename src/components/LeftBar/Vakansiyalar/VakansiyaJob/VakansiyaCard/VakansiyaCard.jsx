import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ElementCard from './ElementCard/ElementCard';

const VakansiyaCard = ({ setId, btn, setBtn }) => {

    const [data, setData] = useState(null);



    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/vacation/job`), {
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
        setId(e)
    }

    return (
        <>
            {
                
                data?.map((e) => (
                    <div className='card' onClick={() => onClickHandler(e.id)}>
                        <p>{e && e?.sections[0]?.items[0]}</p>
                        <p>{e && e?.sections[1]?.items[0]}</p>
                        <p>{e && e?.sections[2]?.items[0]}</p>
                    </div>
                ))
            }
        </>

    )
}

export default VakansiyaCard