import React from 'react'
import { Link } from 'react-router-dom'
const ModalMenu = ({ toggle }) => {
    return (
        <div className={`modalMenu ${toggle && 'active'}`}>
            <div>
                <ul className='header-content-1'>
                    <div>
                        <Link to="/">
                            <li>
                                Ana səhifə
                            </li>
                        </Link>
                        <Link to='/about'>
                            <li>
                                Haqqımızda
                            </li>
                        </Link>

                        <Link to='/partnership'>
                            <li>
                                Əməkdaşlıq
                            </li>
                        </Link>
                        <Link to='/career'>
                            <li>
                                Karyera
                            </li>
                        </Link>
                        <Link to='/news'>
                            <li>
                                Xəbərlər
                            </li>

                        </Link>

                    </div>

                </ul>
            </div>
        </div>
    )
}

export default ModalMenu