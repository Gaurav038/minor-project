import React from 'react'
import img1 from "../../Images/Auli ski jum2 (2).jpg"
import img2 from "../../Images/Auli2.jpg"
import img3 from "../../Images/Skiing Auli.jpg"
import Comman from './Comman'

const Anil = () => {
  return (
    <div>
       <Comman
         img1={img1}
         img2={img2}
         img3={img3}
         heading="Auli"
        
         para="The small yet picture-perfect town of Auli is India's premier ski resort destination. Originally developed as a paramilitary base, Auli's skiing slopes are popular among tourists and professionals alike. In winter, Auli hosts several snow adventure events. You can also take skiing lessons here
         For skiing enthusiasts, January to March is the best time to visit. For nature lovers, October to March is the most appropriate time.
         "
         
       />

    </div>
  )
}

export default Anil
