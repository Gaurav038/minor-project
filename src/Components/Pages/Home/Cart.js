import React from 'react'
import  img1 from "../../Images/bike triking.jpg"
import  img2 from "../../Images/natures-bounty.jpg"
import  img3 from "../../Images/elephant.jpg"
import  img4 from "../../Images/food.jpg"
import  img5 from "../../Images/culture.jpg"
import  img6 from "../../Images/past-temple.jpg"
import  img7 from "../../Images/yoga.jpg"
import img8  from "../../Images/gods.jpg"


const Cart = () => {
  return (
    <div className=''id="cartbg">
      <>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-12 pt-5 pb-5 text-center">
                      <h1 className='display-4 fw-bold'>VISIT UTTARAKHAND</h1>
                  </div>
              </div>
              <div className="row pb-5 justify-content-center">
                  <div className="col-lg-2 col-sm-6 pt-3 ms-2 me-2 img-thumbnail">
                      <div className="card">
                       <div className="card-img-top">
                          <a href=""> <img src={img1}id="card"/></a>
                       </div>
                       <div className="card-body">
                           <div className="card-title">
                               <h4>Bicycle</h4>
                           </div>
                       </div>
                      </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 pt-3 ms-2 me-2 img-thumbnail">
                      <div className="card">
                       <div className="card-img-top">
                          <a href=""> <img src={img2}id="card"/></a>
                       </div>
                       <div className="card-body">
                           <div className="card-title">
                               <h4>Nature</h4>
                           </div>
                       </div>
                      </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 pt-3 ms-2 me-2 img-thumbnail">
                      <div className="card">
                       <div className="card-img-top">
                          <a href=""> <img src={img3}id="card"/></a>
                       </div>
                       <div className="card-body">
                           <div className="card-title">
                               <h4>Wildlife</h4>
                           </div>
                       </div>
                      </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 pt-3 ms-2 me-2 img-thumbnail">
                      <div className="card">
                       <div className="card-img-top">
                          <a href=""> <img src={img4}id="card"/></a>
                       </div>
                       <div className="card-body">
                           <div className="card-title">
                               <h4>Food</h4>
                           </div>
                       </div>
                      </div>
                  </div>

              </div>


              <div className="row pb-5 justify-content-center">
                  <div className="col-lg-2 col-sm-6 pt-3 ms-2 me-2 img-thumbnail">
                      <div className="card">
                       <div className="card-img-top">
                          <a href=""> <img src={img5}id="card"/></a>
                       </div>
                       <div className="card-body">
                           <div className="card-title">
                               <h4>Culture</h4>
                           </div>
                       </div>
                      </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 pt-3 ms-2 me-2 img-thumbnail">
                      <div className="card">
                       <div className="card-img-top">
                          <a href=""> <img src={img6}id="card"/></a>
                       </div>
                       <div className="card-body">
                           <div className="card-title">
                               <h4>Temple</h4>
                           </div>
                       </div>
                      </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 pt-3 ms-2 me-2 img-thumbnail">
                      <div className="card">
                       <div className="card-img-top">
                          <a href=""> <img src={img7}id="card"/></a>
                       </div>
                       <div className="card-body">
                           <div className="card-title">
                               <h4>Yoga</h4>
                           </div>
                       </div>
                      </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 pt-3 ms-2 me-2 img-thumbnail">
                      <div className="card">
                       <div className="card-img-top">
                          <a href=""> <img src={img8}id="card"/></a>
                       </div>
                       <div className="card-body">
                           <div className="card-title">
                               <h4>Temple bell</h4>
                           </div>
                       </div>
                      </div>
                  </div>

              </div>






          </div>
      </>
    </div>
  )
}

export default Cart
    