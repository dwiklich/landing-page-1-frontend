import P from 'prop-types';

import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <GoTop />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
    </>
  );
};

Base.propTypes = {
  links: Menu.propTypes.links,
  logoData: Menu.propTypes.logoData,
  footerHtml: Footer.propTypes.footerHtml,
  children: P.node.isRequired,
};
