import Spoiler from '@/components/Spoiler';
import Image from '../../Image';
import styles from './styles.module.css';

export interface CharacterPageImagesBoardImage {
  src: string;
  key: string;
  alt: string;
  spoiler?: boolean;
}

interface Props {
  images: CharacterPageImagesBoardImage[];
}

export default function CharacterPageImagesBoard(props: Props) {
  const { images } = props;

  return (
    <div className={styles.container}>
      {images.map(({ spoiler, ...image }) =>
        spoiler ? (
          <Spoiler fullHide>
            <Image {...image} className={styles.squareImage} />
          </Spoiler>
        ) : (
          <Image {...image} className={styles.squareImage} />
        )
      )}
    </div>
  );
}
