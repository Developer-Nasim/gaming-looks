import React from "react";
import logo from "../../../imgs/logo.svg";
import filterSVG from "../../../imgs/filter.svg";
import DownArrow from "../../../imgs/down-arrow.svg";
import Notif from "../../../imgs/notif.svg";
import AddMore from "../../../imgs/add.svg"; 
// import Avatar from "../../../imgs/avatar.png";
import Avatar from "../../../imgs/avatar.jfif"
import './style.css';



function Header() {
    return( 
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="logo">
                            <a href="#"><img src={logo} alt="" /></a>
                            <label htmlFor="">
                                <input type="text" placeholder="Search" />
                                <img src={filterSVG} alt="" />
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="menus">
                            <ul>
                                <li><a href="#">Pull Requests</a></li>
                                <li><a href="#">Issues</a></li>
                                <li><a href="#">Marketplace</a></li>
                                <li><a href="#">Explore</a></li>
                            </ul>
                            <div className="header-actions">
                                <div className="actionBtns"> 
                                    <div className="notif">
                                        <img src={Notif} alt="" />
                                    </div>
                                    <div className="addSmt">
                                        <img src={AddMore} alt="" />
                                    </div>
                                </div>
                                <div className="avtar">
                                    <div className="profile-btn"> 
                                        <img className="profile-img" src={Avatar} alt="" />
                                        <img className="down-arrow" src={DownArrow} alt="" />
                                    </div>
                                    <div className="PrfileMoreMenu">
                                        <ul>
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Setting</a></li>
                                            <li><a href="#">Log Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </header> 
    )
}

export default Header;