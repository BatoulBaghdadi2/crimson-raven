import React, { useState } from "react";

function Login() {

const [Name, setName] = useState("");
const [Email, setEmail] = useState("");
const [Pay, setPay] = useState("");
const [feedback, setFeedback] = useState("");

const handleFormSubmit = (e) => {
 e.preventDefault(); 
if (Name.trim() === "" || Email.trim() === "" || Pay.trim() === "" ) {
 setFeedback("Please fill all the blocks.");
}
else if(Name.trim().length<2){
setFeedback("Name should be more than two characters");
}
else if(!Email.includes("@")){
 setFeedback("Email should contain @");
}
else {
 setName("");
 setEmail("");
 setPay(""); 
 setFeedback("Submitted successfully!");
 }
 };

 return (
 <div className="login-page-container">
 <form onSubmit={handleFormSubmit}>
 <div className="login-card">
 <label>Full Name</label>
 <input 
 type="text" 
 value={Name} 
 onChange={(e) => setName(e.target.value)} 
 />
 <label>Email</label>
 <input 
 type="email" 
 value={Email} 
 onChange={(e) => setEmail(e.target.value)} 
 />
<label>Pay method</label>
 <select value={Pay} onChange={(e) => setPay(e.target.value)}>
<option type="dropdown" value="" >Select</option>
 <option value="Credit Card" >Credit Card</option>
 <option value="PayPal">PayPal</option>
 <option value="Apple Pay">Apple Pay</option>
 </select>
 </div>
 <button type="submit" className="submit-btn">Submit</button>
 </form>


 {feedback && <p className="msg">{feedback}</p>}
 </div>
 );
}

export default Login;
