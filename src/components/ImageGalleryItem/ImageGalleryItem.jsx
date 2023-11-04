import { useState } from 'react';

import { Modal } from 'components/Modal/Modal';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, largeImg, tags }) => {
  const [isOpenModal, SetisOpenModal] = useState(false);

  const toggleModal = () => {
    SetisOpenModal(prevState => !prevState);
  };

  return (
    <>
      <Item>
        <Image src={smallImg} alt={tags} onClick={toggleModal} />
      </Item>
      {isOpenModal && (
        <Modal img={largeImg} tags={tags} onClose={toggleModal} />
      )}
    </>
  );
};
