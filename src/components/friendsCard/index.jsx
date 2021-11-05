import { FaUserCircle } from 'react-icons/fa';
import { DivFriend } from './style';

export function Friend({ name, user_id }) {
  return (<DivFriend>
    <div className="avatar">
      <FaUserCircle size={45} color={"#ddd"} />
    </div>
    <div className="room-info">
      <span>
        {name}
      </span>
    </div>
  </DivFriend>)
}