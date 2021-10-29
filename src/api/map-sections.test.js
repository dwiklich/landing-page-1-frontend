import {
  mapSectionContent,
  mapSectionGrid,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';

import pageFakeData from './dados.json';

describe('map-sections map', () => {
  it('should return array empty', () => {
    const sections = mapSections();
    expect(sections).toEqual([]);
  });

  it('should return sections with correct data', () => {
    const sections = mapSections(pageFakeData[0].sections);
    expect(sections[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);

    expect(withNoTextOrImageGrid).toEqual([
      {
        background: false,
        component: 'section.section-grid',
        description: '',
        imageGrid: [],
        sectionId: '',
        textGrid: [],
        title: '',
      },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });
});

describe('map-section two columns', () => {
  it('should map sections two columns with no data', () => {
    const sections = mapSectionTwoColumns();

    expect(sections.component).toBe('');
    expect(sections.title).toBe('');
    expect(sections.text).toBe('');
    expect(sections.background).toBe(false);
    expect(sections.sectionId).toBe('');
    expect(sections.srcImg).toBe('');
  });

  it('should map sections two columns', () => {
    const sections = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'January brings us Firefox 85',
      description: 'Long description text',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        url: 'image.svg',
      },
    });

    expect(sections.component).toBe('section.section-two-columns');
    expect(sections.title).toBe('January brings us Firefox 85');
    expect(sections.text).toBe('Long description text');
    expect(sections.background).toBe(true);
    expect(sections.sectionId).toBe('home');
    expect(sections.srcImg).toBe('image.svg');
  });
});

describe('map-section content', () => {
  it('should map sections content with no data', () => {
    const sections = mapSectionContent();

    expect(sections.component).toBe('');
    expect(sections.title).toBe('');
    expect(sections.html).toBe('');
    expect(sections.background).toBe(false);
  });

  it('should map sections column', () => {
    const sections = mapSectionContent({
      __component: 'section.section-content',
      title: 'news coverage and some surprises',
      content:
        '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',

      metadata: {
        background: false,
        section_id: 'intro',
      },
    });

    expect(sections.title).toBe('news coverage and some surprises');
    expect(sections.html).toBe(
      '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
    );
    expect(sections.background).toBe(false);
    expect(sections.sectionId).toBe('intro');
  });
});

describe('map-section grid', () => {
  it('should map sections content with no data', () => {
    const sections = mapSectionGrid();

    expect(sections.title).toBe('');
    expect(sections.description).toBe('');
    expect(sections.background).toBe(false);
    expect(sections.sectionId).toBe('');
    expect(sections.imageGrid).toEqual([]);
    expect(sections.textGrid).toEqual([]);
  });

  it('should map sections column image', () => {
    const sections = mapSectionGrid({
      __component: 'section.section-grid',
      description:
        'Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
      title: 'Gallery',
      metadata: {
        background: false,
        section_id: 'gallery',
      },
      text_grid: [],
      image_grid: [
        {
          alternativeText: 'Uma paisagem com céu claro e montanhas bonitas',
          url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_6a2049d13a.jpg',
        },
      ],
    });

    expect(sections.title).toBe('Gallery');
    expect(sections.description).toBe(
      'Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    );
    expect(sections.background).toBe(false);
    expect(sections.sectionId).toBe('gallery');
    expect(sections.textGrid).toEqual([]);

    expect(sections.imageGrid).toEqual([
      {
        altText: 'Uma paisagem com céu claro e montanhas bonitas',
        srcImg:
          'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_6a2049d13a.jpg',
      },
    ]);
  });

  it('should map sections column text', () => {
    const sections = mapSectionGrid({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056176',
      description:
        ' Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio',
      title: 'Outra grid',
      text_grid: [
        {
          _id: '602fdf2d540c00269e056180',
          title: 'Teste 1',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '602fdf2d540c00269e056180',
        },
        {
          _id: '602fdf2d540c00269e056181',
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '602fdf2d540c00269e056181',
        },
      ],
    });

    expect(sections.title).toBe('Outra grid');
    expect(sections.description).toBe(
      ' Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio',
    );
    expect(sections.background).toBe(false);
    expect(sections.imageGrid).toEqual([]);
    expect(sections.textGrid).toEqual([
      {
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        title: 'Teste 1',
      },
      {
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        title: 'Teste 2',
      },
    ]);
  });

  it('should map sections content no value altText and description', () => {
    const sections = mapSectionGrid({
      __component: 'section.section-grid',
      image_grid: [{ url: 'a.svg' }],
      text_grid: [{ title: 'Teste 1' }],
    });

    expect(sections.imageGrid).toEqual([
      {
        altText: '',
        srcImg: 'a.svg',
      },
    ]);
    expect(sections.textGrid).toEqual([
      {
        description: '',
        title: 'Teste 1',
      },
    ]);
  });
  it('should map sections content no value url and title', () => {
    const sections = mapSectionGrid({
      __component: 'section.section-grid',
      image_grid: [{ alternativeText: 'texto alt do html' }],
      text_grid: [{ description: 'descricao do grid text' }],
    });

    expect(sections.imageGrid).toEqual([
      {
        altText: 'texto alt do html',
        srcImg: '',
      },
    ]);
    expect(sections.textGrid).toEqual([
      {
        description: 'descricao do grid text',
        title: '',
      },
    ]);
  });
});
