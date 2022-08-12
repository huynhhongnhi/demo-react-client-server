import React from "react";
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="position-relative">
            <div className="position-absolute tm-site-header">
                <div className="container-fluid position-relative">
                    <div className="row">
                        <div className="col-7 col-md-4">
                            <a href="index.html" className="tm-bg-black text-center tm-logo-container">
                                <i className="fas fa-video tm-site-logo mb-3"></i>
                                <h1 className="tm-site-name">Catalog</h1>
                            </a>
                        </div>
                        <div className="col-5 col-md-8 ml-auto mr-0">
                            <div className="tm-site-nav">
                                <nav className="navbar navbar-expand-lg mr-0 ml-auto" id="tm-main-nav">
                                    <button className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed" type="button"
                                        data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbar-nav"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span>
                                            <i className="fas fa-bars tm-menu-closed-icon"></i>
                                            <i className="fas fa-times tm-menu-opened-icon"></i>
                                        </span>
                                    </button>
                                    <Navbar></Navbar>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tm-welcome-container text-center text-white">
                <div className="tm-welcome-container-inner">
                    <p className="tm-welcome-text mb-1 text-white">Video Catalog is brought to you by TemplateMo.</p>
                    <p className="tm-welcome-text mb-5 text-white">This is a full-width video banner.</p>
                    <a href="#content" className="btn tm-btn-animate tm-btn-cta tm-icon-down">
                        <span>Discover</span>
                    </a>
                </div>
            </div>

            <div id="tm-video-container">
                <video muted loop id="tm-video">
                    <source src="video/wheat-field.mp4" type="video/mp4"/>
                </video>
            </div>
            
            <i id="tm-video-control-button" className="fas fa-pause"></i>
        </div>
  )
}

export default Header