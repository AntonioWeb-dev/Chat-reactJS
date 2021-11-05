import { useCallback, useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoMdPause } from 'react-icons/io';

export function AudioMessage({ audioBlob, audio, setAudio, id }) {
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
    }, 1000)
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

  return (
    <div>
      {isPlaying ?
        <IoMdPause onClick={pauseAudio} size={25} color={"white"} />
        :
        <BsFillPlayFill onClick={playAudio} size={25} cursor={"pointer"} color={"white"} />
      }

    </div>
  )
}