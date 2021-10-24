import { useContext, useState } from 'react';
import { Axios } from '../../services/axios';
import { Friend } from '../friendsCard';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import { DivNewChat, FormRoom } from './style';
import { UserContext } from '../../context/userContext';


export function NewChat({ handleNewChat, rooms, handlerRoom }) {
  const [createRoom, setCreateRoom] = useState(false);
  const [roomID, setRoomID] = useState('');
  const [roomName, setRoomName] = useState('');
  const { user } = useContext(UserContext).user;

  const handleNewRoom = async (event) => {
    event.preventDefault();
    if (!roomName) {
      return;
    }
    try {
      const room = await Axios.post('/rooms', { name: roomName, maxConnections: 6 }, {
        headers: {
          'Authorization': 'Bearer ' + user.token,
        }
      });
      const newRooms = [room, ...rooms];
      handlerRoom(newRooms);
      handleNewChat(false);
      console.log(room);
    } catch (err) {
      console.log(err);
    }
  }

  const enterRoom = async (event) => {
    event.preventDefault();
    const room = await Axios.put(`/rooms/newmember/${roomID}`, { user_id: user.user_id }, {
      headers: {
        'Authorization': 'Bearer ' + user.token,
      }
    });
    const newRooms = [...rooms, room.data];
    console.log(room);
    handlerRoom(newRooms);
    handleNewChat(false);
  }

  return (
    <DivNewChat>
      <div className="add-room">
        <button onClick={e => setCreateRoom(true)} className="create-room">
          criar grupo
        </button>
        <form className="search-div" onSubmit={enterRoom}>
          <button type="submit">
            <BiMessageRoundedAdd size={25} color={"gray"} cursor={"pointer"} />
          </button>
          <input type="text" placeholder="#ID do grupo" onChange={e => setRoomID(e.target.value)} value={roomID} />
        </form>
      </div>
      {
        createRoom
          ?
          <FormRoom onSubmit={handleNewRoom}>
            <input
              type="text"
              name="roomName"
              value={roomName}
              placeholder="Nome da sala"
              onChange={e => setRoomName(e.target.value)} />
            <button type="submit">
              Criar
            </button>
          </FormRoom>
          :
          null
      }
      <div>

        <Friend name={"adad"} user_id={"adadad"} />
        <Friend name={"adad"} user_id={"adadad2"} />

        <Friend name={"adad"} user_id={"adadad1"} />

        <Friend name={"adad"} user_id={"adadad3"} />
      </div>


    </DivNewChat>
  )
}