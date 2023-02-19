import React, { useState, useEffect, useRef } from 'react'
import profile from '../../../Images/asdf.svg'
import '../Profile/Profile.scss';
import ModalMenu from '../../Header/ModalMenu';
const Profile = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)){
                
                setToggle(false);
            }
        }
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })
    useEffect(() => {
        if (toggle) {
            document.getElementsByClassName('two-right')[0].style.filter='blur(10px)';
            document.body.style.overflow='hidden';
        } else { 
            document.getElementsByClassName('two-right')[0].style.filter='none'
            document.body.style.overflow='visible'
        }
    }, [toggle])

    return (
        <div className='pr' ref={menuRef}>
            <div className='profile-part' onClick={() => setToggle(!toggle)} >

                <div className='profile-part-div'>
                    <div className='profile-part-div-img'>
                        <img src={profile} />
                    </div>
                    <div className='profile-part-div-text'>
                        <p>
                            eManat
                        </p>
                    </div>
                </div>



                <div className='profile-part-hr'>
                </div>

            </div>
            {
                toggle &&
                <ModalMenu toggle={toggle} />
            }

        </div>
    )
}

export default Profile