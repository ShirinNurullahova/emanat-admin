import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import VakansiyaCard from './VakansiyaCard/VakansiyaCard';

const VakansiyaJob = () => {

    const [id, setId] = useState(null)
    const [btn, setBtn] = useState(null)







    return (
        <>
            <div className='news-main'>
                <div className='news-main-comp'>
                    <div className='news-main-comp-bottom'>
                        <p>
                            / Sənət
                        </p>
                    </div>
                </div>
            </div>

            <VakansiyaCard setId={setId} setBtn={setBtn} btn={btn} />
        </>

    )
}

export default VakansiyaJob