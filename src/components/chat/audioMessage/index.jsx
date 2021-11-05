import { useCallback, useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoMdPause } from 'react-icons/io';
import { AudioDiv } from './style';

export function AudioMessage({ audioBlob, audio, setAudio, id, duration }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = useCallback(() => {
    if (audio) {
      audio.element.pause()
    }
    const audioElement = new Audio(audioBlob);
    const newAudio = {
      id,
      element: audioElement
    }

    setAudio(newAudio);
    setIsPlaying(true);

    audioElement.play();

    setTimeout(() => {
      setIsPlaying(false)
    }, duration)
  }, [audio]);



  const pauseAudio = () => {
    setIsPlaying(false);
    audio.element.pause()
  }

  // ========================================

  useEffect(() => {
    if (isPlaying && id !== audio.id) {
      setIsPlaying(false);
    }
  }, [setAudio, audio, isPlaying, id]);
  console.log(duration);

  return (
    <AudioDiv duration={duration} play={isPlaying}>
      {isPlaying ?
        <IoMdPause onClick={pauseAudio} size={25} color={"white"} />
        :
        <BsFillPlayFill onClick={playAudio} size={25} cursor={"pointer"} color={"white"} />
      }
      <div id="bar">
        <div id="progress"></div>
      </div>

    </AudioDiv>
  )
}