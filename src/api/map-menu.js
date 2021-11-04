export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    menu: links = [],
  } = menu;
  const srcImg = menu.logo && menu.logo.url ? menu.logo.url : '';
  return {
    newTab,
    text,
    link,
    srcImage: srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      url: link = '',
      open_in_new_tab: newTab = false,
      link_text: children = '',
    } = item;
    return { link, newTab, children };
  });
};
