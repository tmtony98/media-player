import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from "../Components/View"
import Category from '../Components/Category'

function Home() {
  return (
    <>
    <div className='d-flex mt-5 mb-5 justify-content-between p-5 align-items-center'>
      <Add/>
      <Link to={'/WatchHistory'} className='fs-3' style={{textDecoration:'none',color:'F9FC04'}}>Watch History</Link>
    </div>

<div className='mb-5 mt-5 allVideos d-flex p-5 justify-content-between  align-items-center'>
  <div className='all-videos'>
    <h3>All Videos</h3>
    <View/>
  </div>
  <Category/>
</div>

    </>
  )
}

export default Home