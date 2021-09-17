import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>texto</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
