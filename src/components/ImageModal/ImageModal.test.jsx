import { screen, fireEvent } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { ImageModal } from '.';
import mock from './mock';

describe('<ImageModal />', () => {
  it('should modal false not render component of window', () => {
    let modalValue = false;

    const { container } = renderTheme(
      <ImageModal
        {...mock}
        modal={modalValue}
        setModal={() => {
          modalValue = false;
        }}
      />,
    );
    const button = screen.getByLabelText('modal-button-close');
    const modal = screen.getByLabelText('modal');

    fireEvent.click(button);
    expect(modal).toHaveStyleRule('display', 'block');
  });

  it('should modal true render component of window', () => {
    let modalValue = true;
    const { container } = renderTheme(
      <ImageModal
        modal={modalValue}
        setModal={() => {
          modalValue = false;
        }}
        {...mock}
      />,
    );
    const button = screen.getByLabelText('modal-button-close');
    const modal = screen.getByLabelText('modal');

    fireEvent.click(button);
    expect(modal).toHaveStyleRule('display', 'none');
  });

  it('should match snapshot', () => {
    let modalValue = true;
    const { container } = renderTheme(
      <ImageModal
        modal={modalValue}
        setModal={() => {
          modalValue = false;
        }}
        {...mock}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
