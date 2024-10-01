import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';
import LabelIcon from '@mui/icons-material/Label';

export default function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img className="shareProfileImg" src="/assets/person/N.M.jpg" alt="" />
                <input placeholder='Whats in your mind?'
                 className='shareInput'/>
            </div>
            <hr className='shareHr' />
                <div className='shareBottom'></div>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                        <span className='shareoptionText'>photo or Video</span>
                    </div>
                    <div className='shareOption'>
                        <LabelIcon htmlColor='blue' className='shareIcon'/>
                        <span className='shareoptionText'>Tag</span>
                    </div>
                    <div className='shareOption'>
                        <RoomIcon  htmlColor='green' className='shareIcon'/>
                        <span className='shareoptionText'>Location</span>
                    </div>
                    <div className='shareOption'>
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareoptionText'>Feelings</span>
                    </div>
                    <button className='shareButton'>share</button>
                </div>
              
                </div>
    </div>
  )
}
