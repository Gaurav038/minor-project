import React from 'react'
import img1 from "../../Images/img3.jpg";
import img2 from "../../Images/tigerbanner.jpg"
import img3 from "../../Images/swapnil.jpg"
import Picktrip from "../Home/Picktrip";
import Target from "../Home/Target"
import Cart from "../Home/Cart";
import Ukbeauti from "../Home/Ukbeauti"
import Video from "../Home/Video"



const Home = () => {
  return (
    <div>
       <>
       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100" alt="..."id="img3"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='text-light'>Bansar WildLife Sanctuary</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="..."id="img3"/>
      <div class="carousel-caption d-none d-md-block">
        <h5> Rishikesh,World Capital of Yoga</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..." id="img3"/>
      <div class="carousel-caption d-none d-md-block">
        <h5> Beauty of Nature</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


 
       </>
    
      <Picktrip/>
      <Target/>
      <Cart/>
      <Ukbeauti/>
      <Video/>
    </div>
  )
}

export default Home
