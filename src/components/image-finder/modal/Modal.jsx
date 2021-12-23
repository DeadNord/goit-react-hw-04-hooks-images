import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './Modal.module.css';

// import { ReactComponent as closeIcon } from '../icons/closeIcon.svg';

const modalRoot = document.querySelector('#modal-root');

function Modal({ src, alt, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={src} alt={alt} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
