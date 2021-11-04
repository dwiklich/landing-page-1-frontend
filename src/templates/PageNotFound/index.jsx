import P from 'prop-types';

import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <>
      <GridContent
        sectionId="error404"
        title="Erro 404"
        html="<p>OPS...página não encontrada</p> <a href='/'>voltar</a> "
      />
    </>
  );
};
