import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from './Card/Card';
import Modal from './Modal/Modal';
import '../News/News.scss'
const News = () => {
    const [id, setId] = useState(null)
    const [btn, setBtn] = useState(null)

    return (
        <div className='news'>
            <div className='news-main'>
                <div className='news-main-comp'>
                    <div className='news-main-comp-p'>
                        <p>
                            News
                        </p>
                    </div>
                    <div className='news-main-comp-bottom'>
                        <p><span>Claradix</span> / News</p>
                        <div className='news-main-comp-bottom-btn' onClick={() => setBtn("Add news")}>
                            <button>
                                Add New
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='news-card'>
                <Card setId={setId} setBtn={setBtn} btn={btn} />
            </div>
            {btn &&
                <div className='news-modal'>

                    <Modal id={id} setBtn={setBtn} btn={btn} />



                </div>
            }
        </div>
    )
}

export default News