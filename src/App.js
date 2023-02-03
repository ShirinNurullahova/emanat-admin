import React, { useEffect } from "react";
import Login from "./components/Auth/Login/Login";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { axiosInterceptorHandle } from './utils/AxiosInterceptor'
import Main from "./pages/Main/Main";
import Register from "./components/Auth/Register/Register";
import Forgot from "./components/Auth/Forgot/Forgot";
import Verify from "./components/Auth/Verify/Verify";
import Reset from "./components/Auth/Reset/Reset";
import Logout from "./components/Auth/Logout/Logout";
import News from "./components/LeftBar/News/News";
import Modal from "./components/LeftBar/News/Modal/Modal";
import Profile from "./components/LeftBar/Profile/Profile";
import Header from "./components/Header/Header";
import ScrollBar from "./components/LeftBar/ScrollBar/ScrollBar";
import './App.css';
import HashTag from "./components/LeftBar/ScrollBar/HashTag/HashTag";

function App() {
  const header = document.getElementsByClassName("main-page-up")


  let navigate = useNavigate()

  const windowLocation = useLocation().pathname;
  axiosInterceptorHandle(navigate);

  useEffect(() => {
    if (windowLocation.includes("login") || windowLocation.includes("register") ||  windowLocation.includes("forgot") || windowLocation.includes("verify") ||  windowLocation.includes("reset")) {
      header[0].style.display = 'none'
    } else {
      header[0].style.display = 'flex'
    }
    
    let localDataAuth = false;
    let localDataRefresh = false;

    localDataAuth = localStorage.getItem(process.env.REACT_APP_ACCESS_KEYWORD);
    localDataRefresh = localStorage.getItem(process.env.REACT_APP_REFRESH_KEYWORD);

    if (!localDataAuth && !localDataRefresh &&
      windowLocation !== "/forgot"
      && windowLocation.split("/")[1] !== "reset") {
      navigate("/login");
    } else if (localDataAuth && localDataRefresh && windowLocation === "/login") {
      navigate("/");
    }
  }, [windowLocation])

  return (
    <div className="App">
      <div className='main-page-up'>
        <Profile />
        <Header />
      </div>
      <div className="two">
        <ScrollBar />
      
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hashtag" element={<HashTag/>} />

          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/logout' element={<Logout />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
