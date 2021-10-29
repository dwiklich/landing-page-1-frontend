import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-data', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.link).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.links).toEqual([]);
  });

  it('should map menu to match key and values required', () => {
    const menu = mapMenu({
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
        {
          open_in_new_tab: false,
          url: '#gallery',
          link_text: 'gallery',
        },
      ],
      logo: {
        alternativeText: 'Landing Page Logo',
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.link).toBe('#home');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.links[0]).toEqual({
      link: '#intro',
      children: 'intro',
      newTab: false,
    });
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks([
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
      {
        open_in_new_tab: false,
        url: '#gallery',
        link_text: 'gallery',
      },
    ]);

    expect(links).toEqual([
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
      {
        children: 'gallery',
        link: '#gallery',
        newTab: false,
      },
    ]);
  });
});
