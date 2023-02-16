import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from './Card/Card';
import Modal from './Modal/Modal';
import '../News/News.scss'
import NewsMain from './NewsMain/NewsMain';
const News = () => {
    const [id, setId] = useState(null)
    const [btn, setBtn] = useState(null)

//    useEffect(()=>{

//     const wrapper = document.getElementById("news");
//     const header = document.getElementById("main-page-up");
//     const scrollbar = document.getElementById("scrollBar");
  
//     if(btn){
//         wrapper.style.filter = "blur(3px)";
//         header.style.filter = "blur(3px)";
//         scrollbar.style.filter = "blur(3px)";

//     }
//    },[btn])

    return (
        <>
            <div className='news' id='news'>
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
            </div>
            {btn &&
                <div className='news-modal'  >

                    <Modal id={id} setBtn={setBtn} btn={btn} />



                </div>
            }
        </>
    )
}

export default News