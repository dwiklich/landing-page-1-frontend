import React, { useEffect, useState } from 'react';
import * as Styled from './styles';

import { Base } from '../Base';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import { mapData } from '../../api/map-data';
import { mockBase } from '../Base/mock';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

function Home() {
  // const GlobalState = React.useContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/pages/?slug=landing-page',
        );
        const json = await data.json();
        const pageData = mapData(json);
        setData((prevState) => pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };
    load();
  }, []);
  console.log('data:', data);
  if (!data) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  if (data) {
    const { menu, sections, footerHtml, slug } = data;
    const { text, srcImage, link, links } = menu;
    console.log('menu', menu);
    return (
      <Base
        links={links}
        logoData={{ text, srcImage, link, links }}
        footerHtml={footerHtml}
      >
        {sections.map((section, index) => {
          const { component, sectionId } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return (
              <GridTwoColumns key={key} sectionId={sectionId} {...section} />
            );
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} sectionId={sectionId} {...section} />;
          }

          if (component === 'section.section-grid') {
            if (section.grid.imageGrid.length === 0) {
              return (
                <GridText
                  key={key}
                  {...section}
                  sectionId={sectionId}
                  grid={section.grid.textGrid}
                />
              );
            }
            if (section.grid.textGrid.length === 0) {
              return (
                <GridImage
                  key={key}
                  sectionId={sectionId}
                  {...section}
                  grid={section.grid.imageGrid}
                />
              );
            }
          }
        })}
      </Base>
    );
  }
}

export default Home;
