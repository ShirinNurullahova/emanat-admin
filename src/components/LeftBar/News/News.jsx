import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { Card } from './Card/Card';
import Modal from './Modal/Modal';
import '../News/News.scss'
import NewsMain from './NewsMain/NewsMain';
const News = () => {
    const [id, setId] = useState(null)
    const [btn, setBtn] = useState(null)
    // const menuRef = useRef()
    // useEffect(() => {
    //     let handler = (e) => {
    //         if (menuRef.current.contains(e.target)){
    //             setBtn(false)
    //         }
           
    //     }

    //     document.addEventListener('mousedown', handler);
    //     return () => {
    //         document.removeEventListener('mousedown', handler)

    //     }
    // })
    var body = document.getElementsByTagName('body')[0];

    if (btn) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'visible'

    }

    return (
        <>
            <div className='news' id='news' >
                <div className='news-main'>
                    <div className='news-main-comp'>
                        <div className='news-main-comp-p'>
                            <p>
                                Xəbərlər
                            </p>
                        </div>
                        <div className='news-main-comp-bottom'>
                            <p></p>
                            <div className='news-main-comp-bottom-btn' onClick={() => setBtn("Əlavə et")}>
                                <button>
                                    Əlavə et
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='news-card'>
                    <Card setId={setId} setBtn={setBtn} btn={btn} />
                </div>


                <NewsMain />
                {btn &&
                <div className='xeber'  >

                    <Modal id={id} setBtn={setBtn} btn={btn} />



                </div>
            }
            </div>
           
        </>
    )
}

export default News