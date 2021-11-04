import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme, srcImage }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    & > img {
      min-height: 2rem;
      max-height: 3rem;
    }
  `}
`;
