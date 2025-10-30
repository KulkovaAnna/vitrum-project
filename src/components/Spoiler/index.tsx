import { ChangeEventHandler, PropsWithChildren, useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import Modal from '../Modal';
import { translate } from '@docusaurus/Translate';
import Button from '../Button';

interface Props {}

export default function Spoiler(props: PropsWithChildren<Props>) {
  const [isShown, setIsShown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dontShowAgainChecked, setDontShowAgainChecked] = useState(false);

  const handleClick = () => {
    if (isShown) return;

    const allowShowSpoilers = sessionStorage.getItem('allowShowSpoilers');
    if (allowShowSpoilers) {
      setIsShown(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleYes = () => {
    setIsShown(true);
    if (dontShowAgainChecked) {
      sessionStorage.setItem('allowShowSpoilers', 'true');
    }
    closeModal();
  };

  const handleCheckedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDontShowAgainChecked(e.target.checked);
  };

  return (
    <>
      <div className={styles.container} onClick={handleClick}>
        <div
          className={clsx({
            [styles.spoiler]: !isShown,
            [styles.cleanButton]: true,
          })}
        >
          {props.children}
        </div>
        {!isShown && (
          <div className={styles.clickToSeeBlock}>
            {translate({ id: 'theme.spoiler.clickToSee' })}
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        title={translate({ id: 'theme.spoiler.modal.title' })}
        onClose={closeModal}
      >
        <p>{translate({ id: 'theme.spoiler.modal.description' })}</p>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="allowShowSpoilers"
            checked={dontShowAgainChecked}
            onChange={handleCheckedChange}
          />
          <label htmlFor="allowShowSpoilers">
            {translate({ id: 'theme.spoiler.modal.dontShowAgain' })}
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <Button size="small" onClick={handleYes} variant="outlined">
            {translate({ id: 'theme.common.yes' })}
          </Button>
          <Button size="small" onClick={closeModal}>
            {translate({ id: 'theme.common.no' })}
          </Button>
        </div>
      </Modal>
    </>
  );
}
