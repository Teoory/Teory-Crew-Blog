import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import useUser from './hooks/useUser';
import logo from './images/Logo4.png'; // with import

const NavBar = () => {
  const { user, isLoading } = useUser();
    return (
        <div id="NBar">
          <nav className="navbar" id="navbar">
              <div className="navbar-container container">
                  <input type="checkbox" name="" id=""/>
                  <div className="hamburger-lines">
                      <span className="line line1"></span>
                      <span className="line line2"></span>
                      <span className="line line3"></span>
                  </div>
                  <ul className="menu-items">
                    <li> <Link to="/" className="li-item">Ana Sayfa</Link> </li>
                    <li> 
                      <div className="dropdown"> 
                        <Link className="li-item" id="dropdown"> icerikler </Link>
                        <div className="dropdown-content"> 
                          <Link to="/blogs">Blog</Link>
                          <Link to="/">anketler</Link>
                          <Link to="/">SearchFinder</Link>
                          <Link to="/">To-Do</Link>
                          <Link to="/">yorumlar</Link>
                        </div>
                      </div>                      
                    </li>
                    <li> <Link to="/info" className="li-item">Hakkimda</Link> </li>
                    <li> <Link to="/" className="li-item">iletisim</Link> </li>
                    {user 
                        ? <Link to="/" className="login"><i class="fa fa-user"></i> Hesabım</Link>
                        : <Link to="/login" className="login"><i class="fa fa-users"></i> Giris Yap/Kayıt Ol</Link>
                    }
                  
                  </ul>
                  <a href="/" className="logo">
                    <img id="logo" src={logo} alt="Teory-Logo" className="logo"/>
                  </a>
              </div>
          </nav>
    </div>
    )
}

export default NavBar;