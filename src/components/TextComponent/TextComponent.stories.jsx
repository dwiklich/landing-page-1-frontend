import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum, dolor sit amet consectetur adipisicing
    elit. Recusandae sequi delectus doloremque. Omnis
    sapiente quis aliquam amet deserunt sequi sed
    dignissimos, non assumenda quasi reprehenderit
    maxime odio corrupti commodi aperiam.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
