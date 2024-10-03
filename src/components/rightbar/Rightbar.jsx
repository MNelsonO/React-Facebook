import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}){
    const HomeRightbar = () =>{
        return(
           <><div className="birthdayContainer">
           <img className="birthdayImg" src="assets/gift.png" alt="" />
           <span className="birthdayText">
               <b>Mitchelle Kaitu</b> and <b>3 other Friends</b>
               </span>
       </div>
       <img className="rightbarAd" src="assets/ad.png" alt="" />
       <h4 className="rightbarTitle">Online Friends</h4>
       <ul className="rightbarFriendList" >
           {Users.map((u) => (
               <Online key={u.id} user={u}/>
           ))}
       </ul></> 
        )
    }

// const ProfileRightbar=()=>{
//     return(<h1>Hey its Profile</h1>)
// }

    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <HomeRightbar />
            </div>

        </div>
    )
}