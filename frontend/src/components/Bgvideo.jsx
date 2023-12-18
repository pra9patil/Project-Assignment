import React , {useState } from 'react';
import axios from 'axios';
import videobg from '../assets/DroneShot.mp4';


const Bgvideo = () =>{
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [payment, setPayment] = useState("");
  const [PhoneNumber, setPhone] = useState("");
  const [Batch, setBatch] = useState("");
  const [status , setStatus] = useState("");

  const Info =(e) =>{
    e.preventDefault();
    axios.post("http://localhost:8000/form",{
      username : username,
      email:email,
      PhoneNumber:PhoneNumber,
      password:password,
      Batch:Batch,

    }).then((Response) => {
      if(Response.data.message){
        setStatus(response.data.message)
      }
      else{
        setStatus("Your Slot Booked!");
      }
    })
  }

  const pay =(e) => {
    e.preventDefault();
    setPayment("Payment Sucessful!");
  }
  
  

    return (
        <>
        <div className='videoEdit'>
             <video src={videobg} autoPlay loop muted/>
        </div>
        
        <div className='main'>
          
          
          <form className="card" action=""> 
          <h2>Welcome To Our Yoga Classes</h2>
          <h4 style={{color:'black'}}>Book Your slot now only for 500 Rupees</h4>
          <label style={{textAlign:'left'}} htmlFor="username">Username</label> 
          <input className="textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required />

          <label htmlFor="email">Email</label>
          <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" required />

          <label htmlFor="PhoneNumber">PhoneNumber</label>
          <input className="textInput" type="text" name="PhoneNumber" onChange={(e) => {setPhone(e.target.value)}} placeholder="Phone Number" required />

          <label htmlFor="password">Password</label>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
           
           <label htmlFor="Batch">Select Batch 1 : 6-7AM 2: 7-8AM 3: 8-9AM 4: 5-6PM</label>
           <div style={{display:'flex' , margin:'2px' , justifyContent:'space-between'}}>
            <input type="text" name='Batch' onChange={(e) => {setBatch(e.target.value)}} />
           </div>
           <label htmlFor="payment">Rupee: 500</label>
           <input style={{margin:'2px' , border:'2px solid green' , borderRadius:'5px'}} className="button" type="submit" onClick={pay} value="Click for Payment"/> 
           <h1 style={{color:'green' , fontSize:'15px' , textAlign :'center' }}>{payment}</h1>
          
          <input style={{margin:'2px' , border:'2px solid Blue' , borderRadius:'5px'}} className="button" type="submit" onClick={Info} value="Book Here"/>
          <h1 style={{color:'green' , fontSize:'15px' , textAlign :'center' }}>{status}</h1>
          </form>
        </div>
        
      </> 
    )
}

export default Bgvideo;