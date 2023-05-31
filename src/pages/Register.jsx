import React from 'react'
import "./style.scss"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth,storage,db} from "../firebase"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from 'react';
import {doc,setDoc} from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {

  const navigate = useNavigate();
  const[err,setErr] = useState(false)
  const[mainErr,setMainErr] = useState('')
  const [loading, setLoading] = useState(false);
  const [files,setFiles]=useState(null)


  const handleSubmit= async (e)=>{
    setMainErr("")
    setErr(false)
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    if(!displayName){
      setMainErr("user name is required")
    }else if(!email){
      setMainErr("invalied email address")
    }else if(!password || password.length < 6){
      setMainErr("Password must have 6 characters")
    }else if(!file){
      setMainErr("profile pic is required")
    }else{
      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);
  
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
          });
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
            <span className="logo">Chat App</span>
            <span className="title">Register</span>
            {mainErr && <span className='alert alert-danger'>{mainErr}</span>}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display:"none"}} type="file" onChange={(e) => setFiles(e.target.files[0])} accept='image/png, image/gif, image/jpeg' id='file_upload' />
                <label htmlFor="file_upload">
                    <AddPhotoAlternateIcon/><span>Add an avatar</span>
                </label>
                {files && (
              <img style={{width:"50px",height:"50px",objectFit:"cover"}} alt="" src={URL.createObjectURL(files)} />
            )}
                
                <button disabled={loading}>Sign Up</button>
                {loading && "Uploading and compressing the image please wait..."}
                {err && <span style={{color:"red"}}>Something went wrong try again</span> }
            </form>
            <p className='mt-3'>You do have an account? <Link to={"/login"} >Login</Link></p>
        </div>
    </div>
  )
}
