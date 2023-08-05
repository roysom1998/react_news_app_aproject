import React from 'react'
import sademojy from './sademojy.gif'
function PageNotFound() {
  return (
    <div className='text-center' style={{marginTop:'100px'}}>
      <h1>Page Not Found</h1>
      <img className='my-2' src={sademojy} alt='sademojy'></img>
    </div>
  )
}

export default PageNotFound
