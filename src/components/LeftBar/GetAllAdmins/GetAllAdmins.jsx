import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const GetAllAdmins = () => {
    const fetchData = () => {
            
        axios.get((`${process.env.REACT_APP_URL}/superadmin/getAdmin`))
            .then(res => {
                    console.log(res);
            })
            .catch((err) => {});
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
   <div className='middle-main'>
    <div className='middle-main-comp'>
        <div className='middle-main-comp-p'>
            <p>
              Bütün
            </p>
        </div>
        <div className='middle-main-comp-bottom'>
            <p>/ ....</p>
        </div>
    </div>

</div>

    </div>
  )
}

export default GetAllAdmins