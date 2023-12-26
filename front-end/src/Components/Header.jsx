import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <Navbar className='bg-info' style={{backgroundColor:"whitesmoke",width:'100%'}}>
    <Container>
      <Navbar.Brand  className='fw-bold   fs-3'>
       <Link to={'/'}  style={{textDecoration:'none', color:'white'}}>   <i class="fa-brands fa-react mx-3 fa-fade"></i>      
       Media Player
       </Link> 
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header