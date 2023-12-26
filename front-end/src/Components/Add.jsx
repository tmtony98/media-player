import React from 'react'
import { useState } from 'react'
import { Modal,Button, Form } from 'react-bootstrap'
import { uploadVideo } from '../servicess/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add() {
//js
const [video,setVideo]=useState({
  id:"",
  caption:"",
  url:"",
  embedLink:''

})
const [show, setShow] = useState(false);
const extractLink =(e)=>{
  let {value}=e.target
  if(value){
    let embbed= `https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:embbed})
  }else{
    setVideo({...video,embedLink:""})


  }
}
console.log(video);

  const handleClose = () => setShow(false);
const handleShow = () => setShow(true); 

//js fn
 const handleUpload = async()=>{
  const {id, caption, url, embedLink} = video
  console.log(video);
  if(!id || !caption || !url || !embedLink){
    toast.warning("Please enter all the details")
  }else{
    //make api call
   const response = await uploadVideo(video)
   if(response.status>=200 && response.status<300){
  //  console.log(response);
    //Modal hide
    handleClose()
    toast.success(`'${response.data.caption}' is uploaded succcessfulltx`)

   }else{
    toast.error('please provide unique id for caption')
   }
 
  }
 } 
  return (
<> 

<div className='d-flex align-items-center>'>
  <h3>Add New Video </h3>
  <button onClick={handleShow}  className='btn ms-1'><i class="fa-solid  fa-cloud-arrow-up fa-beat fa-2xl"></i>
</button>
</div>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Please Fill the following Details</p>
          <Form>
          <Form.Group className="mb-3">
        <Form.Control onChange={(e)=>setVideo({...video,id:e.target.value})} type="text" placeholder="Enter Video ID" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEm">
        <Form.Control type="text" onChange={(e)=>setVideo({...video,caption:e.target.value})} placeholder="Video Caption" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Control type="text" onChange={(e)=>setVideo({...video,url:e.target.value})} placeholder="Video Image URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="forml">
        <Form.Control type="text" onChange={extractLink} placeholder="Enter youtube video link" />
      </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
{/* Same as */}
<ToastContainer />
</> 
 )
}

export default Add