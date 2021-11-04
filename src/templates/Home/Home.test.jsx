import { screen } from '@testing-library/react';

// import { screen } from '@testing-library/dom';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { mockBase } from '../Base/mock';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home {...mockBase} />);
  });
});
