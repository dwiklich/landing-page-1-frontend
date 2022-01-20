import P from 'prop-types';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Heading } from '../Heading';
import { ImageModal } from '../ImageModal';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

import * as Styled from './styles';

export const GridImage = ({
  background = false,
  title,
  description,
  grid,
  sectionId = '',
}) => {
  const [imageModal, setImageModal] = useState([]);
  const [modal, setModal] = useState(true);
  const setterModal = () => {
    setModal(true);
  };

  return (
    <>
      <SectionBackground background={background} sectionId={sectionId}>
        <Styled.Container>
          <Heading size="huge" uppercase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{description}</TextComponent>
          <Styled.Grid>
            {grid.map((element) => (
              <Styled.GridElement key={element.srcImg}>
                <Styled.Image
                  src={element.srcImg}
                  alt={element.altText}
                  onClick={() => {
                    setModal(false);
                    setImageModal((prevState) => [
                      element.srcImg,
                      element.altText,
                    ]);
                  }}
                />
              </Styled.GridElement>
            ))}
          </Styled.Grid>
          <ImageModal
            modal={modal}
            setModal={setterModal}
            imageModal={imageModal}
          />
        </Styled.Container>
      </SectionBackground>
    </>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  sectionId: P.string,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
};
