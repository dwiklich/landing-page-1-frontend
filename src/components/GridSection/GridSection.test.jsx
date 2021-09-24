import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { GridSection } from '.';
import mock from './mock';

describe('<GridSection />', () => {
  it('should render without background', () => {
    const { container } = renderTheme(
      <GridSection
        title={mock.title}
        description={mock.description}
        grid={mock.grid}
      />,
    );
    expect(container.firstChild).not.toHaveProperty('background');
  });

  it('should render with background', () => {
    const { container } = renderTheme(<GridSection {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
