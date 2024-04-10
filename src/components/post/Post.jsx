import React from 'react'
import './Post.css'
export default function({post}) {
    console.log(post)
  return (
    <>
    <div className="post">
        <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="https://cdn.pixabay.com/photo/2023/12/20/07/04/clouds-8459053_640.jpg" alt="" className='postProfileImg' />
                <span className='postUserName'>jhon</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
            <i class="fa-solid fa-ellipsis-vertical postTopIcon"></i>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">It's my first img</span>
            <img src="https://cdn.pixabay.com/photo/2021/01/22/18/09/windy-5940755_640.png" className='postCenterImg' alt="" />
        </div>
        <div className="postLeft">
            <div className="postButton">
                <div className="postButtonLeft">
                <i class="fa-regular fa-heart  likeIcon"></i>
                <i class="fa-regular fa-thumbs-up likeIcon"></i>
                <span className='postLikeText'>32 people liked it</span>
                </div>
                <div className="postButtonRight">
                    <span className="postCommentText">9 comment</span>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
