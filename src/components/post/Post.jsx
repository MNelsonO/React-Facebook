
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData'; // Importing Users data
import { useState } from 'react';


export default function Post({ post }) {
  const[like,setLike] = useState(post.like)
  const[isliked,setIsLike] = useState(false)

  const likeHandler = () => {
    setLike(isliked ? like-1 : like+1)
    setIsLike(!isliked)
  }
  // Find the user with the matching userId from the post
  const user = Users.find((u) => u.id === post.userId);

  return (
   
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img 
              className="postProfileImg"
              src={user.profilePicture} // Dynamically using user's profile picture
              alt="" 
            />
            <span className='postUsername'>{user.username}</span> {/* Dynamically using user's name */}
            <span className='postDate'>{post.date}</span> {/* Dynamic post date */}
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span> {/* Dynamic post description */}
          <img className="postImg" src={post.photo} alt="" /> {/* Dynamic post image */}
        </div>
        <div className='PostBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="Like Icon" />
            <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="Heart Icon" />
            <span className='postLikeCounter'>{like} people liked this</span> {/* Dynamic likes */}
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span> {/* Dynamic comments */}
          </div>
        </div>
      </div>
    </div>
  );
}
