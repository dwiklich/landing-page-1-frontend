import { screen, fireEvent } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { ImageModal } from '.';
import mock from './mock';

describe('<ImageModal />', () => {
  it('should value of modal in true not render component of window', () => {
    let modalValue = true;

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
    expect(modal).toHaveStyleRule('display', 'none');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should modal false render component of window', () => {
    let modalValue = false;
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
    expect(modal).toHaveStyleRule('display', 'block');
    expect(container.firstChild).toMatchSnapshot();
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
