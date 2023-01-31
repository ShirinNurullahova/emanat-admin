import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Forgot/Forgot.scss';


const Forgot = () => {
    const [cred1, setCred1] = useState({
        "email": "",

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
            const response = await axios.post(`${process.env.REACT_APP_URL}/auth/forgot-password`, cred1)
			if(response.status === 200){
				
			}
        } catch (error) {}
    }
    return (
        <div className='forgot-password'>
            <div className='forgot-password-div'>
                <p className='text'><strong>Oops</strong>,<br/> forgot something?</p>
                <p>Write email</p>
                <form action="" onSubmit={handleSubmitUpdate}>
                    <div className="form-group">
                        <input onChange={handleChangeUpdate} name="email" type="email" className="form-control round" id="signup-password" placeholder="email" />
                    </div>
                    <button type="submit" className='forgot-btn'>Send</button>

                    <div className='backto'>
                        <span >Know your password? <Link to="/login">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forgot