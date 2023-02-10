import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Register/Register.scss'


const Register = () => {
    let navigate = useNavigate()
    const [cred, setCred] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setCred({
            ...cred,
            [e.target.name]: value

        })
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/auth/signup`, cred)
            if(response.status === 201 || response.status === 200){
                navigate("/verify");
            } else if (response.data.message === "User already exists") {
                alert("User already exists")
            }

        } catch (error) {}
    }
    return (
        <div className='register-div'>
            <div className='register-div-el'>
                <p className="register-div-el-p">Hesab yarat</p>
                <form className="register-div-el-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input placeholder="Firstname" onChange={handleChange}  type="text" name='ad' className="form-control round" />
                    </div>
                    <div className="form-group">
                        <input placeholder='Lastname' onChange={handleChange}  type="text" name='soyad' className="form-control round" />

                    </div>
                    <div className="form-group">
                        <input className="form-control round" onChange={handleChange}  placeholder='email' type="text" name='email' />

                    </div>

                    <div className="form-group">
                        <input className="form-control round" onChange={handleChange}  placeholder='parol' type="text" name='password' />

                    </div>

                    <div className="form-group">
                        <input onChange={handleChange}  className="form-control round" placeholder='parolun təsdiqi' type="text" name='confirmPassword' />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange}  className="form-control round" placeholder='nömrə' type="text" name='phone' />
                    </div>
                    <div className="form-group">
                    <button type="submit" className='form-group-register'>

                      Qeydiyyatdan keç
                    
                    </button>
                    </div>
                   
                </form>
               
                
            </div>
        </div>
    )
}

export default Register