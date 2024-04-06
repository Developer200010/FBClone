import React from 'react'
import './Topbar.css'
const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>CVSocial</span>
        </div>
        <div className="topbarCenter">
            <div className="search">
            <i class="fa-solid fa-magnifying-glass searchIcon"></i>
            <input type="text" className='searchInput' placeholder='search for friend, post and video' />
            </div>
        </div>
        <div className="topbarRight">
            <span className='topbarLink'>HomePage</span>
            <span className='topbarLink'>TimeLine</span>
            <div className="topbarIcon">
            <i class="fa-solid fa-user"></i>
            <span className='topbarCount'>1</span>
            </div>
            <div className="topbarIcon">
            <i class="fa-solid fa-user"></i>
            <span className='topbarCount'>1</span>
            </div>
            <div className="topbarIcon">
            <i class="fa-solid fa-user"></i>
            <span className='topbarCount'>1</span>
            </div>
            <div className='topbarImg'>
            <img  src="https://cdn.pixabay.com/photo/2015/08/30/11/17/shore-914149_640.jpg" alt="" className='topbarImg' />
            </div>
        </div>
    </div>
  )
}

export default Topbar