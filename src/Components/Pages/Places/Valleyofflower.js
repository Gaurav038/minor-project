import React from 'react'
import img1 from "../../Images/Banner.jpg";
import img2 from "../../Images/Banner1.jpg"
import img3 from "../../Images/Banner3.jpg"
import img4 from "../../Images/Valleybanner.jpg"
import { useLocation } from "react-router-dom"



const Valleyofflower = () => {
  const location = useLocation()
  console.log(location.state)
  const {data} = location.state

  return (
    <div>
      <>

                  
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={data[0].extra1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={data[0].extra2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={data[0].extra3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
         <div className="container">
         <div className="row pt-5 pb-5 display-4" style={{textAlign: 'center'}}>
             <div className="col-lg-12">
                 <h1>{data[0].title}</h1>
             </div>
         </div>  
         <div className="row">
             <div className="col-lg-6 pt-5 pb-5">
                 <img src={data[0].img} id="vallery"/>
             </div>
             <div className="col-lg-6 mt-5">
                 <h4>What to know</h4>
                 <p className='text-muted'>{data[0].info}</p>
             </div>
         </div>
       
         </div>
      </>
    </div>
  )
}

export default Valleyofflower