import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
import clsx from 'clsx';

interface Props {
  role: 'primary' | 'secondary' | 'tertiary';
}

const TITLES = {
  primary: translate({ id: 'theme.characterPage.roleChip.primary' }),
  secondary: translate({ id: 'theme.characterPage.roleChip.secondary' }),
  tertiary: translate({ id: 'theme.characterPage.roleChip.tertiary' }),
};

const STYLES = {
  primary: 'roleChip__primary',
  secondary: 'roleChip__secondary',
  tertiary: 'roleChip__tertiary',
};

export default function RoleChip(props: Props) {
  const { role } = props;

  return (
    <span className={clsx(styles.roleChip, styles[STYLES[role]])}>
      {TITLES[role]}
    </span>
  );
}
