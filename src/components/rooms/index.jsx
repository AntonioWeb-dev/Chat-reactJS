import { useEffect, useState } from 'react';
import { Room } from "../../components/room";
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { SiGooglemessages } from 'react-icons/si';
import { ImSearch } from 'react-icons/im';
import { RoomsDiv } from './style';

export function Rooms({ user, socket }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket.on("yourRooms", (rooms) => {
      setRooms(rooms)
    });
  })

  return (
    <RoomsDiv>
      <header className="header-room">
        <div className="user-header">
          <div className="avatar">
            <FaUserCircle size={45} color={"white"} />
          </div>
          <span>{user.name}</span>
          <div>
            <SiGooglemessages size={25} cursor={"pointer"} />
          </div>
          <div>
            <HiMenu size={29} cursor={"pointer"} />
          </div>
        </div>
        <div className="search-div">
          <button>
            <ImSearch size={20} color={"#9c9c9c"} />
          </button>
          <input type="text" placeholder="Buscar conversa" />
        </div>
      </header>
      <div className="rooms">

        {rooms.map(room =>
          <Room
            key={room._id}
            roomName={room.name}
            roomSubject="any"
            room_id={room._id}
            socket={socket}
          />
        )}
      </div>
    </RoomsDiv>
  )
}