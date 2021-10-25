import { useContext, useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsFiles, BsFillMicFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { SendMessage } from './style';
import { ChatContext } from '../../context/chatContext';
import { UserContext } from '../../context/userContext';


export function FormChat({ socket }) {
  const [text, setText] = useState('');
  const { room, messages, sendMessage } = useContext(ChatContext);
  const { user } = useContext(UserContext).user;


  const mongoObjectId = function () {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
      return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  };

  function handleSubmit(e) {
    e.preventDefault();
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
      date: new Date()
    }
    socket.emit("send-message", message);
    const messagesUpdated = [...messages];
    messagesUpdated.push(message);
    sendMessage(messagesUpdated);
    setText('');
  }
  return (
    <SendMessage onSubmit={handleSubmit}>
      <input type="text" name="text-message" value={text} autocomplete="off" placeholder="Escreva sua menssagem" onChange={e => setText(e.target.value)} />
      <button>
        <BsFillMicFill size={25} color={"gray"} />
      </button>
      <button>
        <BsFiles size={25} color={"gray"} />
      </button>
      <button>
        <AiOutlineCamera size={30} color={"gray"} />
      </button>
      <button>
        <IoMdSend color={"gray"} size={38} />
      </button>
    </SendMessage>
  )
}