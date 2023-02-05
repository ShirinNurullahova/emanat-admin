import React, { useState } from 'react'
import pp from '../../../../Images/favicon.png';
import '../ProfileMain/ProfileMain.scss'
const ProfileMain = () => {
    const [toggle, setToggle] = useState(true)

    return (

        <div className='profile-main' onClick={() => setToggle(!toggle)}>
            <div className='profile-main-img'>
                <img src={pp} />
            </div>
            <div className='profile-main-text'>
                <p>Welcome,</p>
                <p className={`profile-main-text-p ${!toggle && 'clickDiv'} `}>eManat</p>
                {!toggle && (

                    <div className='toogleMenu'>
                        <p>My Profile</p>
                        <p>Messages</p>
                        <p>Settings</p>
                        <p>Logout</p>

                    </div>


                )}
            </div>

        </div>





    )
}

export default ProfileMain