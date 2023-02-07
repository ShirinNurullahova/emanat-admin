import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import VakansiyaCard from './VakansiyaCard/VakansiyaCard';

const VakansiyaJob = () => {

    const [id, setId] = useState(null)
    const [btn, setBtn] = useState(null)

   





    return (
        <>
            <p className='text'>
                Vacation Job
            </p>

            <VakansiyaCard setId={setId} setBtn={setBtn} btn={btn}/>
           </>

    )
}

export default VakansiyaJob