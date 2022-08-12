import React from "react";
import HeaderCommon from "./Header/HeaderCommon";
import Footer from "./Footer/Footer";
import Home from '../Home/Home';
import About from '../About/About';
import Login from '../Auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LayoutCommon = () => {
  return (
    <div className="tm-page-wrap mx-auto">
      <HeaderCommon></HeaderCommon>
      <main>
        <div className="container-fluid px-0">
            <div className="mx-auto tm-content-container">
                <div className="row mt-3 mb-5 pb-3">
                    <div className="col-12">
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home/>} exact />
                                <Route path="/about" element={<About/>} exact />
                                <Route path="/login" element={<Login/>} exact />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div className="row mt-5 pt-3">
        <div className="col-xl-6 col-lg-12 mb-4">
            <div className="tm-bg-gray p-5 h-100">
                <h3 className="tm-text-primary mb-3">Do you want to get our latest updates?</h3>
                <p className="mb-5">
                    Please subscribe our newsletter for upcoming new videos and latest information about our
                    work. Thank you.
                </p>
            </div>
        </div>
        <div className="col-xl-6 col-lg-12 mb-4">
            <div className="p-5 tm-bg-gray tm-send-mail-form">
                <form action="" method="GET" className="tm-subscribe-form">
                    <input type="text" name="email" placeholder="Your Email..." required />
                    <button type="submit" className="btn rounded-0 btn-primary tm-btn-small">Subscribe</button>
                </form>    
            </div>                        
        </div>
    </div>

    <Footer></Footer>
    </div>
  )
}

export default LayoutCommon;
