import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import "./style.scss"
export const Login = () => {

  const navigate = useNavigate();
  const[err,setErr] = useState(false)
  const[mainErr,setMainErr] = useState('')
  const [loading, setLoading] = useState(false);


  const handleLogin= async (e)=>{
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    
    if(!email){
      setMainErr("invalied email address")
    }else if(!password || password.length < 6){
      setMainErr("Password must have 6 characters")
    }else{
      try {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential.user);
            const user = userCredential.user;
            navigate("/")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMainErr(error.message)
            // ..
          });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
}

 

}

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">CHAT APP</span>
            <span className="title">LOGIN</span>
            {mainErr && <span className='alert alert-danger'>{mainErr}</span>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='email' autocomplete="off" />
                <input type="password" placeholder='password' autocomplete="off" />
               
                <button>Login</button>
            </form>
            <p className='mt-3'>You don't have an account?<Link to={"/register"} >Signup</Link> </p>
        </div>
    </div>
  )
}
