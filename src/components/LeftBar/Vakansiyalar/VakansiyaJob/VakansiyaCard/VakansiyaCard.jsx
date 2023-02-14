import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ElementCard from './ElementCard/ElementCard';
import VakansiyaPost from './VakansiyaPost/VakansiyaPost';

const VakansiyaCard = () => {
    const [data, setData] = useState(null);
    const [id, setId] = useState(null);
    const [button, setButton] = useState(false);
    const [btnAdd, setBtnAdd] = useState(false);

    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/vacation/job`), {
            headers: {
                "accept-language": "az"
            }
        })
            .then(res => {
                setData(res.data);
            })
            .catch((err) => { });
    }

    useEffect(() => {
        if (!btnAdd || !button) {
            fetchData();
        }
    }, [btnAdd, button]);

    const deleteHandler = async (id) => {
        try {
            const res = await axios.delete((`${process.env.REACT_APP_URL}/admin/vacation/job/${id}`))
            alert("Vakansiya silindi")
            fetchData();
        } catch (error) { }
    }

    return (
        <div className='card-main'>
            <div className="table-main">
                <table className="table-main-bottom">
                    <thead>
                        <tr>
                            <th>Vakansiya adı</th>
                            <th>Bitmə tarixi</th>
                            <th onClick={() => setBtnAdd(true)}>Vakansiya əlavə et</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((e) => (
                                <tr>
                                    <td>{e && e?.sections[0]?.items}</td>
                                    <td>{e && e?.sections[1]?.items}</td>
                                    <td>
                                        <div>
                                            <button onClick={() => {
                                                setButton(true)
                                                setId(e?.id)
                                            }}>Redaktə et</button>
                                            <button onClick={() => deleteHandler(e?.id)}>Sil</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                btnAdd && <VakansiyaPost setBtnAdd={setBtnAdd} />
            }
            {
                button && <ElementCard id={id} setButton={setButton} />
            }
        </div>

    )
}

export default VakansiyaCard