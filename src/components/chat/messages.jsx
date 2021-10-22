import { useCallback, useContext, useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { ChatContext } from '../../context/chatContext';
import { UserContext } from '../../context/userContext';
import { Axios } from '../../services/axios';
import { Message, MessagesDiv } from './style';

export function Messages({ socket }) {
  const { room, messages, sendMessage } = useContext(ChatContext);
  const { user } = useContext(UserContext).user;
  const [isLoading, setIsLoading] = useState(false);

  const getRoomMessages = useCallback(async () => {
    const roomMessages = await Axios.get(`/messages/${room._id}`, {
      headers: {
        'Authorization': 'Bearer ' + user.token,
      }
    }
    );
    sendMessage(roomMessages.data);
    const divMessages = document.getElementById("Messages");
    divMessages.scrollTop = divMessages.scrollHeight;

  }, [room]);

  useEffect(() => {
    const divMessages = document.getElementById("Messages");
    divMessages.scrollTop = divMessages.scrollHeight;
  }, [messages])

  useEffect(() => {
    getRoomMessages()
  }, [getRoomMessages]);


  useEffect(() => {
    socket.on('recive-message', (message) => {
      const newMessages = [...messages];
      newMessages.push(message);
      sendMessage(newMessages);
    });

  }, [socket, messages, sendMessage]);

  if (!isLoading) <></>
  return (
    <MessagesDiv id="Messages">
      {messages.map(message => (
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
      ))}
    </MessagesDiv>
  )
}