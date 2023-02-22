import React from 'react'
import { useState, useEffect } from 'react'
import './PageImages.scss'
import { PageImagesData } from './PageImagesDt/PageImagesData'
import PageImagesPatch from './PageImagesPatch/PageImagesPatch'
const PageImages = () => {
    const [id, setId] = useState(null)
    const [btn, setBtn] = useState(false)
    var body = document.getElementsByTagName('body')[0];

    if (btn) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'visible'

    }
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
               <div className='pg-button'>
                <button onClick={()=>setBtn(true)}>Redaktə Et</button>
               </div> 
               {btn &&
                <div>

                    <PageImagesPatch id={id} setBtn={setBtn} btn={btn} />



                </div>
            }
            </div>
           
        </>
    )
}

export default PageImages