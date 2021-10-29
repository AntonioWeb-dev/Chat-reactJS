import { useContext, useState } from 'react';
import { Axios } from '../../services/axios';
import { UserContext } from '../../context/userContext';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { DivNewChat, FormRoom } from './style';


export function NewChat({ handlerRoom, rooms, handleNewChat }) {
  const { user } = useContext(UserContext);
  const [createRoom, setCreateRoom] = useState(false);
  const [roomID, setRoomID] = useState('');
  const [roomName, setRoomName] = useState('');
  const [file, setFile] = useState(null);

  const handleAvatar = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    setFile({ file: e.target.files[0], url });
  }

  const handleNewRoom = async (event) => {
    event.preventDefault();
    if (!roomName) {
      return;
    }
    console.log(file?.file)
    const data = { name: roomName };
    const formData = new FormData();
    formData.append('body', JSON.stringify(data));
    formData.append('avatar', file?.file);

    try {
      const room = await Axios.post('/rooms', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': 'Bearer ' + user.token,
        }
      });
      const newRooms = [room.data, ...rooms];
      handlerRoom(newRooms);
      handleNewChat(false);
    } catch (err) {
      console.log(err);
    }
  }

  const enterRoom = async (event) => {
    event.preventDefault();
    const data = { user_id: user.user_id };
    const room = await Axios.put(`/rooms/newmember/${roomID}`, data, {
      headers: {
        'Authorization': 'Bearer ' + user.token,
      }
    });
    const newRooms = [...rooms, room.data];
    handlerRoom(newRooms);
    handleNewChat(false);
  }

  return (
    <DivNewChat>
      <div className="add-room">
        <button onClick={e => setCreateRoom(true)} className="create-room">
          criar grupo
        </button>
        <form className="search-div" onSubmit={enterRoom}>
          <button type="submit">
            <BiMessageRoundedAdd size={25} color={"gray"} cursor={"pointer"} />
          </button>
          <input type="text" placeholder="#ID do grupo ou email " onChange={e => setRoomID(e.target.value)} value={roomID} />
        </form>
      </div>
      {
        createRoom
          ?
          <FormRoom onSubmit={handleNewRoom}>
            <div className="avatar">
              {
                file
                  ?
                  <img src={file.url} alt="" />
                  :
                  <FaUserCircle size={65} />
              }
              <label htmlFor="file-avatar">Escolher foto</label>
              <input type="file" name="file-avatar" autoComplete="off" id="file-avatar" onChange={handleAvatar} />
            </div>
            <input
              type="text"
              name="roomName"
              value={roomName}
              placeholder="Nome da sala"
              onChange={e => setRoomName(e.target.value)} />
            <button type="submit">
              Criar
            </button>
          </FormRoom>
          :
          null
      }


    </DivNewChat>
  )
}