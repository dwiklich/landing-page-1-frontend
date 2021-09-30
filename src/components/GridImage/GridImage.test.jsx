import { screen, fireEvent } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import mock from './mock';

describe('<GridImage />', () => {
  it('should setModal true with click element image', () => {
    const { container } = renderTheme(<GridImage {...mock} />);

    const image = screen.getByRole('img', { name: 'Teste 1' });

    fireEvent.click(image);
    expect(image).toHaveProperty(
      'src',
      'https://source.unsplash.com/random/800x800?r=1',
    );
  });

  it('should render not background', () => {
    const { container } = renderTheme(
      <GridImage
        title={mock.title}
        description={mock.description}
        grid={mock.grid}
      />,
    );

    expect(container).toBeInTheDocument();
  });
  it('should render', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toBeInTheDocument();
  });
  it('should Open and Close image of grid ', () => {
    const { container } = renderTheme(<GridImage {...mock} />);

    const image = screen.getByRole('img', { name: 'Teste 5' });
    const modal = screen.getByLabelText('modal');
    const button = screen.getByLabelText('modal-button-close');

    fireEvent.click(image);
    expect(modal).toHaveStyleRule('display', 'block');

    fireEvent.click(button);
    expect(modal).toHaveStyleRule('display', 'none');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
