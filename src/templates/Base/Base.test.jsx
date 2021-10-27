import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base>texto</Base>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
