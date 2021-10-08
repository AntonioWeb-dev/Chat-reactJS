import { FaUserCircle } from 'react-icons/fa';
import { DivRoom } from './style';

export function Room({ roomName, roomSubject }) {
    return (
        <DivRoom>
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