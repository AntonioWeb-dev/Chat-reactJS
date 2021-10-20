import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { ChatContext } from '../../context/chatContext';
import { DivRoom } from './style';

export function Room({ roomName, roomSubject, room_id, socket }) {
  const { changeRoom } = useContext(ChatContext);

  function handleSelectRoom() {
    const roomSelected = {
      name: roomName,
      _id: room_id,
    }
    changeRoom(roomSelected);
    socket.emit('room', room_id);
  }
  return (
    <DivRoom onClick={handleSelectRoom}>
      <div className="avatar">
        <FaUserCircle size={45} color={"#ddd"} />
      </div>
      <div className="room-info">
        <span>
          {roomName}
        </span>
        <span>
          {roomSubject}
        </span>
      </div>
    </DivRoom>
  )
}