import React from 'react'
import Comman from './Comman'
import img1 from "../../Images/chaukori-img-1.jpg"
import img2 from "../../Images/chaukori-img-2.jpg"
import img3 from "../../Images/chaukori-img-3.jpg"

const Chaukori = () => {
  return (
    <>
        <Comman
            img1={img1}
            img2={img2}
            img3={img3}
            heading="Chaukori"
            para="Surrounded towering Himalayan peaks and lush forests, Chaukori is an idyllic tourist destination. It is replete with snow-capped mountains, verdant valleys, deodar and rhododendrons, and picturesque views as far as the eye can go. The stunning Panchachuli peaks are visible from this paradisiacal location. Located at a height of around 2,010 m, and about 173 km away from Nainital, Chaukori hosts large stretches of emerald tea gardens, which make for excellent nature walks. Don't forget to explore the fruit orchards here. Also, don't miss the fabulous sunrises and sunsets that you are treated to."
        />
    </>
  )
}

export default Chaukori