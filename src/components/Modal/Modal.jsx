import { Component } from 'react';

import { Overlay, StyledModal } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDowm);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDowm);
    document.body.style.overflow = 'auto';
  }

  handleKeyDowm = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { img, tags } = this.props;

    return (
      <Overlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <img src={img} alt={tags} />
        </StyledModal>
      </Overlay>
    );
  }
}
