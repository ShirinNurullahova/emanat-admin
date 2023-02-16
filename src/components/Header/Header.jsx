import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.scss'
import ModalMenu from './ModalMenu';
import SearchBar from './SearchBar/SearchBar';


const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled)
  }
  useEffect(() => {
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  
    





  return (
    <div className='header'>
      <ul className='header-content'>
        <div>
          <Link to="/">
            <li>
              Ana səhifə
            </li>
          </Link>
          <Link to='/about'>
            <li>
              Haqqımızda
            </li>
          </Link>

          <Link to='/partnership'>
            <li>
              Əməkdaşlıq
            </li>
          </Link>
          <Link to='/career'>
            <li>
              Karyera
            </li>
          </Link>
          <Link to='/news'>
            <li>
              Xəbərlər
            </li>

          </Link>

        </div>
        <div>
          {/* <li onClick={() => setToggle(!toggle)}>
            <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none"
                stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
            {!toggle && (
               <SearchBar toggle={toggle}/>
            )}
          </li> */}
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-power" viewBox="0 0 16 16"> <path d="M7.5 1v7h1V1h-1z" />
              <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
            </svg>
          </li>
        </div>
      </ul>
      {/* <div className="menu" id='menu'>
        <div className='svg-div'>
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path fill="white" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
        </svg>
        </div>
         
      </div> */}
      <div className='header-progress-bar'>
        <div className='header-progress-bar-style' style={{ width: `${scrollTop}%` }}>
        </div>
      </div>
    </div>
  )
}
export default Header