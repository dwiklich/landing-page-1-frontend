import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,

  args: {
    children: 'o texto esta escuro',
  },
  argTypes: {
    children: { type: 'number' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'o texto esta claro',
  colorDark: false,
};
