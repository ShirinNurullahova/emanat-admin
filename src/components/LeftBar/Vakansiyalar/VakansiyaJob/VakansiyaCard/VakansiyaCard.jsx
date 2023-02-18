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
                fetchData()
            }
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