import React from 'react'
import video from "../../Images/addvideo.mp4"

const Video = () => {
    //   const videoSrc=Car;
    //   const poster=""
     
  return (
    <div>
        <>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className='display-4 fw-bold'>RECOMMENDED VIDEO</h1>
                    </div>
                </div>
                <div className="row justify-content-center pt-5 pb-5">
                    <div className="col-lg-8">
                      
                    <video width="400" controls id="video">
                    <source src={video} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default Video