import P from 'prop-types';

import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';

export const GridTwoColumns = ({ loadData }) => {
  return (
    <>
      <SectionBackground background={loadData.metaData.background}>
        <SectionContainer>
          <Styled.Container>
            <div>
              <Heading uppercase colorDark={false}>
                {loadData.title}
              </Heading>
              <TextComponent>{loadData.description}</TextComponent>
            </div>
            <img src={loadData.image} />
          </Styled.Container>
        </SectionContainer>
      </SectionBackground>
    </>
  );
};

GridTwoColumns.propTypes = {
  loadData: P.shape({
    title: P.string.isRequired,
    description: P.string.isRequired,
    image: P.string.isRequired,
    metaData: {
      name: P.string.isRequired,
      section_id: P.string.isRequired,
      background: P.bool.isRequired,
    },
  }).isRequired,
};
