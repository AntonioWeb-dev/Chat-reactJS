import { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../../context/chatContext';
import { UserContext } from '../../context/userContext';
import { Axios } from '../../services/axios';
import { MemberCard } from './membersCard';
import { DivMembers, DivRoomInfo } from './style';


export function RoomInfo() {
  const { room } = useContext(ChatContext);
  const { user } = useContext(UserContext).user;
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMembers = async (room_id) => {
      const ids = room.members;
      console.log(ids);
      const members = await Axios.get(`/users?ids=[${ids}]`, {
        headers: {
          'Authorization': 'Bearer ' + user.token,
        }
      });
      return members.data;
    }
    const members = getMembers(room._id);
    console.log(members);
    if (members.status === 200) {
      setMembers(members.data);
      setIsLoading(false);
    }
  }, [room, user]);

  if (isLoading) return <></>
  return (
    <DivRoomInfo>
      <header>
        <div className="avatar">
          <img src="images/default-group.png" alt="group" />
        </div>
        <div className="roomInfo">
          <h3>{room.name}</h3>
          <p>roomID: {room._id}</p>
        </div>
      </header>

      <div className="align-center">
        <DivMembers>
          <h3>Membros</h3>
          {members.map(member =>
            <MemberCard member={member} key={member._id} />
          )}
        </DivMembers>
        <div className="button-exit">
          <button>Sair</button>
        </div>
      </div>
    </DivRoomInfo>
  )
}