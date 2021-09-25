import { ImageModal } from '.';
import mock from './mock';

export default {
  title: 'ImageModal',
  component: ImageModal,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <ImageModal {...args} />
    </div>
  );
};
