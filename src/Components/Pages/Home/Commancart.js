import React from 'react'
import Contact from "../Home/Contact"

const Commancart = (props) => {
  return (
    <>
       <section  className=''>
              <div className="contaner-fluid">
                  <div className="row pb-5 w-100 d-block">
                      <div className="col-lg-12">
                        <img src={props.img1}className="d-block w-100"/>
                      </div>
                  </div>
                  <div className="row pt-3 pb-5">
                      <div className="col-lg-4">
                          <h1 className='fw-bold'>{props.heading}</h1>
                          <p>{props.para}</p>
                      </div>
                      <div className="col-lg-8">
                          <div className="container">
                          <div className="row">
                              <div className="col-lg-4 pt-3">
                                  <img src={props.img2} id="bike-img"/>
                              </div>
                              <div className="col-lg-4 pt-3">
                                  <img src={props.img3}id="bike-img"/>
                              </div>
                              <div className="col-lg-4 pt-3">
                                  <img src={props.img4}id="bike-img"/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-lg-4 pt-3">
                                  <img src={props.img5} id="bike-img"/>
                              </div>
                              <div className="col-lg-4 pt-3">
                                  <img src={props.img6}id="bike-img"/>
                              </div>
                              <div className="col-lg-4 pt-3">
                                  <img src={props.img7}id="bike-img"/>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Contact/>
    </>
  )
}

export default Commancart
