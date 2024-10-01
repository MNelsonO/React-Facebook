// import React from "react";
// import "./Sidebar.css";
// import RssFeedIcon from '@mui/icons-material/RssFeed';
// import BookmarksIcon from '@mui/icons-material/Bookmarks';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import EventIcon from '@mui/icons-material/Event';
// import SchoolIcon from '@mui/icons-material/School';
// import ChatIcon from '@mui/icons-material/Chat';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import GroupsIcon from '@mui/icons-material/Groups';

// export default function Sidebar(){
//     return(
//         <div className="sidebar">
//         <div className="sidebarWrapper">
//           <ul className="sidebarList">
//             <li className="sidebarListItem">
// <RssFeedIcon className="sidebarIcon" />
// <span className="sidebarListItemText">Feed</span>
//             </li>
//             <li className="sidebarListItem">
// <ChatIcon  className="sidebarIcon" />
// <span className="sidebarListItemText">Chats</span>
//             </li>
//             <li className="sidebarListItem">
// <PlayCircleIcon className="sidebarIcon" />
// <span className="sidebarListItemText">Videos</span>
//             </li>
//             <li className="sidebarListItem">
// <GroupsIcon className="sidebarIcon" />
// <span className="sidebarListItemText">Groups</span>
//             </li>
//             <li className="sidebarListItem">
// <BookmarksIcon className="sidebarIcon" />
// <span className="sidebarListItemText">BookMarks</span>
//             </li>
//             <li className="sidebarListItem">
// <HelpOutlineIcon className="sidebarIcon" />
// <span className="sidebarListItemText">Questions</span>
//             </li>
//             <li className="sidebarListItem">
// <WorkOutlineIcon  className="sidebarIcon" />
// <span className="sidebarListItemText">Jobs</span>
//             </li>
//             <li className="sidebarListItem">
// <EventIcon className="sidebarIcon" />
// <span className="sidebarListItemText">Events</span>
//             </li>
//             <li className="sidebarListItem">
// <SchoolIcon className="sidebarIcon" />
// <span className="sidebarListItemText">Courses</span>
//             </li>
//             </ul> 
//             <button className="sidebarButton">Show More</button>
//             <hr className="sidebarHr"/>
//             <ul className="sidebarFriendList">
//                 <li className="sidebarFriend">
//                     <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
//                     <span className="sidebarFriendName">Jane Doe</span>
//                 </li>
//             </ul>
//         </div>

//         </div>
//     )
// }
import React from "react";
import "./Sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import { Users } from "../../dummyData"; // Import your dummy data

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarksIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlineIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {/* Dynamically render friends from the Users array */}
                    {Users.map(user => (
                        <li key={user.id} className="sidebarFriend">
                            <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
                            <span className="sidebarFriendName">{user.username}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
