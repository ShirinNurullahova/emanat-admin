import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import '../GetAllAdmins/GetAllAdmins.scss'
import axios from 'axios';
const GetAllAdmins = () => {
    const role = localStorage.getItem('roleName')
    const [data, setData] = useState(null);

    const fetchData = () => {

        axios.get((`${process.env.REACT_APP_URL}/superadmin/getAdmin`))
            .then(res => {
                console.log(res);
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    const deleteHandler = async (id) => {
        try {
            const res = await axios.delete((`${process.env.REACT_APP_URL}/superadmin/delete/${id}`))
            if (res.status == 200 || res.status == 201) {
                fetchData()
            }
        } catch (error) { }
    }
    return (
       <div className='getAll'>
            
       
        <div className="table-main">
            <table >
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((e) => (
                            <>
                                {e?.role.role !== "SUPERADMIN" &&
                                    <tr>
                                        <td>{e && e?.name}</td>
                                        <td>{e && e?.surname}</td>
                                        <td>{e && e?.email}</td>
                                        <td>{e && e?.role.role}</td>
                                        <td>
                                            <div>
                                                <button className='adminDelete' onClick={() => deleteHandler(e?._id)}>Sil</button>
                                            </div>
                                        </td>
                                    </tr>
                                }
                            </>

                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default GetAllAdmins