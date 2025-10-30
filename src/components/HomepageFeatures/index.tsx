import type { ReactNode } from 'react';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.container}>
      <h1 className={styles['one-day']}>
        {translate({ id: 'theme.homePage.title' })}
      </h1>
      <p className={styles['not-today']}>
        {translate({ id: 'theme.homePage.description' })}
      </p>
    </section>
  );
}
