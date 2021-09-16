import { screen } from '@testing-library/react';
// import { screen } from '@testing-library/dom';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render home', () => {
    const { debug } = renderTheme(<Home />);
  });

  test('renders learn react link', () => {
    const { debug } = renderTheme(<Home />);
  });
});
