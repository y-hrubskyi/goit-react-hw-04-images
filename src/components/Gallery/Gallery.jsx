import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import { GalleryList } from './Gallery.styled';

export const Gallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <GalleryItem
          key={image.id}
          smallImg={image.webformatURL}
          largeImg={image.largeImageURL}
          tags={image.tags}
        />
      ))}
    </GalleryList>
  );
};
