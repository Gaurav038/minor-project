import React, {useState, useEffect} from 'react'
import { Data } from "../../Data"
import { useNavigate} from 'react-router-dom';


const Picktrip = () => {
  const navigate =  useNavigate();
  const [query, setQuery] = useState("");
  const [query1, setQuery1] = useState("");
  const [show, setShow] = useState(false);
  const [final, setFinal] = useState();
  const keys = ["title", "exprence"];

  const search = (value) => {
     console.log(value)
     return value.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  // const newFilter = data.filter((value) => {
  //   return value.title.toLowerCase().includes(searchWord.toLowerCase());
  // });


  const getSearch =() => {
    console.log("hjhkjkj")

    const data1 =  search(Data);
    console.log(data1, "hhhhhh")

    const data2 =  data1.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query1))
  );
     console.log(data2, "ddddddd")
    setFinal(data2)
    navigate('/valleryoffolwer', {state:{data : data2}})
  }
  console.log(final, "hjhkjkj")
  

  return (
    <div className='pt-0'id="bg">
       
       <div className="container pt-5 pb-5" >
       <div className="row text-center">
         <div className="col-lg-12">
           <h1 className='fw-bold display-3'>PICK A TRIP</h1>
         </div>
       </div>
           <div className="row justify-content-center">
               <div className="col-lg-4 pt-3 pb-3">
                  <select className='form-select'
                  onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                  <option selected>District</option>
                  <option value="Almora">Almora</option>
                  <option value="HARIDWAR">HARIDWAR</option>
                  <option value="Dehradun">Dehradun</option>
                  <option value="Pithoragarh">Pithoragarh</option>
                  </select>
               </div><br></br>
               <div className="col-lg-4 pt-3 pb-3">
                  <select className='form-select'
                  onChange={(e) => setQuery1(e.target.value.toLowerCase())}>
                  <option value="Nature" selected>Nature</option>
                  <option value="Culture">Culture</option>
                  <option value="Spirituality">Spirituality</option>
                  <option value="Adventure">Adventure</option>
                  </select><br></br>
               </div>
               <div className='col-lg-2 pt-3 pb-3'>
                   <button onClick={()=>getSearch()} className='btn btn-outline-light'>Submit</button>
               </div>
           </div>
       </div>
     

    </div>
  )
}

export default Picktrip