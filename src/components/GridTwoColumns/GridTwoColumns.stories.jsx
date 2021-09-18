import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    loadData: {
      title: 'titulo um pouco grande',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus, quaerat totam magni quidem dolor ipsam laboriosam animi facere, quia odit! Consectetur maiores odio fuga repellendus unde nihil, quidem exercitationem!',
      image: 'https://ey5me.csb.app/happy.svg',
      metaData: {
        name: 'metaDataa',
        section_id: 'section_id111',
        background: true,
      },
    },
  },
  // argTypes: {
  //   children: { type: 'string' },
  // },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
