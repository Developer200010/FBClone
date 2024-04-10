import React, { useState } from "react";
import "./Post.css";
import {User} from '../../DummyData.js'
export default function ({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () =>{
    setLike(isLiked? like-1:like+1);
    setIsLiked(!isLiked);
  }
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src={User.filter((u)=>u.id === post?.userId)[0].profilePicture}
                alt=""
                className="postProfileImg"
              />
              <span className="postUserName">{User.filter((u)=>u.id === post?.userId)[0].username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <i class="fa-solid fa-ellipsis-vertical postTopIcon"></i>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img
              src={post.photo}
              className="postCenterImg"
              alt=""
            />
          </div>
          <div className="postLeft">
            <div className="postButton">
              <div className="postButtonLeft">
                <i class="fa-regular fa-heart  likeIcon" onClick={likeHandler}></i>
                <i class="fa-regular fa-thumbs-up likeIcon" onClick={likeHandler}></i>
                <span className="postLikeText">{like} people liked it</span>
              </div>
              <div className="postButtonRight">
                <span className="postCommentText">{post.Comment} comment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
