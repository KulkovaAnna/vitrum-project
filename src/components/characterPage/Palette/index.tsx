import styles from './styles.module.css';
import clsx from 'clsx';

export type Palette = Map<string, { colors: string[]; gradient: string }>;

interface Props {
  palette: Palette;
}

export default function CharacterPagePalette(props: Props) {
  const { palette } = props;

  return (
    <div className={styles.container}>
      {Array.from(palette).map(([name, value]) => (
        <div key={name}>
          <div className="character__caption">{name}</div>
          <div className={styles.colorBlockWrapper}>
            {value.colors.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className={styles.colorBlock}
              />
            ))}
          </div>
          <div
            style={{ background: value.gradient }}
            className={styles.colorGradient}
          />
        </div>
      ))}
    </div>
  );
}
