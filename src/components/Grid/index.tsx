import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLDivElement> {
  columns: number;
  mobileAdaptive?: boolean;
}

export default function Grid(props: PropsWithChildren<Props>) {
  const { columns, children, mobileAdaptive, className, style, ...rest } =
    props;

  return (
    <div
      className={clsx({
        [styles.grid]: true,
        [styles.mobileGrid]: mobileAdaptive,
        [className]: true,
      })}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
