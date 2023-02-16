import React, { useEffect } from 'react'
import axios from 'axios'
import './PageImagesData.scss'
import { useState } from 'react'
import { logDOM } from '@testing-library/react'

export const PageImagesData = () => {
    const [data, setData] = useState(null);

   

    const fetchData = () => {
        axios.get((`${process.env.REACT_APP_URL}/admin/page-images`))
            .then(res => {
                setData(res.data[0]);
            })
            .catch((err) => {});
    }

    useEffect(() => { 
            fetchData();
    }, );
    return (
        <>
            {
                data && (
                    <>
                        <div className='pageImagesData'>
                            <div className='pageImagesData-img'>
                                <img src={data.headerImage} />
                            </div>
                        </div>
                        <div className='pageImagesData'>
                            <div className='pageImagesData-img'>
                                <img src={data.footerImage} />
                            </div>
                        </div>
                        </>
                    )
            }
        </>
    )
}