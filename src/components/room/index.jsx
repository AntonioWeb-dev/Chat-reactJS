import { FaUserCircle } from 'react-icons/fa';
import { DivRoom } from './style';

export function Room({ roomName, roomSubject, room_id, selectRoom }) {
  function handleSelectRoom() {
    const roomSelected = {
      name: roomName,
      _id: room_id,
    }
    selectRoom(roomSelected)
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