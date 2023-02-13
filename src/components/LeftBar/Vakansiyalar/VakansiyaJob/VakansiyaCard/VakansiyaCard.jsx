import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ElementCard from './ElementCard/ElementCard';

const VakansiyaCard = ({ btn, setBtn }) => {

    const [data, setData] = useState(null);
    const [button,setButton]=useState(false);
    const [id,setId]=useState('');


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
            .catch((err) => {});
    }

    // refresh evezine 
    // btn icinde data olmuyanda
    useEffect(() => {
        if (!btn) {
            fetchData();
        }
    }, [btn]);
    const handleDelete=(id)=>{

    }
    return (
        <>
                 <div className="middle-main">
                    <table className="middle-main-bottom">
                        <thead>
                            <tr>
                            <th>{data && data[0]?.sections[0]?.title}</th>
                            <th>{data && data[0]?.sections[1]?.title}</th>
                            </tr>
                        </thead>
            {
                
                data?.map((e) => (
                        <tbody>
                            <tr>
                                <td>{e && e?.sections[0]?.items}</td>
                                <td>{e && e?.sections[1]?.items}</td>
                                <td onClick={()=>{
                                    setButton(true)
                                    setId(e?.id)}}>Edit</td>
                                <td onClick={()=>handleDelete(e?.id)}>Delete</td>
                              
                            </tr>
                        </tbody>
                ))

            }
               </table>
                {
                button && <ElementCard id={id} setButton={setButton} button={button}/>
            }
             </div>
        </>

    )
}

export default VakansiyaCard