import React, { useState } from 'react'
import pp from '../../../../Images/favicon.png';
import '../ProfileMain/ProfileMain.scss'
const ProfileMain = () => {
    const role = localStorage.getItem('roleName')
    const [toggle, setToggle] = useState(true)

    return (

        <div className='profile-main' onClick={() => setToggle(!toggle)}>
            <div className='profile-main-img'>
                <img src={pp} />
            </div>
            <div className='profile-main-text'>
                <p>Profil</p>
                <p className="profile-main-text-p">{role}</p>
                {/* {!toggle && (

                    <div className='toogleMenu'>
                        <p>Mənim profilim</p>
                        <p>Mesajlar</p>
                        <p>Parametrlər</p>
                        <p>Çıxış</p>

                    </div>


                )} */}
            </div>

        </div>





    )
}

export default ProfileMain