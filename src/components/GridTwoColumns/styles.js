import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    > img {
      width: 50rem;
    }
  `}
`;
