import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
      <MDBFooter style={{backgroundColor:'#116a9e'}} className='text-center text-lg-left'>
      <div className='text-center p-3 text-light'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        bbemiloan.com
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer