import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.mediumGray};
    transition: all 300ms ease-in-out;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      /* display: ${visible ? 'flex' : 'none'}; */

      visibility: hidden;
      opacity: 0;

      ${visible && menuVisible(theme)}

      height: 100vh;

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      /* flex-direction: column; */
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    height: 4rem;
    width: 4rem;
    background: ${visible ? theme.colors.white : theme.colors.primaryColor};
    color: ${visible ? theme.colors.primaryColor : theme.colors.white};
    border: none;
    border-radius: 0.5rem;
    display: none;

    @media ${theme.media.lteMedium} {
      ${visible && menuVisible(theme)}

      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  `}
`;
