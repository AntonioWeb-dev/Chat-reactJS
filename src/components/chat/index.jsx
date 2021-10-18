import { FormChat } from "../formChat";
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { ChatDiv, MessagesDiv, Message } from "./style";
import { useEffect, useState } from 'react';

export function Chat({ roomSelected, socket, user }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('recive-message', (message) => {
      setNewMessage(message);
    });
  }, [socket, messages])


  function setNewMessage(message) {
    const newMessages = messages;
    newMessages.push(message);
    setMessages([...newMessages]);
  }



  return (
    <ChatDiv>
      <header className="header-chat">
        <div className="avatar">
          <FaUserCircle size={45} color={"#0078e7"} />
        </div>
        <span>
          {roomSelected.name}
        </span>

        <div>
          <HiMenu size={29} />
        </div>
      </header>
      <MessagesDiv>
        {messages.map(message => (
          <Message key={message.message_id} sameUser={message.sender_id === user.user_id} >
            <div className="message-content">
              <span>{message.sender_id === user.user_id ? "Você" : message.sender_name}</span>
              <p>{message.content}</p>
            </div>
          </Message>
        ))}
      </MessagesDiv>
      <FormChat room={roomSelected} user={user} socket={socket} newMessage={setNewMessage} />
    </ChatDiv>
  )
}