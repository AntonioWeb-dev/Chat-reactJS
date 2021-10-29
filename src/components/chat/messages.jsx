import { useContext, useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { ChatContext } from '../../context/chatContext';
import { UserContext } from '../../context/userContext';
import { Message, MessagesDiv } from './style';

export function Messages() {
  const { room, messages, sendMessage } = useContext(ChatContext);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);



  // scrollingDown - scroll to the bottom of messages when some message is  sent
  const scrollingDown = () => {
    const divMessages = document.getElementById("Messages");
    divMessages.scrollTop = divMessages.scrollHeight;
  }
  useEffect(() => {
    scrollingDown()
  }, [sendMessage]);


  // All rooms recive the message because i joined all of rooms, so there is a codition 
  // that must verify room_id of the message and the room selected 

  if (!isLoading || !messages) <></>
  return (
    <MessagesDiv id="Messages">
      {messages.map(message => (
        message.room_id === room._id
          ?
          <Message key={message._id} sameUser={message.sender._id === user.user_id} >
            <div className="user-image">
              {
                message.sender.avatar !== 'undefined'
                  ?
                  <img src={message.sender.avatar} alt='user' />
                  :
                  <FaUserCircle size={35} color={"#d1d1d1"} cursor={"pointer"} />
              }
            </div>
            <div className="message-content">
              <span>{message.sender._id === user.user_id ? "Você" : message.sender.name}</span>
              <p>{message.content}</p>
            </div>
          </Message>
          :
          null

      ))}
    </MessagesDiv>
  )
}