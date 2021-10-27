import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionComponent } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.2rem solid ${theme.colors.mediumGray};
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }

    & ${SectionComponent} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${TextComponent} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
