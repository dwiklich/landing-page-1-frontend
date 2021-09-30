import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    expect(screen.getByText('texto')).toBeInTheDocument();
  });

  it('should render small font size', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    expect(screen.getByText('texto')).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match inline snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        texto
      </div>
    `);
  });
});
