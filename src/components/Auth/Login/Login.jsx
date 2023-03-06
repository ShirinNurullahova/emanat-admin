import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Login/Login.scss'
const Login = () => {
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        email: "",
        password: ''
    }
    )

    const handleChangeLogin = (e) => {
        const value = e.target.value;
        setCred({
            ...cred,
            [e.target.name]: value

        })
    }
    const handleSubmitLogin = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/auth/login`, cred
            )
            if (response.status === 200 || response.status === 201) {
                navigate('/')
            }
        } catch (error) {
            alert('Email və ya parol səhvdir')
        }
    }

    return (
        <div className='login'>

            <div className="login-div">
                <div className="login-div-el">
                    <p className="login-div-el-p">Hesabınıza giriş edin</p>
                    <form className="login-div-el-form" action="/" onSubmit={handleSubmitLogin}>
                        <div className="login-div-el-form-group">
                            <label htmlFor="signin-email" className="control-label"></label>
                            <input onChange={handleChangeLogin} type="email" className="form-control round" required name='email' id="signin-email" placeholder="admin@gmail.com" />
                        </div>
                        <div className="login-div-el-form-group">
                            <label htmlFor="signin-password" className="control-label"></label>
                            <input onChange={handleChangeLogin} type="password" className="form-control round" required name='password' id="signin-password" placeholder="parol" />
                        </div>
                        {/* <div className="login-div-el-form-group">
                            <label >
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>    
                        </div> */}
                        <button type="submit" className='loginBtn'>Giriş</button>
                        {/* <div className='login-div-el-form-end'>
                            <span onClick={()=>navigate('/reset')}><i className="fa fa-lock"></i>Parolu unutmusan?</span>
                            <span>Hesabınız yoxdur?<span onClick={()=>navigate('/register')}>Qeydiyyatdan keç</span></span>
                        </div> */}
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login