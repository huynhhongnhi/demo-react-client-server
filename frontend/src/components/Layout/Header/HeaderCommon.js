import React from "react";
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="position-relative">
			<div className="potition-absolute tm-site-header">
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
			<div className="tm-welcome-container tm-fixed-header tm-fixed-header-1">
				<div className="text-center">
					<p className="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 text-white mx-auto">Background image can be fixed. Content will simply slide over.</p>                	
				</div>                
            </div>

            <div id="tm-fixed-header-bg"></div> 
		</div>
  )
}

export default Header