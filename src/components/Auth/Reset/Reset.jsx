import React, {useState} from 'react';
import axios from 'axios';
import '../Reset/Reset.scss'

const Reset = () => {
    const [cred1, setCred1] = useState({
        "resetToken": "",
        "password": "",
        "confirmPassword": ""

    }
    )
    const handleChangeUpdate = (e) => {
        const value = e.target.value;
        setCred1({
            ...cred1,
            [e.target.name]: value
        })
    }

    const handleSubmitUpdate = async e => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${process.env.REACT_APP_URL}/auth/reset-password/`,  cred1)
            if(response.status === 200){
			     
			}
        } catch (error) {}
    }
    return (
        <div className='reset'>
           
                <div className="reset-div">
                    <p className="reset-div-p">Reset password</p>
                    <form className="reset-div-form" action="/" onSubmit={handleSubmitUpdate}>
                        <div className="form-group">
                            
                            <input onChange={handleChangeUpdate}  type="text" name='resetToken' className="form-control round" id="signin-email" defaultValue="resetToken" placeholder="reset token" />
                        </div>
                        <div className="form-group">
                            <input onChange={handleChangeUpdate}  type="password" className="form-control round" name='password' id="signin-password" defaultValue="thisisthepassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input onChange={handleChangeUpdate}  type="password" className="form-control round" name='confirmPassword' id="signin-password" defaultValue="thisisthepassword" placeholder="Confirm Password" />
                        </div>
                        <button type="submit" className="reset-btn">Reset Password</button>
                    </form>
                </div>
         
        </div>
    )
}

export default Reset