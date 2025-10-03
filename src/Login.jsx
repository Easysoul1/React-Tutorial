import React, { useState } from 'react'

const Login = () => {
       const [username, setUsername] = useState("");
       const [password, setPassword] = useState("");
       const [confirmPassword, setConfirmPassword] = useState("");
       const [error, setError] = useState("");

       const handleSubmit = (e) => {
         e.preventDefault();
         if (password != confirmPassword){
              setError('Password do not match');
              alert(error);
         }else{
              if (username === 'admin' && password === 'password') {
           alert("Login successful!");
           setError("");
         } else {
           setError("Invalid username or password");
           alert(error);
         }
         }
       };
  return (
    <form action="submit" onSubmit={handleSubmit}>
       <div>
         <label htmlFor="username">Username:</label>
         <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

         <label htmlFor="password">Password:</label>
         <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

         <label htmlFor="confirmPassword">Confirm Password:</label>
         <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
         <button type="submit" className='btn'>Login </button>
       </div>
    </form>
  )
}

export default Login

//React hooks
// UseState *
// UseEffect *
// UseContext
// UseReducer
// UseRef
// Custom Hooks