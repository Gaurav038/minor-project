import React from 'react'
import img1 from "../../Images/bikebanner.webp"
import img2 from "../../Images/b1.jpeg"
import img3 from "../../Images/b2.jpeg"
import img4 from "../../Images/b3.jpeg"
import img5 from "../../Images/b4.jpeg"
import img6 from "../../Images/b5.jpeg"
import img7 from "../../Images/b6.jpeg"
import Contact from './Contact'
import Commancart from './Commancart'

const Rental = () => {
  return (
    <div>
      <>
        
   <Commancart
       img1={img1}
       img2={img2}
       img3={img3}
       img4={img4}
       img5={img5}
       img6={img6}
       img7={img7}
       heading="ow to buy bike for Rental"
       para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad dolore, eum, rerum, culpa eligendi magni laboriosam totam soluta quae error in voluptas fugit harum pariatur sint similique odit asperiores velit! Autem id eveniet corrupti, cum odit nam ipsam pariatur commodi quam, veritatis excepturi adipisci inventore molestiae quaerat eaque! Minus accusamus laudantium aspernatur quidem mollitia, recusandae accusantium explicabo perferendis, culpa, natus placeat repellendus dolorem tempora unde eius facere voluptatem illum"
   />


          {/* <section  className=''>
              <div className="contaner-fluid">
                  <div className="row pb-5 w-100 d-block">
                      <div className="col-lg-12">
                        <img src={img1}className="d-block w-100"/>
                      </div>
                  </div>
                  <div className="row pt-3 pb-5">
                      <div className="col-lg-4">
                          <h1 className='fw-bold'>How to buy bike for Rental</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad dolore, eum, rerum, culpa eligendi magni laboriosam totam soluta quae error in voluptas fugit harum pariatur sint similique odit asperiores velit! Autem id eveniet corrupti, cum odit nam ipsam pariatur commodi quam, veritatis excepturi adipisci inventore molestiae quaerat eaque! Minus accusamus laudantium aspernatur quidem mollitia, recusandae accusantium explicabo perferendis, culpa, natus placeat repellendus dolorem tempora unde eius facere voluptatem illum!</p>
                      </div>
                      <div className="col-lg-8">
                          <div className="container">
                          <div className="row">
                              <div className="col-lg-4 pt-3">
                                  <img src={img2} id="bike-img"/>
                              </div>
                              <div className="col-lg-4 pt-3">
                                  <img src={img3}id="bike-img"/>
                              </div>
                              <div className="col-lg-4 pt-3">
                                  <img src={img4}id="bike-img"/>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-lg-4 pt-3">
                                  <img src={img5} id="bike-img"/>
                              </div>
                              <div className="col-lg-4 pt-3">
                                  <img src={img6}id="bike-img"/>
                              </div>
                              <div className="col-lg-4 pt-3">
                                  <img src={img7}id="bike-img"/>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Contact/> */}
      </>
    </div>
  )
}

export default Rental
