import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AiOutlineSend } from 'react-icons/ai';
import { SendMessage } from './style';


export function FormChat({ room, socket, user, newMessage }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const message = {
      content: text,
      sender_id: user.user_id,
      sender_name: user.name,
      room: room._id,
      message_id: uuid(),
    }
    newMessage(message);
    socket.emit("send-message", message);
  }
  return (
    <SendMessage onSubmit={handleSubmit}>
      <input type="text" name="text-message" onChange={e => setText(e.target.value)} />
      <button><AiOutlineSend color={"#71b0eb"} size={38} /></button>
    </SendMessage>
  )
}