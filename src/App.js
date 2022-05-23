import React from 'react';
import './App.css';
import Navbar from "./Components/Pages/Home/Navbar"
import {Router, Routes, Route} from "react-router-dom"
// import Home from './elements/<Pages/Home/Home';
// import Chardham from './elements/<Pages/Places/Chardham';
// import Anil from './elements/<Pages/Places/Anil';
// import Valleryofflower from "./elements/<Pages/Places/Valleyofflower"
// import Wildlife from "./elements/<Pages/Places/Wildlife"
// import Footer from "./elements/<Pages/Home/Footer"
// import Team from "./elements/<Pages/Home/Team";
// import Rental from './elements/<Pages/Home/Rental';
// import Contact from "./elements/<Pages/Home/Contact"
import Home from './Components/Pages/Home/Home';
import Chardham from './Components/Pages/Places/Chardham';
import Anil from './Components/Pages/Places/Anil';
import Valleryofflower from "./Components/Pages/Places/Valleyofflower"
import Wildlife from "./Components/Pages/Places/Wildlife"
import Footer from "./Components/Pages/Home/Footer"
import Team from "./Components/Pages/Home/Team";
import Rental from './Components/Pages/Home/Rental';
import Contact from "./Components/Pages/Home/Contact"
import Panchkedar from './Components/Pages/Places/Panchkedar';
// import Panch from './Components/Pages/Places/Panch';
import Panchprayag from './Components/Pages/Places/Panchprayag';
import Rishikesh from "./Components/Pages/Places/Rishikesh " 
import NewTehri from "./Components/Pages/Places/Newtehri"
import Chaukori from "./Components/Pages/Places/Chaukori"
import Kausani from "./Components/Pages/Places/Kausani"
import Ndnpark from "./Components/Pages/Places/Ndnpark"
import Rjnational from "./Components/Pages/Places/Rjnational"
import Waterrace from './Components/Pages/Home/Waterrace';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        {/* <Route exact path="/" element={<Home />}/>
        <Route  exact path ="/Chardham" element={<Chardham />}/>
        <Route  exact path ="/anil" element={<Anil />}/>
        <Route exact path ="/valleryoffolwer" element={<Valleryofflower />}/>
        <Route exact path ="/wildlife" element={<Wildlife />}/>
        <Route exact path="/team" element={<Team />}/>
        <Route exact path="/rental" element={<Rental />}/>
        <Route exact path="/contact" element={<Contact />}/> */}
        <Route exact path="/"element={<Home/>}/>
      <Route  exact path ="/Chardham" element={<Chardham/>}/>
      <Route  exact path ="/panchkedar" element={<Panchkedar/>}/>
      <Route  exact path ="/panchprayag" element={<Panchprayag/>}/>
      {/* <Route  exact path ="/panch" element={<Panch}/> */}
      <Route  exact path ="/anil" element={<Anil/>}/>
      <Route exact path="/rishikesh"element={<Rishikesh/>}/>
      <Route exact path="/newtehri"element={<NewTehri/>}/>
      <Route exact path="/chaukori"element={<Chaukori/>}/>
      <Route exact path="/kausani"element={<Kausani/>}/>
      <Route exact path="/nationalPark"element={<Ndnpark/>}/>
      <Route exact path="/rajajinational"element={<Rjnational/>}/>
      <Route exact path ="/valleryoffolwer"element={<Valleryofflower/>}/>
      <Route exact path ="/wildlife"element={<Wildlife/>}/>
      <Route exact path="/team"element={<Team/>}/>
      <Route exact path="/rental"element={<Rental/>}/>
      <Route exact path="/waterrace"element={<Waterrace/>}/>
      <Route exact path="/contact"element={<Contact/>}/>
      {/* <Redirect to="/home" /> */}

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
