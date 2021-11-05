import { useCallback, useContext, useEffect } from 'react';
import { Axios } from '../../services/axios';
import { HiMenu } from 'react-icons/hi';
import { FormChat } from "../formChat";
import { FaUserCircle } from 'react-icons/fa';
import { ChatDiv } from "./style";
import { ChatContext } from '../../context/chatContext';
import { Messages } from './messages';
import { UserContext } from '../../context/userContext';

export function Chat({ socket, setRoomInfo, roomInfo }) {
  const { room, messages, setMessages } = useContext(ChatContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    socket.on('recive-message', (message) => {
      const newMessages = [...messages];
      newMessages.push(message);
      setMessages(newMessages);
    });
  }, [socket, room, messages, setMessages]);

  const getRoomMessages = useCallback(async () => {
    const roomMessages = await Axios.get(`/messages/${room._id}`, {
      headers: {
        'Authorization': 'Bearer ' + user.token,
      }
    }
    );
    setMessages(roomMessages.data);
  }, [room]);

  // useEffect send a request to /messages/:room_id to get room's messages
  useEffect(() => {
    getRoomMessages()
  }, [getRoomMessages]);

  if (!room._id) {
    return <></>
  }
  return (
    <ChatDiv>
      <header className="header-chat">
        <div className="avatar">
          {
            room.room_avatar !== 'undefined'
              ?
              <img src={room.room_avatar} alt="room" />
              :
              <FaUserCircle size={45} color={"#d1d1d1"} />
          }
        </div>
        <span>{room.name}</span>

        <div onClick={e => setRoomInfo(!roomInfo)}>
          <HiMenu size={29} cursor={"pointer"} />
        </div>
      </header>
      <Messages socket={socket} />
      <FormChat socket={socket} />
    </ChatDiv>
  )
}