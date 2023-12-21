import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="grid w-full grid-cols-3 gap-8">
      <div className="col-span-1 flex flex-col gap-6">
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Modal content="Example of content." title="Example of title." />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const WithCustomFooter = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="grid w-full grid-cols-3 gap-8">
      <div className="col-span-1 flex flex-col gap-6">
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Modal
              content="Example of content."
              title="Example of title."
              footer={<div className="px-8 py-4">I am custom footer here.</div>}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const WithCustomContent = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="grid w-full grid-cols-3 gap-8">
      <div className="col-span-1 flex flex-col gap-6">
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Modal
              content={
                <div className="flex items-center justify-center gap-4">
                  <div className="h-24 px-2">I am custom content</div>
                  <div className="h-24 px-2">You can put anything here</div>
                </div>
              }
              title="Example of title."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const WithCustomTitle = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="grid w-full grid-cols-3 gap-8">
      <div className="col-span-1 flex flex-col gap-6">
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Modal
              title={<h2 className="text-red-700 underline">You can customize me!</h2>}
              content="Example of content."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
