import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import { getAllVideos } from '../servicess/allAPI';


function View() {
  //js
  const[allvideos,setAllvideos]=useState([])
  const getAlluploadedVideos = async()=>{
    const {data}= await getAllVideos ()
    setAllvideos(data)
  }
useEffect(()=>{
  getAlluploadedVideos()
},[])
console.log(allvideos);
  return (
  <>
  <Row>
  {
    allvideos.length>0?allvideos.map(video=>(<Col sm={12} md={6} lg={4} xl={3}><VideoCard displayData={video}/>
    </Col>)):'nothing to display'
  }
  </Row>
  </>

  )}


export default View