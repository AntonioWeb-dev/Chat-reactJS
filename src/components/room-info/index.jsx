import { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ChatContext } from '../../context/chatContext';
import { UserContext } from '../../context/userContext';
import { Axios } from '../../services/axios';
import { MemberCard } from './membersCard';
import { DivMembers, DivRoomInfo } from './style';


export function RoomInfo({ socket }) {
  const { room } = useContext(ChatContext);
  const { user } = useContext(UserContext).user;
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const history = useHistory();

  const getMembers = useCallback(async (room_id) => {
    const ids = room.members;
    const members = await Axios.get(`/users?ids=[${ids}]`, {
      headers: {
        'Authorization': 'Bearer ' + user.token,
      }
    });
    if (members.status === 200) {
      setMembers(members.data);
      setIsLoading(false);
    }
  }, [room, user]);


  useEffect(() => {
    getMembers();
  }, [getMembers])

  if (isLoading) return <></>

  const handleExit = async () => {
    const response = await Axios.delete(`/rooms/${room._id}/members`, {
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
      data: { user_id: user.user_id }
    }
    );
    if (response.status === 204) {
      history.push('/chat');
    }
  }

  return (
    <DivRoomInfo>
      <header>
        <div className="avatar">
          {
            room.room_avatar !== 'undefined'
              ?
              <img src={room.room_avatar} alt="group" />
              :
              <img src="images/default-group.png" alt="group" />
          }
        </div>
        <div className="roomInfo">
          <h3>{room.name}</h3>
          <p>roomID: {room._id}</p>
        </div>
      </header>

      <div className="align-center">
        <DivMembers>
          <div className="member-header">
            <h3>Membros</h3>
          </div>
          {members.map(member =>
            <MemberCard member={member} key={member._id} />
          )}
        </DivMembers>
        <div className="button-exit" onClick={handleExit}>
          <button>Sair</button>
        </div>
      </div>
    </DivRoomInfo>
  )
}