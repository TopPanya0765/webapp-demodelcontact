import React, { Component } from 'react';

import './Home.css';

import profilePic from "./profilepic.png"
import background from "./background.png"
import profileBg from "./profilebg.png"
import homeIcon from "./homeicon.png"
import profileIcon from "./profileicon.png"
import searchIcon from "./searchicon.png"
import logIcon from "./logicon.png"
import outIcon from "./outicon.png"
import log from "./log.png"
import del from "./del.png"
import mail from "./mail.png"
import chat from "./chat.png"

class Home extends Component {
    handleClick() {
        document.getElementById("slidebar").classList.toggle("active");
        document.getElementById("main").classList.toggle("active");
        document.getElementById("title").classList.toggle("active");
        document.getElementById("profile-pic").classList.toggle("active");
        document.getElementById("home-icon").classList.toggle("active");
        document.getElementById("profile-icon").classList.toggle("active");
        document.getElementById("search-icon").classList.toggle("active");
        document.getElementById("log-icon").classList.toggle("active");
        document.getElementById("out-icon").classList.toggle("active");
    }
    render() {
        return (
            <div>
                <div id="slidebar" className="home-sidebar">
                    <div className="home-toggle-btn" onClick={() => { this.handleClick()} }>
                        <span className="home-burger"></span>
                        <span className="home-burger"></span>
                        <span className="home-burger"></span>
                    </div>
                    <ul className="home-nav">
                        <img src={profilePic} id="profile-pic" className="home-profile-pic"/>
                        <li><img src={profileBg} className="home-profile-bg"/></li>
                        <li className="home-nav-text">Home</li>
                        <li className="home-nav-text">User Profile</li>
                        <li className="home-nav-text">Contact Search</li>
                        <li className="home-nav-text">Audit Log</li>
                        <li className="home-nav-text">Log out</li>
                        <img src={homeIcon} id="home-icon" className="home-home-icon"/>
                        <img src={profileIcon} id="profile-icon" className="home-profile-icon"/>
                        <img src={searchIcon} id="search-icon" className="home-search-icon"/>
                        <img src={logIcon} id="log-icon" className="home-log-icon"/>
                        <img src={outIcon} id="out-icon" className="home-out-icon"/>
                    </ul>
                </div>
                <div id="main"className="home-main">
                    <img src={background} className="home-title-bg"/>
                    <h1 id="title" className="home-title-text">tangerine</h1>
                    <h2 className="home-head-text">Service</h2>
                    <img src={log} className="home-icons"/>
                    <img src={del} className="home-icons"/>
                    <img src={mail} className="home-icons"/>
                    <img src={chat} className="home-icons"/>
                </div>
            </div>
        );
    }
}
export default Home;