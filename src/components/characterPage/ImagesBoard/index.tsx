import Image from '../../Image';
import styles from './styles.module.css';

export interface CharacterPageImagesBoardImage {
  src: string;
  key: string;
  alt: string;
}

interface Props {
  images: CharacterPageImagesBoardImage[];
}

export default function CharacterPageImagesBoard(props: Props) {
  const { images } = props;

  return (
    <div className={styles.container}>
      {images.map((image) => (
        <Image {...image} className={styles.squareImage} />
      ))}
    </div>
  );
}
