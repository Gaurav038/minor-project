import React from 'react'
import img from "../../Images/uk.jpg"

const Ukbeauti = () => {
  return (
    <div>
     <>
       <div className="container-fluid">
         
           <div className="row pb-5 pt-5 bg-dark">
               <div className="col-lg-5 pt-3 pb-3 bg-dark text-light">
               <h1 className='display-4 fw-bold'><span className='display-3 text-danger fw-bold'>T</span>HE BEAUTIFUL STATE</h1>
                   <p>Uttarakhand, formerly Uttaranchal, state of India, located in the northwestern part of the country. It is bordered to the northwest by the Indian state of Himachal Pradesh, to the northeast by the Tibet Autonomous Region of China, to the southeast by Nepal, and to the south and southwest by the Indian state of Uttar Pradesh. 
The state is divided into two divisions, Garhwal and Kumaon, with a total of 13 districts. Its capital is the northwestern city of Dehra Dun.
Uttarakhand is known for the natural environment of the Himalayas, the Bhabar and the Terai regions. Archaeological evidence supports the existence of humans in the region since prehistoric times. The region formed a part of the Uttarakuru Kingdom during the Vedic age of Ancient India.</p>
               </div>
               <div className="col-lg-7 pt-3 pb-3">
                   <img src={img}id="uk"/>
               </div>
           </div>
       </div>
    
     </>
    </div>
  )
}

export default Ukbeauti