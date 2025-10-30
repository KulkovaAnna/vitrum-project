import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

interface Props {
  /**@description Уникальный идентификатор блока в пределах страницы */
  id: string;
  label: string;
}

export default function CharacterPageInfoBlock(
  props: PropsWithChildren<Props>
) {
  const { id, label, children } = props;
  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div id={id}>{children}</div>
    </div>
  );
}
