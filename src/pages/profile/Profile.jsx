import React from 'react'
import './Profile.css'
import Topbar from '../../components/topbar/Topbar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <SideBar/>
    <div className="profileRight">
    <div className="profileRightTop">
        <img className='profileCoverImg' src="https://cdn.pixabay.com/photo/2023/11/20/18/21/sunset-8401670_640.jpg" alt="" />
        <img className='profileUserImg' src="https://cdn.pixabay.com/photo/2023/11/20/18/21/sunset-8401670_640.jpg" alt="" />
    </div>
    <div className='profileInfo'>
        <h4 className='profileInfoName'>chandan</h4>
        <h4 className='profileInfoDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
    </div>
    <div className="profileRightBottom">
    <Feed/>
    <RightBar profile/>
    </div>
    </div>
    </div>
    </>
  )
}
