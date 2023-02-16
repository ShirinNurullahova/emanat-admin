import React, { useState,useEffect } from 'react'
import profile from '../../../Images/asdf.svg'
import '../Profile/Profile.scss';
import ModalMenu from '../../Header/ModalMenu';
const Profile = () => {
    const [toggle, setToggle] = useState(null)
    useEffect(() => {
        if(toggle){
          // document.getElementsByTagName('body')[0].style.position='fixed'
          document.getElementsByTagName('body')[0].style.overflow='hidden'
        //    document.getElementById('menu').style.overflow='hidden'
        }else{
          document.getElementsByTagName('body')[0].style.overflow='scroll'
          // document.getElementById('menu').style.overflow='scroll'
        }
      }, [toggle])
 
    return (
        <div className='profile-part' onClick={() => setToggle(!toggle)} >
            <div className='profile-part-img'>
                <img src={profile} />
            </div>
            <div className='profile-part-text'>
                <p>
                    eManat
                </p>
            </div>
            <div className='profile-part-hr'>
            </div>
            {
                toggle &&
                <ModalMenu toggle={toggle} />
            }
        </div>
    )
}

export default Profile