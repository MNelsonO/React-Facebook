import React from "react";
import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft"></div>
                <span className="Logo">GodamiT</span>
            <div className="topbarCenter"></div>
                <div className="searchbar">
                    <SearchIcon className="searchIcon"/>
                    <input placeholder="Search for Friends, posts or videos" className="searchInput" />
                </div>
            <div className="topbarRight">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons"></div>
            <div className="topbarIconItem">
                <PersonIcon />
                <span className="topbarIconBadge">1</span>

            </div>
            <div className="topbarIcons"></div>
            <div className="topbarIconItem">
                <ChatIcon />
                <span className="topbarIconBadge">2</span>

            </div>
            <div className="topbarIcons"></div>
            <div className="topbarIconItem">
                <NotificationsIcon />
                <span className="topbarIconBadge">1</span>

            </div>
            <img src="/assets/person/N.M.jpg" alt="" className="topbarImg" />
            </div>
    )
}