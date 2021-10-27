import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer footerHtml="<h1>texto</h1>" />);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer footerHtml="<h1>texto</h1>" />);
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: 2.4rem;
      }

      .c2 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      .c0 {
        text-align: center;
        border-top: 0.2rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      .c0 .c3 {
        font-size: 1.6rem;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1 c2"
          >
            <div
              class="c3 c4"
            >
              <h1>
                texto
              </h1>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
