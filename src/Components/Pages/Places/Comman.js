import React from 'react'

const Comman = (props) => {
  return (
    <>
               
               <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={props.img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={props.img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={props.img3} class="d-block w-100" alt="..."/>
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
          <div className="row text-center">
             <div className="col-lg-12 pt-5 pb-5">
               <h1 className='display-4'>{props.heading}</h1>
               
               <p className='text-muted'>{props.para}</p>
             </div>
             <div className="col-lg-5">
             <h1>{props.subheading}</h1>
             <img src={props.subimg}/>
             </div>
           </div>
          </div>
            
    </>
  )
}

export default Comman