import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './NavBar';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import InfoPage from './pages/InfoPage';
import BlogListPage from './pages/BlogListPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
// import SoruOyunu from './pages/SoruOyunu';
import SearchFinder from './pages/SearchFinder';
import AnketOyun from './pages/AnketOyun';
document.title = "Teory^Crew";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
            <div>
              <Routes>
                <Route path="/" element= {<HomePage/>} />
                <Route path="*" element= {<NotFoundPage/>} />
                <Route path="/info" element= {<InfoPage/>} />
                <Route path="/login" element= {<LoginPage/>} />
                <Route path="/register" element= {<CreateAccountPage/>} />
                <Route path="/blogs" element= {<BlogListPage/>} />
                <Route path="/blogs/:blogId" element= {<BlogPage/>} />
                {/* <Route path='/soruoyunu' element= {<SoruOyunu/>} /> */}
                <Route path='/searchfinder' element= {<SearchFinder/>} />
                <Route path='/anketoyun' element= {<AnketOyun/>} />
              </Routes>
            </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

