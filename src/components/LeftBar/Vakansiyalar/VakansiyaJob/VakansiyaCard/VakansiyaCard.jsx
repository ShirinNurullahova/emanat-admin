import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ElementCard from './ElementCard/ElementCard';
import VakansiyaPostItem from './VakansiyaPostItem/VakansiyaPostItem';
import VakansiyaPost from './VakansiyaPost/VakansiyaPost';

const VakansiyaCard = ({ btn, setBtn }) => {

    const [data, setData] = useState(null);
    const [button, setButton] = useState(false);
    const [button1, setButton1] = useState(false);
    const [id, setId] = useState('');
    const [idPost, setIdPost] = useState('');

    const [btnAdd,setBtnAdd]=useState(false);

    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/vacation/job`), {
            headers: {
                "accept-language": "az"
            }
        })
            .then(res => {
                console.log(res.data)
                setData(res.data);
            })
            .catch((err) => { });
    }

    // refresh evezine 
    // btn icinde data olmuyanda
    useEffect(() => {
        if (!btn) {
            fetchData();
        }
    }, [btn]);
    const handleDelete = (id) => {

    }
    return (
        <div className='card-main'>
            <div className="table-main">
                <table className="table-main-bottom">
                    <thead>
                        <tr>
                            <th>{data && data[0]?.sections[0]?.title}</th>
                            <th>{data && data[0]?.sections[1]?.title}</th>
                            <th></th>
                            <th></th>
                            <th onClick={()=>setBtnAdd(true)}>Add</th>
                        </tr>
                    </thead>
                    {

                        data?.map((e) => (
                            <tbody>
                                <tr>
                                    <td>{e && e?.sections[0]?.items}</td>
                                    <td>{e && e?.sections[1]?.items}</td>
                                    <td onClick={() => {
                                        setButton1(true)
                                        setIdPost(e?.id)
                                    }}>Add</td>
                                    <td onClick={() => {
                                        setButton(true)
                                        setId(e?.id)
                                    }}>Edit</td>
                                    <td onClick={() => handleDelete(e?.id)}>Delete</td>

                                </tr>
                            </tbody>
                        ))

                    }
                </table>
               
            </div>
            {
               btnAdd && <VakansiyaPost btnAdd={btnAdd} setBtnAdd={setBtnAdd}/>
            }
            {
                    button && <ElementCard id={id} setButton={setButton} button={button} />
                }
                {
                    // button1 && <VakansiyaPostItem id={idPost} setButton={setButton1} button={button1}/>
                }
        </div>

    )
}

export default VakansiyaCard