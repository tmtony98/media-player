import React from 'react'
import { Button,Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  //js
const  navigateByUrl = useNavigate()

const navigate=()=>{
  navigateByUrl('/home')

}
  return (
    <> 
    {/*------Hero section------*/}
  <div className='landing container-fluid w-100 d-flex '>
    <div className="row d-flex justify-content-center">
    <div className="col-lg-7 col-md-6">
    <div style={{height:"400px",marginLeft:"80px"}} className='left d-flex flex-column text-center justify-content-evenly p-5'>
      <h1 style={{fontSize:'50px'}}>Welcome to <span className='text-primary fw-bold'>Veedio.in</span> </h1>
      <p> product spectrum ranges from medical compression garments for veins, soft supports and braces to orthopaedic shoe insoles. As a manufacturer of medical devices, nterest of patients' wellbei </p>
      <div className='d-flex justify-content-center'>  
        <Button  onClick={navigate} style={{width:'120px',height:'40px'}}>Explore Content</Button>
 </div>
    </div>
    </div>
<div className="col-lg-5 col-md-12">
        {/*landing image*/}
        <div className='right d-flex justify-content-center align-items-center  w-100 p-5'>
<img style={{paddingLeft:'50px',paddingTop:"20px"}} className='ms-5 mt-5' src='data:image/png;base64,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'></img>   </div>

</div>
    
    </div>
    
  </div>

  {/*----feature-section-----*/}

  <div className='2nd-section  container-fluid mb-3 text-center'>
    <h1 className='text-primary fw-bold' >Features</h1>
    <div className='cards-section ms-3 row align-items-center justify-content-center p-5  w-100 '>
   
 
      {/*----ist card-----*/}
      <div className='col-md-4   col-sm-12 pb-2 pt-2'>
      <div className=''>
      <Card style={{height:'25rem',width: '25rem', backgroundColor:"black" }}>
        <h1 className='pt-5' style={{fontSize:'55px',color:'blue'}}><i class="fa-solid fa-xl p-4 m-5 fa-beat fa-rocket" ></i></h1>
      <Card.Body>
        <Card.Title className='text-primary fs-4  fw-bold'>Fast Straming</Card.Title>
        <Card.Text  className='text-primary p-2' >
        advanced media players support streaming, downloading, and
         with other devices for a seamless multimedia experience.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      </div>
       {/*----2nd card-----*/}
       <div className='col-md-4 col-sm-12 pb-2 pt-2'>
      <div className=''>
      <Card style={{height:'25rem',width: '25rem', backgroundColor:"black" }}>
        <h1 className='pt-5' style={{fontSize:'55px',color:'blue'}}><i class="fa-solid fa-xl p-4 m-5 fa-tower-broadcast fa-beat"></i></h1>
      <Card.Body>
        <Card.Title className='text-primary fs-4  fw-bold'>Fast Straming</Card.Title>
        <Card.Text  className='text-primary p-2' >
        advanced media players support streaming, downloading, and
         with other devices for a seamless multimedia experience.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      </div>
        {/*----3rd card-----*/}
        <div className='col-md-4   col-sm-12 pb-2 pt-2'>
      <div className=''>
      <Card style={{height:'25rem',width: '25rem', backgroundColor:"black" }}>
        <h1 className='pt-5' style={{fontSize:'55px',color:'blue'}}><i class="fa-solid fa-xl p-4 m-5 fa-gauge fa-beat"></i></h1>
      <Card.Body>
        <Card.Title className='text-primary fs-4  fw-bold'>Fast Straming</Card.Title>
        <Card.Text  className='text-primary p-2' >
        advanced media players support streaming, downloading, and
         with other devices for a seamless multimedia experience.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      </div>
      
 
    </div>
  </div>

  {/*------3rd-section - youtube ------*/}
<div  className='container-fluid p-5 '>
  <div  className='box  d-flex justify-content-center align-items-center'>
    <div className='row h-100 p-5' style={{border:'solid',borderBlockColor:"#add8e6"
    ,height:'350px',width:'80%',borderRadius:"30px"}} >
      <div className='col-lg-6 mx-3 mb-4 col-md-12 '>
    <div className='d-flex flex-column align-items-center justify-content-center'>
    <h1 className='text-info p-2  fw-bold'>Simple, Fast & Powerfull</h1>
      <ul className=' ' >
        <li>Play Everything</li>
        <p>Reference site about Lorem Ipsum, giving information on its </p>
        <li>Categorize Videos</li>
        <p>Reference site about Lorem Ipsum, giving </p>
        <li>Track History</li>
        <p>Reference site about Lorem Ipsum, giving </p>
      </ul>
    </div>
      </div>
      <div className='col-lg-5 ms-2 col-md-12 d-flex flex-column align-items-center justify-content-center '>
      <iframe width="450" height="250" src="https://www.youtube.com/embed/Po3jStA673E?si=EWdW_jr61ymPysfW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  </div>
</div>
      </div></div></>
  )
}

export default Landingpage