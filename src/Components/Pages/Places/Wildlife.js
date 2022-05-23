import React from 'react'
import img1 from "../../Images/Animal1.jpg";
import img2 from "../../Images/animal2.jpg"
import img3 from "../../Images/brids.jpg"
import img4 from "../../Images/tiger.jpg"


const Valleyofflower = () => {
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
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
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
         <div className="row pt-5 pb-5">
             <div className="col-lg-12">
                 <h1>Corbett National Park</h1>
             </div>
         </div>  
         <div className="row">
             <div className="col-lg-6 pt-5 pb-5">
                 <img src={img4} id="vallery"/>
             </div>
         </div>
         <div className="row">
             <div className="col-lg-12">
                 <h4>What to know</h4>
                 <p className='text-muted'>Established in 1936, this is India's first national park. It is named after the legendary naturalist and conservationist Jim Corbett.  Located at the Himalayas' foothills, near the popular hill-station of Nainital, the beautiful Jim Corbett National Park, is famous for being home to a large number of tigers, the highest among any Indian national park. Spread over 1318.54 sq km, of which 520 sq km is the main area, and the remaining is buffer; the park is spread over the picturesque landscapes of Pauri Garhwal, Almora, and Nainital. The jeep safari into the dense forest to see the wild animals in their natural habitat is a must-have experience. And if you are lucky, then you may get a chance to even spot a tiger. While on the jeep safari, enjoy the lush green forest's views cut across by streams and rivers and a few waterfalls. There are accommodations available inside the park for night-stay as well, which offer you once-in-a-lifetime experience.</p>
             </div>
         </div>
         </div>
      </>
    </div>
  )
}

export default Valleyofflower
