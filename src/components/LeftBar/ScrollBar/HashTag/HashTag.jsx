import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

import '../HashTag/HashTag.scss';
import Element from './Element/Element';
import ModalAdd from './ModalAdd/ModalAdd';

const HashTag = () => {
    const [data, setData] = useState(null);
    const [open , setOpen]= useState(null)
    const fetchData = () => {

        axios.get((`${process.env.REACT_APP_URL}/tag/hashTag`))
            .then(res => {
                setData(res.data);
            })
            .catch((err) => {});
    }

    useEffect(() => {
        if(!open){
        fetchData();
        }
    }, [open]);
    var body = document.getElementsByTagName('body')[0];

    if (open) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'visible'
  
    }
    return (
        <div className='hashtag'>
            <div className='hashtag-btn' onClick={()=> setOpen(!open)}>
                <button>
                    Əlavə et
                </button>
            </div>
           
            {data &&
                data.map((e) => {
                    return (
                       <Element e={e}/>
                    )

                })
            }
            {  open &&
           <ModalAdd setOpen={setOpen}/>
           }
        </div>
    )
}

export default HashTag