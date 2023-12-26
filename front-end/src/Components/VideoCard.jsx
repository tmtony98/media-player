import React, { useState } from 'react'
import { Card ,Modal } from 'react-bootstrap'

function VideoCard() {
  //
  const [show,setShow]=useState()

  const handleClose=()=>setShow(false)
  const handleShow=()=>setShow(true)
  return (
    <>
     <Card style={{ width: '18rem',marginTop:'25px' }}>
      <Card.Img onClick={handleShow} variant="top" className='p-3' src="https://imgs.search.brave.com/_regFAa4l9DxlqOraegbTkkM_wM0gSzc5MY7muD2etU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MzBmNWNlZjEw/MTRjMGI1ZTRhYTEu/cG5n" />
      <Card.Body className='d-flex justify-content-around align-items-center'>
        <Card.Title>Card Title</Card.Title>
        <div className='btn '><i className="fa-solid  text-danger fs-3 fa-trash"></i></div>    
          </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="350px" src="https://www.youtube.com/embed/FxgM9k1rg0Q?si=HaUkrped3swioZ3B?autoplay=1" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Modal.Body>
     
      </Modal>


    </>
  )
}

export default VideoCard