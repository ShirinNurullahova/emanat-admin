import React, { useState } from 'react';
import axios from 'axios';
import '../Verify/Verify.scss'
import {useNavigate } from 'react-router-dom';

const Verify = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = async e => {

    e.preventDefault()
    try {
      const response =
        await axios.post(`${process.env.REACT_APP_URL}/auth/verify-account`,
          {
            "verifyToken": value
          })
         if(response.status ===200){
            navigate("/login")
         }
    } catch (error) {
      alert(error)
    }
  }
  return (

    <div className="verify">
      <div className="verify-div">
        <p className="verify-div-p">Verify account</p>
        <form className="verify-div-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input onChange={handleChange} placeholder="Verify Acc" type="text" name='verifyToken' className="form-control round" />
          </div>
          <button type="submit" className="verify-btn">Verify</button>
        </form>
      </div>
    </div>

  )
}

export default Verify