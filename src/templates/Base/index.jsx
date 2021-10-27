import P from 'prop-types';

import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
    </>
  );
};

Base.propTypes = {
  links: Menu.propTypes.links,
  logoData: Menu.propTypes.logoData,
  footerHtml: Footer.propTypes.html,
  children: P.node.isRequired,
};
