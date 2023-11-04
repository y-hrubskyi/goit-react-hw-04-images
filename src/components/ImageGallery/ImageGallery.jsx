import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  const galleryList = images.map(image => (
    <ImageGalleryItem
      key={image.id}
      smallImg={image.webformatURL}
      largeImg={image.largeImageURL}
      tags={image.tags}
    />
  ));

  return <Gallery>{galleryList}</Gallery>;
};
