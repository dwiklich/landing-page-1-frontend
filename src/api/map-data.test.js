import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu).toEqual({
      link: '',
      links: [],
      newTab: false,
      srcImg: '',
      text: '',
    });
  });

  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>Hello</p>',
        slug: 'slug',
        title: 'title',
        sections: [1, 2, 4],
        menu: {
          open_in_new_tab: false,
          _id: '602fdf30540c00269e0561ae',
          logo_text: 'Landing Page',
          logo_link: '#home',
          menu: [
            {
              open_in_new_tab: false,
              link_text: 'intro',
              url: '#intro',
            },
            {
              open_in_new_tab: false,
              link_text: 'grid-one',
              url: '#grid-one',
            },
          ],
          logo: {
            alternativeText: 'Landing Page Logo',
            url: 'a.svg',
          },
        },
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('<p>Hello</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
    expect(pagesData.sections).toEqual([1, 2, 4]);
    expect(pagesData.menu).toEqual({
      link: '#home',
      links: [
        {
          children: 'intro',
          link: '#intro',
          newTab: false,
        },
        {
          children: 'grid-one',
          link: '#grid-one',
          newTab: false,
        },
      ],
      newTab: false,
      srcImg: 'a.svg',
      text: 'Landing Page',
    });
  });
});
