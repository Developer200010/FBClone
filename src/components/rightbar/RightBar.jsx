import React from 'react'
import './RightBar.css'
import {User} from '../../DummyData.js'
import UserName from '../../onlineFriend/UserName.jsx'


const HomeRightBar= () =>{
  return(
    <>
     <div className="birthdayContainer">
          <img src="" className='bod' alt="" />
          <span className="bodText">
            Pola Foster and 3 other have a birthday today
          </span>
        </div>
        <img src="https://cdn.pixabay.com/photo/2023/04/09/11/05/mountains-7911302_640.jpg" className='adImg' alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
        {User.map((u)=>(
          <UserName key={u.id} user={u}/>
        ))}
        </ul>
    </>
  )
}

const ProfileRightBar = () =>{
  return(
    <>
    <h4 className='rightbarTitle'>User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">RelationShip:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
    </div>
   <h4 className='rightbarTitle'>User Friends</h4>
   <div className="rightbarFollowings">
    <div className="rightbarFollowing">
      <img src="https://cdn.pixabay.com/photo/2023/04/09/11/05/mountains-7911302_640.jpg" className='followingImg' alt="" />
      <span className='followingName'>jhon carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src="https://cdn.pixabay.com/photo/2023/04/09/11/05/mountains-7911302_640.jpg" className='followingImg' alt="" />
      <span className='followingName'>jhon carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src="https://cdn.pixabay.com/photo/2023/04/09/11/05/mountains-7911302_640.jpg" className='followingImg' alt="" />
      <span className='followingName'>jhon carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src="https://cdn.pixabay.com/photo/2023/04/09/11/05/mountains-7911302_640.jpg" className='followingImg' alt="" />
      <span className='followingName'>jhon carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src="https://cdn.pixabay.com/photo/2023/04/09/11/05/mountains-7911302_640.jpg" className='followingImg' alt="" />
      <span className='followingName'>jhon carter</span>
    </div>
   </div>
    </>
  )
}

const RightBar = ({profile}) => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile?<ProfileRightBar/>:<HomeRightBar/>}
      </div>
    </div>
  )
}

export default RightBar