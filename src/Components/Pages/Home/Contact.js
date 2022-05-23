import React from 'react'
// import emailjs from "emailjs";
import email from "../../Images/email.jpg"

const Contact = () => {
 
  // function sendEmail(e){
 
  //   e.preventDefault();

  //   emailjs.sendForm('service_1c5cj3l', 'template_8uyprtt',e.target, 'C2Jk02y4IGYQguWVw')
  //     .then((result) => {
  //         alert("you message successfully send, contact coming soon")(console.log(result.text));
  //     }, (error) => {
  //         alert("you message successfully send, contact coming soon")(console.log(error.text));
  //     });

  // }
 
   
  return (
    <>

     <section className=''>
     <div className=''>

<div className='container pt-0'>
<div className="row text-center ">
  <div className="col-lg-12 ">
    <h1 className='fw-bold'>Contact Us</h1>
  </div>
</div>
<form onSubmit="">
<div className='row mx-auto  pt-5 pb-5'>
 <div className="col-lg-5 ">
   <img src={email} id="contact-email"/>
 </div>
 <div className="col-lg-7 pt-5 pb-5">
<div className=" form-group">
  <input type="text"className='form-control'placeholder='Name'name="name" autoComplete='off' required/><br></br>
</div>
<div className=" form-group">
  <input type="email"className='form-control'placeholder='Email Address'name="email" autoComplete='off' required/><br></br>
</div>
<div className=" form-group">
  <input type="text"className='form-control'placeholder='Subjetc'name="subject"autoComplete='off' required/><br></br>
</div>

<div className=" form-group">
  <textarea type="text"className='form-control'placeholder='Messages'name="messages" autoComplete='off' required/><br></br>
</div>
<div className=' pt-3 pb-5 mx-auto'>
<div className='pb-5'>
<input type="submit"className="btn btn-outline-info" value="send Message"/><br></br>
</div>
</div>
</div>


</div>

</form>

</div>
</div>  

     </section>
    
    </>
  )
}

export default Contact