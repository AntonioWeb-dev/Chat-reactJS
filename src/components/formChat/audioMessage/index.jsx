import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { ChatContext } from '../../../context/chatContext';
import { UserContext } from '../../../context/userContext';
import { mongoObjectId } from '../../../services/mongoObjectId';

export function AudioMessage({ socket }) {
  const { room, sendMessage } = useContext(ChatContext);
  const { user } = useContext(UserContext);


  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState({});
  const [timeRecording, setTimeRecording] = useState(0);
  const [stream, setStream] = useState({})


  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecord = new MediaRecorder(stream);
      setMediaRecorder(mediaRecord);
      setStream(stream)
      mediaRecord.start()
      setTimeRecording(new Date().getTime());
    });
  }

  const stopRecording = () => {
    mediaRecorder.stop()
    setTimeRecording(0);
    stream.getTracks()[0].stop()
  }
  console.log(audioChunks);

  const sendAudio = () => {
    mediaRecorder.stop()
    const time = new Date().getTime() - timeRecording;
    setTimeRecording(time);
  }

  mediaRecorder.ondataavailable = (ev) => {
    const chunk = [...audioChunks];
    chunk.push(ev.data)
    setAudioChunks(chunk);
  }

  mediaRecorder.onstop = (ev) => {
    if (timeRecording === 0) {
      setAudioChunks([])
      console.log(timeRecording, audioChunks)
      return;

    }
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
    setTimeRecording(0);
    stream.getTracks()[0].stop()

  }

  return (
    timeRecording === 0
      ?
      <button onClick={startRecording}>
        <BsFillMicFill size={25} color={"gray"} />
      </button>
      :
      <div>
        <MdOutlineCancel size={35} color={"#e05e5e"} onClick={stopRecording} cursor={"pointer"} />
        <AiOutlineCheckCircle size={35} color={"#5ac473"} onClick={sendAudio} cursor={"pointer"} />
      </div>
  )
}