import { io } from 'socket.io-client';
import { ChatProvider } from '../../context/chatContext';
import { Rooms } from '../../components/rooms';
import { Container, MainDiv } from "./style";
import { Chat } from '../../components/chat';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { RoomInfo } from '../../components/room-info';


export default function Main() {
  const [roomSelected, setRoomSelected] = useState(undefined);
  const [roomInfo, setRoomInfo] = useState(false);
  const context = useContext(UserContext);
  const { user } = context;
  const server = io('http://localhost:3100/', {
    auth: {
      userID: user.user_id,
    }
  });


  return (
    <Container>
      <MainDiv roomInfo={roomInfo}>
        <ChatProvider>
          <Rooms socket={server} setRoomSelected={setRoomSelected} />
          <Chat
            roomSelected={roomSelected}
            user={user}
            socket={server}
            setRoomInfo={setRoomInfo}
            roomInfo={roomInfo}
          />
          {
            roomInfo
              ?
              <RoomInfo socket={server} />
              :
              null
          }
        </ChatProvider>
      </MainDiv>
    </Container>
  )
}