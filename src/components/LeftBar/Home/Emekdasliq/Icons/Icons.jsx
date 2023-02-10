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

                        </div>
                    )
                })
            }
        </>


    )
}

export default Icons
