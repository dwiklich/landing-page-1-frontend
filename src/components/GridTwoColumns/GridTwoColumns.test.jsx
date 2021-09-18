import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';

describe('<GridTwoColumns />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumns>texto</GridTwoColumns>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
