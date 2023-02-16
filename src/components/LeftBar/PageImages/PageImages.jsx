import React from 'react'
import { useState, useEffect } from 'react'
import './PageImages.scss'
import { PageImagesData } from './PageImagesDt/PageImagesData'
import PageImagesPatch from './PageImagesPatch/PageImagesPatch'
const PageImages = () => {
    const [id, setId] = useState(null)
    const [btn, setBtn] = useState(false)

    return (
        <>
            <div className='pageImages' id='news'>
                <div className='pageImages-main'>
                    <div className='pageImages-main-comp'>
                        <div className='pageImages-main-comp-p'>
                            <p>
                                Images
                            </p>
                        </div>
                    </div>

                </div>
                <div className='pageImages-card'>
                    <PageImagesData/>
                </div>
               <div>
                <button onClick={()=>setBtn(true)}>Redakte Et</button>
               </div>
            </div>
            {btn &&
                <div className='pageImages-modal'  >

                    <PageImagesPatch id={id} setBtn={setBtn} btn={btn} />



                </div>
            }
        </>
    )
}

export default PageImages