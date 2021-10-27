import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { ChatContext } from '../../context/chatContext';

import { DivRoom } from './style';

export function Room({ room }) {
  const { name, last_message } = room;
  const { changeRoom } = useContext(ChatContext);
  const date = new Date(last_message.date);

  function handleSelectRoom() {
    changeRoom(room);
  }
  return (
    <DivRoom onClick={handleSelectRoom}>
      <div className="avatar">
        {
          room.room_avatar !== 'undefined'
            ?
            <img src={room.room_avatar} alt="room" />
            :
            <FaUserCircle size={45} color={"#ddd"} />
        }
      </div>
      <div className="room-info">
        <span>
          {name}
        </span>
        <div className="last-message">
          <span className="content">
            {last_message.content
              ?
              last_message.content
              :
              undefined
            }
          </span>
          <span>
            {last_message.date
              ?
              `${date.getHours()}:${date.getMinutes()}`
              :
              undefined
            }
          </span>
        </div>
      </div>
    </DivRoom>
  )
}