import React from 'react'
import Login from '../../components/Auth/Login/Login'
import Header from '../../components/Header/Header'
import Profile from '../../components/LeftBar/Profile/Profile'
import ScrollBar from '../../components/LeftBar/ScrollBar/ScrollBar'
import '../Main/Main.scss'
const Main = () => {
  return (
    <div className='main-page'>
      <div className='main-page-up'>
        <Profile />
        <Header />
      </div>
     
      <ScrollBar/>
     
   
     
    </div>
  )
}

export default Main