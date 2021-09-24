import { screen, fireEvent } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import linksMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';

const logoData = {
  text: 'Logo',
  link: '#target',
};
describe('<Menu />', () => {
  it('should render Logo and Main menu', () => {
    const { container } = renderTheme(
      <Menu logoData={logoData} links={linksMock}></Menu>,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render menu of mobile and render OpenIcon the screen', () => {
    const { container } = renderTheme(
      <Menu logoData={logoData} links={linksMock}></Menu>,
    );
    const menuButton = screen.getByLabelText('Open/Close menu');
    expect(menuButton).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    expect(menuButton.firstChild).toHaveAttribute('aria-label', 'Open menu');
  });

  it('should show OpenIcon button in mobile resolution, after clicking the button would shows another button named CloseIcon', () => {
    const { container } = renderTheme(
      <Menu logoData={logoData} links={linksMock}></Menu>,
    );

    const menuButton = screen.getByLabelText('Open/Close menu');
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(menuButton.firstChild).toHaveAttribute('aria-label', 'Close menu');
  });

  it('should click Menu Container and not render the button in large resolution screen', () => {
    const { container } = renderTheme(
      <Menu logoData={logoData} links={linksMock}></Menu>,
    );
    const menuButton = screen.getByLabelText('Open/Close menu');

    const menuContainer = screen.getByRole('dialog', {
      name: 'Menu Container',
    });

    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule('visibility', undefined);

    expect(menuButton.firstChild).toHaveAttribute('aria-label', 'Close menu');
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData}></Menu>);
    const navigation = screen.getByRole('navigation');

    expect(navigation.firstChild).not.toBeInTheDocument();
    expect(navigation.querySelectorAll('a')).toHaveLength(0);

    expect(container).toMatchSnapshot();
  });
});
