import React from "react";
import logo from "../../../imgs/logo.svg"; 
import './style.css';


function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-content">
                            <img src={logo} alt="" />
                            <div className="footer-main-content">
                                <h4>GitHub Inc.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="footer-wrp">
                            <div className="footer-widget">
                                <a href="#">Terms</a>
                                <a href="#">Privacy</a>
                                <a href="#">Security</a>
                            </div>
                            <div className="footer-widget">
                                <a href="#">Status</a>
                                <a href="#">Docs</a>
                                <a href="#">API</a>
                            </div>
                            <div className="footer-widget">
                                <a href="#">Training</a>
                                <a href="#">Blog</a>
                                <a href="#">Pricing</a>
                            </div>
                            <div className="footer-widget">
                                <a href="#">Contact</a>
                                <a href="#">About</a>
                                <a href="#">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <p className="copyrights">@2020 GitHub Inc.. All rights reserved. </p>
        </footer>
    )
}

export default Footer;