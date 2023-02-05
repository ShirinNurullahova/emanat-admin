import React from 'react'
import profile from '../../../Images/asdf.svg'
import '../Profile/Profile.scss'
const Profile = () => {
    return (
        <div className='profile-part'>
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
        </div>
    )
}

export default Profile