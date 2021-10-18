import { io } from 'socket.io-client';
import { Rooms } from '../../components/rooms';
import { Container, MainDiv } from "./style";
import { Chat } from '../../components/chat';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';


export default function Main() {
  const [roomSelected, setRoomSelected] = useState(undefined);
  const context = useContext(UserContext);
  const { user } = context.user;
  const server = io('http://localhost:3100/', {
    auth: {
      userID: user.user_id,
    }
  });





  return (
    <Container>
      <MainDiv>
        <Rooms user={user} socket={server} setRoomSelected={setRoomSelected} />
        {roomSelected
          ?
          <Chat roomSelected={roomSelected} user={user} socket={server} />
          :
          <></>
        }
      </MainDiv>
    </Container>
  )
}