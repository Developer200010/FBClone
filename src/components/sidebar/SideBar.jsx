import React from "react";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i class="fa-solid fa-rss sidebarFeedIcon"></i>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-message sidebarFeedIcon"></i>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-brands fa-youtube sidebarFeedIcon"></i>
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-user-group sidebarFeedIcon"></i>
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-regular fa-bookmark sidebarFeedIcon"></i>
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-circle-question sidebarFeedIcon"></i>
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem ">
            <i class="fa-solid fa-box sidebarFeedIcon"></i>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem ">
            <i class="fa-regular fa-calendar sidebarFeedIcon"></i>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <i class="fa-solid fa-graduation-cap sidebarFeedIcon"></i>
            <span className="sidebarListItemText">Course</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarLine"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_640.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jhon</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
