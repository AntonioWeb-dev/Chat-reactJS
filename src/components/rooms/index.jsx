import { useContext, useEffect, useState } from 'react';
import { Room } from "../../components/room";
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { SiGooglemessages } from 'react-icons/si';
import { ImSearch } from 'react-icons/im';
import { RoomsDiv } from './style';
import { UserContext } from '../../context/userContext';
import { NewChat } from '../newChat';

export function Rooms({ socket }) {
  const [rooms, setRooms] = useState([]);
  const [newChat, setNewChat] = useState(false);
  const { user } = useContext(UserContext).user;

  useEffect(() => {
    socket.on("yourRooms", (rooms) => {
      setRooms(rooms)
    });
  }, [socket])

  useEffect(() => {
    if (rooms.length > 0) {
      socket.on('recive-message', (last_message) => {
        let roomIndex = -1;
        for (let index in rooms) {
          if (rooms[index]._id === last_message.room_id) {
            roomIndex = index;
          }
        }

        const newRooms = rooms;
        newRooms[roomIndex].last_message = {
          content: last_message.content,
          date: last_message.date,
        }
        setRooms(newRooms);
      });
    }
  }, [socket, rooms, setRooms]);

  return (
    <RoomsDiv newChat={newChat} >
      <header className="header-room">
        <div className="user-header">
          <div className="avatar">
            {user.avatar !== 'undefined'
              ?
              <img src={user.avatar} alt="user" />
              :
              <FaUserCircle size={45} color={"white"} />
            }
          </div>
          <span>{user.name}</span>
          <div >
            <SiGooglemessages onClick={e => setNewChat(!newChat)} size={25} cursor={"pointer"} />
          </div>
          <div>
            <HiMenu size={29} cursor={"pointer"} />
          </div>
        </div>
        {
          // search room or user
          newChat
            ?
            null
            :
            <div className="search-div">
              <button>
                <ImSearch size={20} color={"#9c9c9c"} />
              </button>
              <input type="text" autoComplete="off" placeholder="Buscar conversa" />
            </div>
        }
      </header>
      <div className="rooms">
        {
          newChat
            ?
            <NewChat handlerRoom={setRooms} rooms={rooms} handleNewChat={setNewChat} />
            :
            rooms.map(room =>
              <Room
                key={room._id}
                room={room}
              />
            )

        }
      </div>
    </RoomsDiv>
  )
}