import React, { useState } from "react";
import "../ScrollBar/ScrollBar.scss";
import { Link } from "react-router-dom";
import ProfileMain from "./ProfileMain/ProfileMain";
import Home from "../Home";
import News from "../News/News";
import HashTag from "./HashTag/HashTag";
const ScrollBar = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(true);
  const [toggle5, setToggle5] = useState(true);

  return (
    <>
      <ProfileMain />
      <div className="scroll-bar">
        <div className="scroll-bar-el">
          <div className="scroll-bar-el-text">
            <p>Əsas</p>
          </div>


          <div
            className="scroll-bar-el-down"
            onClick={() => setToggle2(!toggle2)}
          >
            <div className="scroll-bar-el-down-div">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.728,4.419H2.273c-0.236,0-0.429,0.193-0.429,0.429v10.304c0,0.234,0.193,0.428,0.429,0.428h15.455c0.235,0,0.429-0.193,0.429-0.428V4.849C18.156,4.613,17.963,4.419,17.728,4.419 M17.298,14.721H2.702V9.57h14.596V14.721zM17.298,8.712H2.702V7.424h14.596V8.712z M17.298,6.566H2.702V5.278h14.596V6.566z M9.142,13.005c0,0.235-0.193,0.43-0.43,0.43H4.419c-0.236,0-0.429-0.194-0.429-0.43c0-0.236,0.193-0.429,0.429-0.429h4.292C8.948,12.576,9.142,12.769,9.142,13.005"></path>
              </svg>
              <div className="scroll-bar-el-down-div-text">
                <p>Formlar</p>
              </div>
            </div>
            <div className="scroll-bar-el-down-svg">
              <svg className="svg-icon-two" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M13.388,
                             9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,
                             6.405,
                             9.624,
                             6.613v3.01H6.613c-0.208,
                             0-0.376,0.168-0.376,
                             0.376s0.168,
                             0.376,
                             0.376,
                             0.376h3.011v3.01c0,
                             0.208,
                             0.168
                             ,0.378
                             ,0.376,
                             0.378s0.376-0.17,
                             0.376-0.378v-3.01h3.011c0.207,
                          9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
                ></path>
              </svg>
            </div>
          </div>
          {!toggle2 && (
            <div className="scroll-bar-dropdown">
              <div className="scroll-bar-dropdown-el">
                <Link to="/contact">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Əlaqə</p>
                  </div>
                </Link>
                <Link to="/marketing-cooperation">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Marketinq-Əməkdaşlığı</p>
                  </div>
                </Link>
                <Link to="/business-cooperation">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Biznes-Əməkdaşlığı</p>
                  </div>
                </Link>
                <Link to="/hr">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Hr</p>
                  </div>
                </Link>
                <Link to="/terminalform">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Terminal</p>
                  </div>
                </Link>
              </div>
            </div>
          )}

          <div
            className="scroll-bar-el-down"
            onClick={() => setToggle3(!toggle3)}
          >
            <div className="scroll-bar-el-down-div">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>
              </svg>
              <div className="scroll-bar-el-down-div-text">
                <p>Səhifələr</p>
              </div>
            </div>
            <div className="scroll-bar-el-down-svg">
              <svg className="svg-icon-two" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M13.388,
                             9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,
                             6.405,
                             9.624,
                             6.613v3.01H6.613c-0.208,
                             0-0.376,0.168-0.376,
                             0.376s0.168,
                             0.376,
                             0.376,
                             0.376h3.011v3.01c0,
                             0.208,
                             0.168
                             ,0.378
                             ,0.376,
                             0.378s0.376-0.17,
                             0.376-0.378v-3.01h3.011c0.207,
                          9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
                ></path>
              </svg>
            </div>
          </div>
          {!toggle3 && (
            <div className="scroll-bar-dropdown">
              <div className="scroll-bar-dropdown-el">
                <Link to="/meta">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Meta</p>
                  </div>
                </Link>
                {/* <Link to="/faqSchema">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>FaqSchema</p>
                  </div>
                </Link> */}
                <Link to="/uni">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Uni</p>
                  </div>
                </Link>
                <Link to="/faq">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Faq</p>
                  </div>
                </Link>
                <Link to="/internship">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Təcrübə proqramları</p>
                  </div>
                </Link>
                <Link to="/vakansiya">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Vakansiya</p>
                  </div>
                </Link>
                <Link to="/vakansiyaFilter">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Vakansiya Filter</p>
                  </div>
                </Link>
                <Link to="/partnership">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Əməkdaşlıq</p>
                  </div>
                </Link>
              </div>
            </div>
          )}



          {/* <Link to="/terminal">
            <div className="scroll-bar-el-down">
              <div className="scroll-bar-el-down-div">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                </svg>
                <div className="scroll-bar-el-down-div-text">
                  <p>Terminallar</p>
                </div>
              </div>
            </div>
          </Link> */}

          <div
            className="scroll-bar-el-down"
            onClick={() => setToggle4(!toggle4)}
          >
            <div className="scroll-bar-el-down-div">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"></path>
              </svg>
              <div className="scroll-bar-el-down-div-text">
                <p>Digər</p>
              </div>
            </div>
            <div className="scroll-bar-el-down-svg">
              <svg className="svg-icon-two" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M13.388,
                             9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,
                             6.405,
                             9.624,
                             6.613v3.01H6.613c-0.208,
                             0-0.376,0.168-0.376,
                             0.376s0.168,
                             0.376,
                             0.376,
                             0.376h3.011v3.01c0,
                             0.208,
                             0.168
                             ,0.378
                             ,0.376,
                             0.378s0.376-0.17,
                             0.376-0.378v-3.01h3.011c0.207,
                          9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
                ></path>
              </svg>
            </div>
          </div>
          {!toggle4 && (
            <div className="scroll-bar-dropdown">
              <div className="scroll-bar-dropdown-el">
                <Link to="/meta">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Meta</p>
                  </div>
                </Link>
                <Link to="/hashtag">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Hashtag</p>
                  </div>
                </Link>
                <Link to="/pageImages">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Page-Images</p>
                  </div>
                </Link>
              </div>
            </div>
          )}

          <div
            className="scroll-bar-el-down"
            onClick={() => setToggle5(!toggle5)}
          >
            <div className="scroll-bar-el-down-div">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
              </svg>
              <div className="scroll-bar-el-down-div-text">
                <p>Terminallar</p>
              </div>
            </div>
            <div className="scroll-bar-el-down-svg">
              <svg className="svg-icon-two" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M13.388,
                             9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,
                             6.405,
                             9.624,
                             6.613v3.01H6.613c-0.208,
                             0-0.376,0.168-0.376,
                             0.376s0.168,
                             0.376,
                             0.376,
                             0.376h3.011v3.01c0,
                             0.208,
                             0.168
                             ,0.378
                             ,0.376,
                             0.378s0.376-0.17,
                             0.376-0.378v-3.01h3.011c0.207,
                          9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
                ></path>
              </svg>
            </div>
          </div>
          {!toggle5 && (
            <div className="scroll-bar-dropdown">
              <div className="scroll-bar-dropdown-el">
                <Link to="/terminalusage">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Terminal istifadə</p>
                  </div>
                </Link>
                <Link to="/terminalmap">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Terminal xəritəsi</p>
                  </div>
                </Link>
              </div>
            </div>
          )}





          <div
            className="scroll-bar-el-down"
            onClick={() => setToggle(!toggle)}
          >
            <div className="scroll-bar-el-down-div">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
              </svg>
              <div className="scroll-bar-el-down-div-text">
                <p>Tənzimləmələr</p>
              </div>
            </div>
            <div className="scroll-bar-el-down-svg">
              <svg className="svg-icon-two" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M13.388,
                             9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,
                             6.405,
                             9.624,
                             6.613v3.01H6.613c-0.208,
                             0-0.376,0.168-0.376,
                             0.376s0.168,
                             0.376,
                             0.376,
                             0.376h3.011v3.01c0,
                             0.208,
                             0.168
                             ,0.378
                             ,0.376,
                             0.378s0.376-0.17,
                             0.376-0.378v-3.01h3.011c0.207,
                          9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
                ></path>
              </svg>
            </div>
          </div>
          {!toggle && (
            <div className="scroll-bar-dropdown">
              <div className="scroll-bar-dropdown-el">
                <Link to="/reset">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Parolu yenilə</p>
                  </div>
                </Link>
                <Link to="/logout">
                  <div className="scroll-bar-dropdown-el-p">
                    <p>Çıxış</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ScrollBar;
