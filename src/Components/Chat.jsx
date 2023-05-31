import Input from './Input'
import React, { useContext } from 'react'
import Messages from './Messages'
import { ChatContext } from '../context/ChatContext';

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <>
    {data ? 
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <Input/>
    </div>
: <p>start Your Conversation</p> }
    </>
  );
}

export default Chat