import { useContext, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { SendMessage } from './style';
import { ChatContext } from '../../context/chatContext';
import { UserContext } from '../../context/userContext';
import { AudioMessage } from './audioMessage';
import { mongoObjectId } from '../../services/mongoObjectId';


export function FormChat({ socket }) {
  const [text, setText] = useState('');
  const { room, sendMessage } = useContext(ChatContext);
  const { user } = useContext(UserContext);



  function handleSubmit(e) {
    e.preventDefault();
    if (!text) {
      return;
    }
    //create a message to send 
    const message = {
      content: text,
      sender: {
        name: user.name,
        _id: user.user_id,
        avatar: user.avatar,
        email: user.email,
      },
      isResponse: false,
      room_id: room._id,
      _id: mongoObjectId(),
      type: "TEXT",
      date: new Date()
    }
    socket.emit("send-message", message);
    sendMessage(message);
    setText('');
  }




  return (
    <SendMessage onSubmit={handleSubmit}>
      <input type="text" name="text-message" value={text} autoComplete="off" placeholder="Escreva sua menssagem" onChange={e => setText(e.target.value)} />
      <AudioMessage socket={socket} />
      <button>
        <IoMdSend color={"gray"} size={38} />
      </button>
    </SendMessage>
  )
}