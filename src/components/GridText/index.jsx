import P from 'prop-types';

import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}) => {
  return (
    <>
      <SectionBackground background={background} sectionId={sectionId}>
        <Styled.Container>
          <Heading size="huge" uppercase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{description}</TextComponent>
          <Styled.Grid>
            {grid.map((element, index) => (
              <Styled.GridElement key={index}>
                <Heading size="medium" colorDark={!background} as="h3">
                  {element.title}
                </Heading>
                <TextComponent>{element.description}</TextComponent>
              </Styled.GridElement>
            ))}
          </Styled.Grid>
        </Styled.Container>
      </SectionBackground>
    </>
  );
};

GridText.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  sectionId: P.string,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
