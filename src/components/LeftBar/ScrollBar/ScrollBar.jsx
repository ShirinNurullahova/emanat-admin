import React, { useState } from 'react'
import '../ScrollBar/ScrollBar.scss'
import { Link } from 'react-router-dom'
import ProfileMain from './ProfileMain/ProfileMain'
import Home from '../Home'
const ScrollBar = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <div className='two'>
            <div className='two-components'>
                <ProfileMain />
                <div className='scroll-bar'>
                    <div className='scroll-bar-el'>
                        <div className='scroll-bar-el-text'>
                            <p>Main</p>
                        </div>
                        <div className='scroll-bar-el-down' onClick={() => setToggle(!toggle)}>
                            <div className='scroll-bar-el-down-div'>
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
                                </svg>
                                <div className='scroll-bar-el-down-div-text'>
                                    <p>Authentication</p>
                                </div>
                            </div>
                            <div className='scroll-bar-el-down-svg' >
                                <svg className="svg-icon-two" viewBox="0 0 20 20">
                                    <path fill="none"
                                        d="M13.388,
                             9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,
                             6.405,
                             9.624,
                             6.613v3.01H6.613c-0.208,
                             0-0.376,0.168-0.376,
                             0.376s0.168,
                             0.376,
                             0.376,
                             0.376h3.011v3.01c0,
                             0.208,
                             0.168
                             ,0.378
                             ,0.376,
                             0.378s0.376-0.17,
                             0.376-0.378v-3.01h3.011c0.207,
                          9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                                </svg>
                            </div>
                        </div>
                        {!toggle && (
                            <div className='scroll-bar-dropdown'>
                                <div className='scroll-bar-dropdown-el'>
                                    <Link to='/login'>
                                        <div className='scroll-bar-dropdown-el-p'>
                                            <p>Login</p>
                                        </div>
                                    </Link>
                                    <Link to='/register'>
                                        <div className='scroll-bar-dropdown-el-p'>
                                            <p>Register</p>
                                        </div>
                                    </Link>
                                    <Link to='/forgot'>
                                        <div className='scroll-bar-dropdown-el-p'>
                                            <p>Forgot Password</p>
                                        </div>
                                    </Link>
                                    <Link to='/verify'>
                                        <div className='scroll-bar-dropdown-el-p'>
                                            <p>Verify Account</p>
                                        </div>
                                    </Link>
                                    <Link to='/reset'>
                                        <div className='scroll-bar-dropdown-el-p'>
                                            <p>Reset Password</p>
                                        </div>
                                    </Link>
                                    <Link to='/logout'>
                                        <div className='scroll-bar-dropdown-el-p'>
                                            <p>Logout</p>
                                        </div>
                                    </Link>

                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
         <Home/>
        </div>
    )
}

export default ScrollBar