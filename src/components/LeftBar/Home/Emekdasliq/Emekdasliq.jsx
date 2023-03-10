import React, { useState, useEffect, useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import Head from './Head/Head'
import Icons from './Icons/Icons'
import Modal from './Modal/Modal';
import '../Emekdasliq/Emekdasliq.scss'
const Emekdasliq = () => {
    const [id, setId] = useState(null);
    const [open, setOpen] = useState(null)
    const [icon, setIcon] = useState(null)

    // const menuRef = useRef()
    // useEffect(() => {
    //     let handler = (e) => {
    //         if (menuRef.current.contains(e.target))
    //             setOpen(false)
    //     }
    //     document.addEventListener('mousedown', handler);
    //     return () => {
    //         document.removeEventListener('mousedown', handler)
    //     }
    // })
    var body = document.getElementsByTagName('body')[0];

    if (open) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'visible'

    }
    return (
        <div >
            <Head setId={setId} id={id} />
            <div className='icon-elave' onClick={() => setOpen("Əlavə et")}>
                <button>
                    Əlavə et
                </button>

            </div>
            <div className='middle-bottom'>

                <div className='middle-bottom-el'>
                    <Icons setIcon={setIcon} setId={setId} setOpen={setOpen} open={open} />


                    {open &&

                        <Modal icon={icon} open={open} setOpen={setOpen} id={id} />
                    }

                </div>



            </div>

        </div>
    )
}

export default Emekdasliq