import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<GridContent />', () => {
  it('should render grid content background false', () => {
    const { container } = renderTheme(
      <GridContent title={mock.title} html={mock.html} />,
    );
    expect(container.firstChild).not.toHaveProperty('background');
  });

  it('should render', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
