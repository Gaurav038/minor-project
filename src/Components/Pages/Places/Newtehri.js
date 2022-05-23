import React from 'react'
import Comman from './Comman'
import img1 from "../../Images/tehri-img-1.jpg";
import img2 from "../../Images/tehri-img-2.jpg";
import img3 from "../../Images/tehri-img-3.jpg";

const Newtehri = () => {
  return (
    <>
      <Comman
          img1={img1}
          img2={img2}
          img3={img3}
          heading="New Tehri"
          para="A modern town and the headquarter of the Tehri-Garhwal district, New Tehri is an adventure tourism hub. Overlooking the massive Tehri Lake and dam, the well-planned town draws tourists, who come here for its natural beauty and the opportunity to enjoy innumerable water sports in the lake. The dam is the highest of its kind in India and is regarded among the world's largest hydroelectric projects. It  stands on the Bhagirathi river.

Tehri (also referred to as Old Tehri now) was a small town situated at the confluence of Bhagirathi and Bhilangna rivers in Uttarakhand. It was the capital of the erstwhile kingdom of Garhwal. This town got submerged under the lake formed during the construction of the Tehri dam. The residents were relocated to New Tehri."
      />

    </>
  )
}

export default Newtehri
