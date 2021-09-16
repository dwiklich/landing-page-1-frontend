import { screen } from '@testing-library/dom';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render with correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size={'small'}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size={'medium'}>texto</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size={'big'}>texto</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size={'huge'}>texto</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should render with correct font-size wheen using mobile ', () => {
    renderTheme(<Heading size={'huge'}>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with text uppercase', () => {
    renderTheme(<Heading uppercase>texto</Heading>);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({ 'text-transform': 'uppercase' });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>texto</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
