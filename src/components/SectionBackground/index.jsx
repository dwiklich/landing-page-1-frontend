import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';

import * as Styled from './styles';

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  return (
    <>
      <Styled.Container background={background} id={sectionId}>
        <SectionContainer>{children}</SectionContainer>
      </Styled.Container>
    </>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  sectionId: P.string,
  background: P.bool,
};
