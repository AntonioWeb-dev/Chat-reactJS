import { useCallback, useContext, useEffect, useState } from 'react';
import { Axios } from '../../services/axios';
import { FormChat } from "../formChat";
import { HiMenu } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { ChatDiv, MessagesDiv, Message } from "./style";
import { ChatContext } from '../../context/chatContext';

export function Chat({ socket, user }) {
  const [isLoading, setIsLoading] = useState(false);
  const { room, messages, sendMessage } = useContext(ChatContext);
  console.log(messages, room);

  const getRoomMessages = useCallback(async () => {
    const roomMessages = await Axios.get(`/messages/${room._id}`, {
      headers: {
        'Authorization': 'Bearer ' + user.token,
      }
    }
    );
    sendMessage(roomMessages.data);
  }, [room]);

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

  if (!isLoading || !messages) <></>
  if (messages.length === 0) {

    return (<h1>aa</h1>);
  }
  return (
    <ChatDiv>
      <header className="header-chat">
        <div className="avatar">
          <FaUserCircle size={45} color={"#d1d1d1"} />
        </div>
        <span>{room.name}</span>

        <div>
          <HiMenu size={29} cursor={"pointer"} />
        </div>
      </header>
      <MessagesDiv>
        {messages.map(message => (
          <Message key={message._id} sameUser={message.sender.id === user.user_id} >
            <div className="user-image">
              <FaUserCircle size={30} color={"#d1d1d1"} cursor={"pointer"} />
            </div>
            <div className="message-content">
              <span>{message.sender.id === user.user_id ? "Você" : message.sender.name}</span>
              <p>{message.content}</p>
            </div>
          </Message>
        ))}
      </MessagesDiv>
      <FormChat user={user} socket={socket} />
    </ChatDiv>
  )
}