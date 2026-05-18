
import { useState } from "react";


const RestaurantSignUp=()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setC_password] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleSignUp=async()=>{
    console.log(email,password,c_password,name,city,address,contact);
    let result=await fetch("http://localhost:3000/api/restaurant",{
      method:"POST",
      body:JSON.stringify({email,password,name,city,address,contact})
    })

    result=await result.json();
    console.log(result);
    

  }
    return(      
        <>
        <h3>Sign Up</h3>
        
        <div>
        <div className="input-wrapper">
          <input  className="input-field" type="text" placeholder="Enter Email Id"  
          value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input  className="input-field" type="password" placeholder="Enter Password"
          value={password} onChange={(event)=>setPassword(event.target.value)} />
        </div>
        <div className="input-wrapper">
          <input  className="input-field" type="password" placeholder="Confirm Password" 
          value={c_password} onChange={(event)=>setC_password(event.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input  className="input-field" type="text" placeholder="Enter Restaurant Name"
          value={name} onChange={(event)=>setName(event.target.value)} />
        </div>
        <div className="input-wrapper">
          <input  className="input-field" type="text" placeholder="Enter Restaurant City" 
          value={city} onChange={(event)=>setCity(event.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input  className="input-field" type="text" placeholder="Enter Restaurant Address" 
          value={address} onChange={(event)=>setAddress(event.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input  className="input-field" type="text" placeholder="Enter Restaurant Number" 
          value={contact} onChange={(event)=>setContact(event.target.value)}/>
        </div>
        <div className="input-wrapper">
            <button className="button" onClick={handleSignUp}>SignUp</button>
        </div>
      </div>
        </>
    )
}
export default RestaurantSignUp;