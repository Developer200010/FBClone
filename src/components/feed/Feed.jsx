import React from 'react'
import './Feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from '../../DummyData'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post post={p}/>
        ))}
       
      
      </div>
    </div>
  )
}

export default Feed