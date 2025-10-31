import useFormatStaticSrc from '@/hooks/useFormatStaticSrc';
import { useRef, useState } from 'react';
import { PauseIcon, PlayIcon } from '../icons';
import styles from './styles.module.css';

interface Props {
  quote: string;
  src: string;
}

export default function QuotePlayer(props: Props) {
  const { src, quote } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const handlePlayClick = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const formattedSrc = useFormatStaticSrc(src);

  return (
    <div className={styles.container}>
      <audio
        src={formattedSrc}
        ref={audioRef}
        onPlay={handlePlay}
        onPause={handlePause}
      />
      <button className={styles.playButton} onClick={handlePlayClick}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <span title={quote} className={styles.quote}>
        {quote}
      </span>
    </div>
  );
}
