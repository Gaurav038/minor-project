import React from 'react'
import logo from "../../Images/logo12.png"
import {Link } from 'react-router-dom'
// import Home from "./Home"
// import Picktrip from "./Picktrip";
// import Target from "./Target"
// import Cart from "./Cart";
// import Ukbeauti from "./Ukbeauti"
// import Video from "./Video"
// import chardham from './Chardham';


const Navbar = () => {
  
  return (
    <div>
      <>
        {/* <header className='header'>
         </header> */}

         <nav className='navbar navbar-expand-md'>
              <div className="container">
               <Link to="/"className='navbar-brand '><img src={ logo} id="logo"/></Link>
               <button className='hamburger navbar-toggler bg-dark' data-bs-toggle="collapse"data-bs-target="#nav">
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>

               </button>
                 <div className= "collapse navbar-collapse text-center justify-content-end"id="nav">
                <ul className= "navbar-nav text-dark">
                <li className='nav-item'><Link to="/"className='nav-link text-dark me-3'id="menu-item">HOME</Link></li>
                    
                <li class="nav-item dropdown text-dark">
          <Link class="nav-link dropdown-toggle text-dark me-3" to="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          SPIRITUAL
          </Link>
          <ul class="dropdown-menu ">
            <li><Link class="dropdown-item" to="/Chardham"id="menu-item">Char Dham</Link></li>
            <li><Link class="dropdown-item " to="/panchkedar"id="menu-item">Panch Kedar</Link></li>
            <li><Link class="dropdown-item" to="/panchprayag"id="menu-item">Panch Prayag</Link></li>
            {/* <li><Link class="dropdown-item" to="#"id="menu-item">Panch Badri</Link></li>
            <li><Link class="dropdown-item" to="#"id="menu-item">Hemkund Sahib</Link></li>
            <li><Link class="dropdown-item" to="#"id="menu-item">Piran Kaliyar Sharif</Link></li>
            <li><Link class="dropdown-item" to="#"id="menu-item">Haridwar</Link></li>
             */}
            
          </ul>
                    
               </li> 

               <li class="nav-item dropdown text-light">
          <Link class="nav-link dropdown-toggle text-dark me-3" to="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          ADVENTURE
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/anil"id="menu-item">Auli</Link></li>
            <li><Link class="dropdown-item" to="/rishikesh"id="menu-item">Rishikesh</Link></li>
            <li><Link class="dropdown-item" to="/newtehri"id="menu-item">New Tehri</Link></li>
            {/* <li><Link class="dropdown-item" to="#"id="menu-item">Nainital</Link></li>
            <li><Link class="dropdown-item" to="#"id="menu-item">Sattal</Link></li>
            <li><Link class="dropdown-item" to="#"id="menu-item">Chopta</Link></li>
            <li><Link class="dropdown-item" to="#"id="menu-item">Mussoorie</Link></li>
             */}

          </ul>
                    
               </li> 

               <li class="nav-item dropdown text-light">
          <Link class="nav-link dropdown-toggle text-dark me-3" to="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          NATURE
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/valleryoffolwer"id="menu-item">Valley of Flowers</Link></li>
            <li><Link class="dropdown-item" to="/chaukori"id="menu-item">Chaukori</Link></li>
            <li><Link class="dropdown-item" to="/kausani"id="menu-item">Kausani</Link></li>
            {/* <li><Link class="dropdown-item" to="#"id="menu-item">Nanital</Link></li>
            <li><Link class="dropdown-item" to="#"id="menu-item">Mukeshwar</Link></li>
            <li><Link class="dropdown-item" to="#"id="menu-item">Ranikhet</Link></li>
         */}
          </ul>
                    
               </li> 

               <li class="nav-item dropdown ">
          <Link class="nav-link dropdown-toggle text-dark me-3" to="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          WILDLIFE
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/wildlife">Jim Corbett National Park</Link></li>
            <li><Link class="dropdown-item" to="/nationalPark">Nanda Devi National Park</Link></li>
            <li><Link class="dropdown-item" to="/rajajinational">Rajaji National Park</Link></li>
            {/* <li><Link class="dropdown-item" to="#">Gangotri National Park</Link></li>
            <li><Link class="dropdown-item" to="#">Binsar Wildlife Sanctuary</Link></li>
            */}
          </ul>
                    
               </li> 

                </ul>
               </div>
            
              
              </div>
               </nav>
        

      </>
      
    </div>
   
   
 )
}

export default Navbar
