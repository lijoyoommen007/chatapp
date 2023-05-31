import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import moment from "moment"

function Message({message}) {
  console.log(message);
  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);


  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  return (
    <div className={`message ${message?.senderId === currentUser.uid &&'owner'}`}>
        <div className='messageInfo'>
            <img src={message?.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
            <span>{moment(message?.date).fromNow()}</span>
        </div>
        <div className='messageContent'>
            <p  >{message?.text}</p>
            {message?.img && <img src={message?.img} alt="" />}
        </div>
    </div>
  )
}

export default Message