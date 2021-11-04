export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
    image: { url: srcImg = '' } = '',
  } = section;

  return {
    component,
    title,
    text,
    background,
    sectionId,
    srcImg,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;
  return {
    component,
    title,
    html,
    sectionId,
    background,
  };
};

export const mapSectionGrid = (section = {}) => {
  const {
    __component: component = '',

    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
    image_grid: imageGrid = [],
    text_grid: textGrid = [],
  } = section;
  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: {
      imageGrid: mapGridImage(imageGrid),
      textGrid: mapGridText(textGrid),
    },
  };
};

const mapGridImage = (grid) => {
  return grid.map((element) => {
    const { image: { url: srcImg = '', alternativeText: altText = '' } = '' } =
      element;
    return { srcImg, altText };
  });
};

const mapGridText = (grid) => {
  return grid.map((element) => {
    const { title = '', description = '' } = element;
    return { title, description };
  });
};
