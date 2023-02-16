import React, { useEffect } from "react";
import Login from "./components/Auth/Login/Login";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { axiosInterceptorHandle } from './utils/AxiosInterceptor'
import Main from "./pages/Main/Main";
import Register from "./components/Auth/Register/Register";
import Forgot from "./components/Auth/Forgot/Forgot";
import Verify from "./components/Auth/Verify/Verify";
import Reset from "./components/Auth/Reset/Reset";
import Logout from "./components/Auth/Logout/Logout";
import News from "./components/LeftBar/News/News";
import Profile from "./components/LeftBar/Profile/Profile";
import Header from "./components/Header/Header";
import ScrollBar from "./components/LeftBar/ScrollBar/ScrollBar";
import './App.css';
import HashTag from "./components/LeftBar/ScrollBar/HashTag/HashTag";
import Vakansiya from "./components/LeftBar/Vakansiyalar/Vakansiya";
import About from "./components/LeftBar/About/About";
import Partnership from "./components/LeftBar/PartnerShip/Partnership";
import Faq from "./components/LeftBar/Faq/Faq";
import Cooperative from "./components/LeftBar/Cooperative/Cooperative";
import InternShipProgram from "./components/LeftBar/InternShipProgram/InternShipProgram"
import Uni from "./components/LeftBar/Uni/Uni";
import Career from "./components/LeftBar/Career/Career";
import Hr from "./components/Auth/Forms/Hr/Hr";
import Terminal from "./components/Auth/Forms/Terminal/Terminal";
import BusinessCooperation from "./components/Auth/Forms/BusinessCooperation/BusinessCooperation";
import MarketingCooperation from "./components/Auth/Forms/MarketingCooperation/MarketingCooperation";
import Contact from "./components/Auth/Forms/Contact/Contact";
import MetaPage from "./components/LeftBar/MetaPage/MetaPage";
import Terminals from "./components/Auth/Terminals/Terminals";
import TerminalUsage from "./components/LeftBar/TerminalUsage/TerminalUsage";
import TerminalMap from "./components/Auth/Terminals/TerminalMap/TerminalMap";
import VakansiyaFilter from "./components/LeftBar/Vakansiya-Filter/VakansiyaFilter";
import FaqSchema from "./components/LeftBar/FaqSchema/FaqSchema";


function App() {
  const header = document.getElementsByClassName("main-page-up")
  const two_components = document.getElementsByClassName("two-components")

  let navigate = useNavigate()

  const windowLocation = useLocation().pathname;
  axiosInterceptorHandle(navigate);

  useEffect(() => {
    if (windowLocation.includes("login") || windowLocation.includes("register") || windowLocation.includes("forgot") || windowLocation.includes("verify") || windowLocation.includes("reset") || windowLocation.includes("logout")) {
      header[0].style.display = 'none'
      two_components[0].style.display = 'none'
    } else {
      header[0].style.display = 'flex'
      two_components[0].style.display = 'block'
    }

    let localDataAuth = false;
    let localDataRefresh = false;

    localDataAuth = localStorage.getItem(process.env.REACT_APP_ACCESS_KEYWORD);
    localDataRefresh = localStorage.getItem(process.env.REACT_APP_REFRESH_KEYWORD);

    if (!localDataAuth && !localDataRefresh &&
      windowLocation !== "/forgot"
      && windowLocation !== "/reset"
      && windowLocation !== "/register"
      && windowLocation !== "/verify") {
      navigate("/login");
    } else if (localDataAuth && localDataRefresh && windowLocation === "/login") {
      navigate("/");
    }
  }, [windowLocation])

  return (
    <div className="App" >
        <div className='main-page-up' id="main-page-up">
          <Profile />
          <Header />
        </div>
        <div className="two">
          <div className='two-components' id='scrollBar'>
            <ScrollBar />
          </div>
          <div className="two-right">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/terminalusage" element={<TerminalUsage />} />
              <Route path="/terminalmap" element={<TerminalMap />} />
              <Route path="/hashtag" element={<HashTag />} />
              <Route path="/vakansiya" element={<Vakansiya />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/cooperative" element={<Cooperative />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/internship" element={<InternShipProgram />} />
              <Route path="/uni" element={<Uni />} />
              <Route path="/career" element={<Career />} />
              <Route path="/meta" element={<MetaPage />} />
              <Route path="/news" element={<News />} />
              <Route path='/register' element={<Register />} />
              <Route path='/forgot' element={<Forgot />} />
              <Route path='/verify' element={<Verify />} />
              <Route path='/reset' element={<Reset />} />
              <Route path="/terminalform" element={<Terminal />} />
              <Route path="/business-cooperation" element={<BusinessCooperation />} />
              <Route path="/marketing-cooperation" element={<MarketingCooperation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hr" element={<Hr />} />
              <Route path="/business-cooperation" element={<BusinessCooperation />} />
              <Route path="/marketing-cooperation" element={<MarketingCooperation />} />
              <Route path="/terminal" element={<Terminals />} />
              <Route path="/vakansiyaFilter" element={<VakansiyaFilter />} />
            </Routes>
          </div>
        </div>
        
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
