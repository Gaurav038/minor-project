import React from 'react'
import img1 from "../../Images/Mohdzafar.jpeg"
import img2 from "../../Images/Gorav.png"
import img3 from "../../Images/Mohdkaif.jpg"
import img4 from "../../Images/Kavya.jpeg"
import img5 from "../../Images/Swapnil Johari.jpg"


const Team = () => {
  return (
    <div>
      <>
      
        <div className="container-fluid">
         <div className="row text-center pt-5 pb-5">
         <div className="col-lg-12 ">
         <h1 className='fw-bold'>TEAM MEMBERS</h1>
         </div>
        </div>
         <div className="row pt-5 pb-5 justify-content-center text-center">
         <div className="col-lg-2 ms-3 me-3 pt-3 pb-3 col-8">
                 <div className=" card">
                     <div className=" text-center pt-2 pb-2">
                         <img src={img1} id="team-img"/>
                     </div>
                     <div className="">
                         <div className="pt-2 pb-3">
                           <h3>Mohd Zafar</h3>
                           <hr></hr>
                   <a href="https://www.linkedin.com/in/mohd-zafar-8197b3216/"><i class="fab fa-linkedin fa-3x me-3"></i></a>
                          <a href="https://github.com/Mohdzafar1"> <i class="fab fa-github-square fa-3x"></i></a><br></br>
                           <a href="https://grand-klepon-57d1cf.netlify.app/">Portfolio</a>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="col-lg-2 ms-3 me-3 pt-3 pb-3 col-8">
                 <div className="card">
                     <div className="text-center pt-2 pb-2">
                         <img src={img2} id="team-img"/>
                     </div>
                     <div className="">
                         <div className="pt-2 pb-3">
                           <h3>Garav Singh</h3>
                           <hr></hr>
                   <a href="https://www.linkedin.com/in/gaurav-singh-b2277a1a5/"><i class="fab fa-linkedin fa-3x me-3"></i></a>
                          <a href="https://github.com/Gaurav038"> <i class="fab fa-github-square fa-3x"></i></a><br></br>
                          
                         </div>
                     </div>
                 </div>
             </div>
             <div className="col-lg-2 ms-3 me-3 pt-3 pb-3 col-8">
                 <div className="card">
                     <div className="text-center pt-2 pb-2">
                         <img src={img3} id="team-img"/>
                     </div>
                     <div className="">
                         <div className="pt-2 pb-3">
                           <h3>Mohd Kaif </h3>
                           <hr></hr>
                   <a href="https://www.linkedin.com/in/mohd-kaif-a62953182"><i class="fab fa-linkedin fa-3x me-3"></i></a>
                          <a href="https://github.com/IamKAIF"> <i class="fab fa-github-square fa-3x"></i></a><br></br>
                           
                         </div>
                     </div>
                 </div>
             </div>
             <div className="col-lg-2 ms-3 me-3 pt-3 pb-3 col-8">
                 <div className="card">
                     <div className="text-center pt-2 pb-2">
                         <img src={img4} id="team-img"/>
                     </div>
                     <div className="">
                         <div className="pt-2 pb-3">
                           <h3>Kavya Shree</h3>
                           <hr></hr>
                          <a href="https://www.linkedin.com/in/kavya-shree-899820216"><i class="fab fa-linkedin fa-3x me-3"></i></a>
                          
                           
                         </div>
                     </div>
                 </div>
             </div>
             <div className="col-lg-2 col-8 ms-3 me-3 pt-3 pb-3">
                 <div className="card">
                     <div className="text-center pt-2 pb-2">
                         <img src={img5} id="team-img"/>
                     </div>
                     <div className="">
                         <div className="pt-2 pb-3">
                           <h3>Swapnil Johari</h3>
                           <hr></hr>
                   <a href="https://www.linkedin.com/in/swapnil-johari-5b5949104/"><i class="fab fa-linkedin fa-3x me-3"></i></a>
                        
                         
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

export default Team
