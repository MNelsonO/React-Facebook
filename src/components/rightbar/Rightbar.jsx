import React from "react";
import "./Rightbar.css";

export default function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Mitchelle Kaitu</b> and <b>3 other Friends</b>
                        </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList" >
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg" 
                            src="assets/person/5.jpeg" 
                            alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Aurs Aioslo</span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg" 
                            src="assets/person/6.jpeg" 
                            alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Dasli sois </span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg" 
                            src="assets/person/9.jpeg" 
                            alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Muisu suisn </span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg" 
                            src="assets/person/8.jpeg" 
                            alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Annah Campbelle</span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg" 
                            src="assets/person/2.jpeg" 
                            alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Hanifa Aisoj</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}