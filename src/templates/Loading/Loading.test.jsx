import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Loading } from '.';

describe('<Loading />', () => {
  it('should render', () => {
    renderTheme(<Loading>texto</Loading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
