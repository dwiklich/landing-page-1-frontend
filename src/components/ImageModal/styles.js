import styled, { css } from 'styled-components';

/* The Modal (background) */
export const Container = styled.div`
  ${({ theme, modal }) => css`
    display: ${modal ? 'none' : 'block'}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  `}
`;

/* Modal Content */
export const Content = styled.div`
  ${({ theme, modal }) => css`
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translateX(-50%) translateY(50%);

    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;

    @media ${theme.media.lteMedium} {
      width: 100%;
    }
  `}
`;

/* Modal Button */
export const ButtonClose = styled.span`
  ${({ theme, modal }) => css`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover,
    &:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    background-size: cover;
    width: 60%;
    border-radius: 1rem;
  `}
`;
