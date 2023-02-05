import React , {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Login/Login.scss'
const Login = () => {
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        password: '',
        email: ""
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
            const response =await axios.post(`${process.env.REACT_APP_URL}/auth/login`, cred)
            if(response.status ===200){
                   navigate('/')
            }
        } catch (error) {}
    }
    return (
           <div className='login'>
         
            <div className="login-div">
                <div className="login-div-el">
                    <p className="login-div-el-p">Login to your account</p>
                    <form className="login-div-el-form" action="/"  onSubmit={handleSubmitLogin}>
                        <div className="login-div-el-form-group">
                            <label htmlFor="signin-email" className="control-label"></label>
                            <input onChange={handleChangeLogin} type="email" className="form-control round" name='email' id="signin-email" defaultValue="user@domain.com" placeholder="Email" />
                        </div>
                        <div className="login-div-el-form-group">
                            <label htmlFor="signin-password" className="control-label"></label>
                            <input onChange={handleChangeLogin} type="password" className="form-control round" name='password' id="signin-password" defaultValue="thisisthepassword" placeholder="Password" />
                        </div>
                        <div className="login-div-el-form-group">
                            <label >
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                        </div>
                        <button type="submit" className='loginBtn'>LOGIN</button>
                        <div className='login-div-el-form-end'>
                            <span onClick={()=>navigate('/reset')}><i className="fa fa-lock"></i>Forgot password?</span>
                            <span>Don't have an account?<span onClick={()=>navigate('/register')}>Register</span></span>
                        </div>
                    </form>
                </div>
            </div>
         
            </div>
    )
}

export default Login