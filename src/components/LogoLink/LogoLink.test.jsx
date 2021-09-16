import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text="texto" link="#target" />);

    const heading = screen.getByRole('heading');
    expect(heading.firstChild).toHaveAttribute('href', '#target');
    expect(heading.firstChild).toHaveTextContent('texto');

    expect(screen.getByRole('link', { name: 'texto' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'texto' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink text="texto da imagem" link="#target" srcImage={'image.jpg'} />,
    );

    expect(
      screen.getByRole('img', { name: 'texto da imagem' }),
    ).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text="texto da imagem" link="#target" srcImage={'image.jpg'} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
