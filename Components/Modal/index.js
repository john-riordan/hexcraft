import { useContext } from 'react';
import { StateContext } from '../../StateContext';

import styles from './Modal.module.css';

const Modal = () => {
  const { state, setState } = useContext(StateContext);

  return (
    <div
      className={styles.overlay}
      onClick={() =>
        setState((prev) => ({ ...prev, modal: null }))
      }
    >
      <div
        className={styles.frame}
        onClick={(e) => e.stopPropagation()}
      >
        {state.modal}
      </div>
    </div>
  );
};

export default Modal;
