import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
    <div className='d-flex mt-5 justify-content-between container align-items-center'>
   <h3>Watch History</h3>
<Link to={"/home"} style={{textDecoration:'none',style:'none',fontSize:'22px'}} ><i class="fa-solid mx-2 fa-arrow-left"></i><span 
className=''>Back to Home</span></Link>



    </div>
    <div  className='container  pt-3'>
      <table className='table mt-5'>
       <thead>
       <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
        </tr>
       </thead>
       <tbody>
        <tr>
          <td>1</td>
          <td>new project</td>
          <td>www.xyz.com</td>
          <td>8-10-2023 @ 8.00pm</td>

        </tr>
       </tbody>

      </table>
    </div>
    </>
  )
}

export default WatchHistory