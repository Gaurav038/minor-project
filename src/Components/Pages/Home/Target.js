import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cart1 from "../../Images/Rental.png"
import cart2 from "../../Images/sport.png"
import cart3 from "../../Images/Travel.png"


const Target = () => {
  return (
    <div>
      <>
          <div className="container pt-5">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h1 className='display-3 fw-bold'>LETS GO ADVENTURES</h1>
                  </div>
              </div>
              <div className="row pt- pb-5">
                  <div className="col-lg-4 pt-3">
                      <div className="card"id="cart">
                          <img src={cart3}/>
                      </div>
                  </div>

                  <div className="col-lg-4 pt-3">
                      <div className="card"id="cart">
                          <img src={cart2}/>
                      </div>
                      <div className="card-body">
                           <div className="card-title">
                           <NavLink to="/waterrace" className="btn btn-outline-primary"id="rental-btn">Play NOW</NavLink>
                           </div>
                       </div>
                  </div>

                  <div className="col-lg-4 pt-3">
                      <div className="card"id="cart">
                       <img src={cart1}/>
                       </div>
                       <div className="card-body">
                           <div className="card-title">
                           <NavLink to="/rental" className="btn btn-outline-primary"id="rental-btn">GO NOW</NavLink>
                           </div>
                       </div>
                  </div>
              </div>
          </div>
      </>
    </div>
  )
}

export default Target
