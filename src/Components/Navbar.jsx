import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

function Navbar() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button className='btn btn-outline-danger btn-sm' onClick={()=>signOut(auth)}>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar