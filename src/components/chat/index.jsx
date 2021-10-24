import { useContext, useEffect } from 'react';
import { FormChat } from "../formChat";
import { HiMenu } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { ChatDiv } from "./style";
import { ChatContext } from '../../context/chatContext';
import { Messages } from './messages';

export function Chat({ socket, setRoomInfo, roomInfo }) {
  const { room, messages, sendMessage } = useContext(ChatContext);

  useEffect(() => {
    socket.on('recive-message', (message) => {
      const newMessages = [...messages];
      newMessages.push(message);
      sendMessage(newMessages);

    });
  }, [socket, room, messages, sendMessage]);


  return (
    <ChatDiv>
      <header className="header-chat">
        <div className="avatar">
          <FaUserCircle size={45} color={"#d1d1d1"} />
        </div>
        <span>{room.name}</span>

        <div onClick={e => setRoomInfo(!roomInfo)}>
          <HiMenu size={29} cursor={"pointer"} />
        </div>
      </header>
      {room._id
        ?
        <Messages socket={socket} />
        :
        <h1>aaa</h1>
      }
      <FormChat socket={socket} />
    </ChatDiv>
  )
}