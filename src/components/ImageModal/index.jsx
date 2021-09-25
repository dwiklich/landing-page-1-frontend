import P from 'prop-types';

import * as Styled from './styles';

export const ImageModal = ({ modal, imageModal, setModal }) => {
  return (
    <>
      <Styled.Container modal={modal} aria-label="modal">
        <Styled.Content>
          <Styled.ButtonClose
            aria-label="modal-button-close"
            onClick={() => {
              setModal();
            }}
          >
            &times;
          </Styled.ButtonClose>
          <Styled.Image
            src={imageModal[0]}
            alt={imageModal[1]}
            aria-label="image-modal"
          />
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

ImageModal.propTypes = {
  modal: P.bool,
  setModal: P.func,
  imageModal: P.array.isRequired,
};
