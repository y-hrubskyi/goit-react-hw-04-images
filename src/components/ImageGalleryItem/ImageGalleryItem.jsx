import { useState } from 'react';

import { ImageModal } from 'components/ImageModal/ImageModal';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, largeImg, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <Item>
      <Image src={smallImg} alt={tags} onClick={toggleModal} />
      <ImageModal
        img={largeImg}
        tags={tags}
        onClose={toggleModal}
        isOpen={isModalOpen}
      />
    </Item>
  );
};
