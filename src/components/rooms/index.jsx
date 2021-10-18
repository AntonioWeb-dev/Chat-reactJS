import { useEffect, useState } from 'react';
import { Room } from "../../components/room";
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { SiGooglemessages } from 'react-icons/si';
import { RoomsDiv } from './style';

export function Rooms({ user, socket, setRoomSelected }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket.on("yourRooms", (rooms) => {
      setRooms(rooms)
    })
  })

  return (
    <RoomsDiv>
      <header className="header-room">
        <div className="avatar">
          <FaUserCircle size={45} color={"#0078e7"} />
        </div>
        <span>
          {user.name}
        </span>
        <div>
          <SiGooglemessages size={25} />
        </div>
        <div>
          <HiMenu size={29} />
        </div>
      </header>
      <div className="rooms">

        {rooms.map(room =>
          <Room
            key={room._id}
            roomName={room.name}
            roomSubject="any"
            room_id={room._id}
            selectRoom={setRoomSelected}
          />
        )}
      </div>
    </RoomsDiv>
  )
}