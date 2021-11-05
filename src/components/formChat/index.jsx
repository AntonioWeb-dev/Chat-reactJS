import { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsFiles, BsFillMicFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { SendMessage } from './style';
import { ChatContext } from '../../context/chatContext';
import { UserContext } from '../../context/userContext';


export function FormChat({ socket }) {
  const [text, setText] = useState('');
  const { room, sendMessage } = useContext(ChatContext);
  const { user } = useContext(UserContext);

  const [audioChunks, setAudioChunks] = useState([]);
  const [blobURL, setBlobURL] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState({});
  const [timeRecording, setTimeRecording] = useState(0);
  const mongoObjectId = function () {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
      return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  };


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

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecord = new MediaRecorder(stream);
      setMediaRecorder(mediaRecord);
    });
  }, [])

  const startRecording = () => {
    if (mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop()
      const time = new Date().getTime() - timeRecording;
      setTimeRecording(time);
    } else {
      mediaRecorder.start()
      setTimeRecording(new Date().getTime());
      setBlobURL(false);
    }
  }

  mediaRecorder.ondataavailable = (ev) => {
    const chunk = [...audioChunks];
    chunk.push(ev.data)
    setAudioChunks(chunk);
  }
  mediaRecorder.onstop = (ev) => {
    let blob = new Blob(audioChunks, { type: 'audio/webm;codecs=opus' });
    const file = new File([blob], `${uuid()}-AUDIO.webm`);
    let audioURL = URL.createObjectURL(blob);


    const audioMessage = {
      _id: mongoObjectId(),
      type: "AUDIO",
      content: audioURL,
      sender: {
        name: user.name,
        _id: user.user_id,
        avatar: user.avatar,
        email: user.email,
      },
      duration: timeRecording,
      isResponse: false,
      room_id: room._id,
      date: new Date()
    }
    socket.emit('audio-message', audioMessage, file, timeRecording);
    sendMessage(audioMessage);
    setAudioChunks([]);
    setBlobURL(audioURL);
  }

  const playAudio = () => {
    const audio = new Audio(blobURL);
    audio.play();
  }



  return (
    <SendMessage onSubmit={handleSubmit}>
      <input type="text" name="text-message" value={text} autoComplete="off" placeholder="Escreva sua menssagem" onChange={e => setText(e.target.value)} />
      {
        blobURL
          ?
          <div type="button" onClick={playAudio}>play</div>
          :
          null
      }
      <button onClick={startRecording}>
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