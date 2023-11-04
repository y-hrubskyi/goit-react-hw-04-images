import { Component } from 'react';

import { Modal } from 'components/Modal/Modal';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { isOpenModal } = this.state;
    const { smallImg, largeImg, tags } = this.props;

    return (
      <>
        <Item>
          <Image src={smallImg} alt={tags} onClick={this.toggleModal} />
        </Item>
        {isOpenModal && (
          <Modal
            img={largeImg}
            tags={tags}
            onClose={this.toggleModal}
            isOpen={isOpenModal}
          />
        )}
      </>
    );
  }
}
