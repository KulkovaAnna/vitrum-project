import styles from './styles.module.css';

export interface CharacterPageImagesBoardImage {
  src: string;
  key: string;
  alt: string;
}

interface Props {
  images: CharacterPageImagesBoardImage[];
  locale?: 'ru' | 'en';
}

export default function CharacterPageImagesBoard(props: Props) {
  const { locale, images } = props;

  return (
    <div className={styles.container}>
      {images.map((image) => (
        <img
          key={image.key}
          className={styles.squareImage}
          src={`${locale ? '/' : ''}${locale ?? ''}${image.src}`}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
