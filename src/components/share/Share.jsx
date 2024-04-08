import React from 'react'
import './Share.css'
export default function Share() {
  return (
    <>
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="https://cdn.pixabay.com/photo/2015/08/30/11/17/shore-914149_640.jpg" alt="" />
                <input type="text" placeholder="what's in your mind" className='shareInput' name="" id="" />
            </div>
            <hr className='shareHr'/> 
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <i class="fa-thin fa-photo-film shareIcon" htmlColor='tomato'></i>
                    <div className="shareOptionText">Photo or Video</div>
                    </div>
                    <div className="shareOptions">
                    <div className="shareOption">
                    <i class="fa-solid fa-tag shareIcon" htmlColor="green"></i>
                    <div className="shareOptionText" >Tag</div>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                    <i class="fa-regular fa-location-dot shareIcon"></i>
                    <div className="shareOptionText">Location</div>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                    <i class="fa-regular fa-face-smile shareIcon"></i>
                    <div className="shareOptionText">Feelings</div>
                    </div>
                </div>
                </div>
                <button className='shareButton'>share</button>
            </div>
        </div>
    </div>
    </>
  )
}
