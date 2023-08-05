import React from 'react'
import spinner from './spinner.gif'
const LoadingSpinner =()=> {
    return (
    //   <><div className="d-flex justify-content-center">
    //   <div className="d-flex justify-content-center spinner-border " role="status">
    //     {/* <span className="sr-only">Loading...</span> */}
    //   </div>
    // </div></>  
    <div className='text-center'>
      <img className='my-2' src={spinner} alt='spinner'></img>
    </div> 
    )
}
export default LoadingSpinner
