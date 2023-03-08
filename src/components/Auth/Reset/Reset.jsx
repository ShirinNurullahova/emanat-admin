import React, {useState} from 'react';
import axios from 'axios';
import '../Reset/Reset.scss'

const Reset = () => {
    const [cred1, setCred1] = useState({
        "oldPassword": "",
        "newPassword": "",
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
            const response = await axios.patch(`${process.env.REACT_APP_URL}/user/update-password`,  cred1)
            if(response.status === 200 || response.status === 201){
                document.querySelector('.alertModalApi .text').innerHTML='Parolunuz müvəffəqiyyətlə dəyişdi';
                document.querySelector('.alertModalApi').classList.add('patch')
                document.querySelector('.alertModalApi').classList.remove('post')
                document.querySelector('.alertModalApi').classList.remove('delete')
                document.querySelector('.alertModalApi').classList.add('visible')
                document.querySelector('.alertModalApi').classList.remove('hidden')
              setTimeout(()=>{
                document.querySelector('.alertModalApi').classList.remove('visible')
                document.querySelector('.alertModalApi').classList.add('hidden')
             },1000)
			}
        } catch (error) {}
    }

    
    return (
        <div className='reset'>
           
                <div className="reset-div">
                    <p className="reset-div-p">Parolu yeniləmək</p>
                    <form className="reset-div-form" action="/" onSubmit={handleSubmitUpdate}>
                        <div className="form-group">
                            <input onChange={handleChangeUpdate}  type="text" name='oldPassword' className="form-control round" id="signin-email" placeholder="Köhnə parol" />
                        </div>
                        <div className="form-group">
                            <input onChange={handleChangeUpdate}  type="password" className="form-control round" name='newPassword' id="signin-password" placeholder="Yeni parol" />
                        </div>
                        <div className="form-group">
                            <input onChange={handleChangeUpdate}  type="password" className="form-control round" name='confirmPassword' id="signin-password" placeholder="Parolun təsdiqi" />
                        </div>
                        <button type="submit" className="reset-btn">Parolu yenilə</button>
                    </form>
                </div>
         
        </div>
    )
}

export default Reset