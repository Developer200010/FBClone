import React from 'react'
import './RightBar.css'
import {User} from '../../DummyData.js'
import UserName from '../../onlineFriend/UserName.jsx'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
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
      </div>
    </div>
  )
}

export default RightBar