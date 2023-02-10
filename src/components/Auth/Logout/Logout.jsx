import React , {useState} from 'react';
import axios from 'axios';
import '../Logout/Logout.scss';
import { useNavigate } from 'react-router';

const Logout = () => {
    const navigate=useNavigate();
    const handleSubmitLogout = async e => {
        e.preventDefault();
      
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/auth/logout`, {})
            if(response.status === 200 || response.status === 201) {
                navigate("/login");
                localStorage.removeItem(process.env.REACT_APP_ACCESS_KEYWORD);
                localStorage.removeItem(process.env.REACT_APP_REFRESH_KEYWORD);
            }
        } catch (error) {}
    }
    return (
        <div className='logout'>
            <div className="logout-div">
                <div className="logout-div-el">
                    {/* <p className="logout-div-el-p">Çıxış</p> */}
                    <form className="logout-div-el-form" action="/" onSubmit={handleSubmitLogout}>
                        <button type="submit" className="logout-btn">Çıxış</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Logout