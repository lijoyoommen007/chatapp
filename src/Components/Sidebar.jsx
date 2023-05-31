import Search  from './Search'
import React from 'react'
import Navbar from "./Navbar"
import Chats from './Chats'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/> 
    </div>
  )
}

export default Sidebar