import { useEffect } from 'react';

import { Overlay, StyledModal } from './Modal.styled';

export const Modal = ({ img, tags, onClose }) => {
  useEffect(() => {
    const handleKeyDowm = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDowm);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDowm);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <StyledModal>
        <img src={img} alt={tags} />
      </StyledModal>
    </Overlay>
  );
};
