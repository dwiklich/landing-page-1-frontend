import { Loading } from '.';

export default {
  title: 'Loading',
  component: Loading,
  args: {},
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Loading {...args} />
    </div>
  );
};
