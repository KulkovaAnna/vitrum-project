import clsx from 'clsx';
import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.css';

interface Props
  extends HTMLAttributes<HTMLButtonElement>,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'flat';
}

export default function Button(props: PropsWithChildren<Props>) {
  const {
    href,
    children,
    size = 'medium',
    variant = 'contained',
    ...rest
  } = props;

  const cn = clsx({
    [styles.button]: true,
    [styles.button__contained]: variant === 'contained',
    [styles.button__outlined]: variant === 'outlined',
    [styles.button__flat]: variant === 'flat',
    [styles.button__small]: size === 'small',
    [styles.button__medium]: size === 'medium',
    [styles.button__large]: size === 'large',
  });

  if (href)
    return (
      <a href={href} className={cn} {...(rest as any)}>
        {children}
      </a>
    );

  return (
    <button className={cn} {...rest}>
      {children}
    </button>
  );
}
