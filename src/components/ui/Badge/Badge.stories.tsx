import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const SelectVariant = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="grid w-full grid-cols-6 gap-8">
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Default</div>
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="block text-center">
            <Badge>Badge</Badge>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Destructive</div>
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="block text-center">
            <Badge variant="destructive">Badge</Badge>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Warning</div>
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="block text-center">
            <Badge variant="warning">Badge</Badge>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Success</div>
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="block text-center">
            <Badge variant="success">Badge</Badge>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Info</div>
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="block text-center">
            <Badge variant="info">Badge</Badge>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Outline</div>
        <div className="flex w-full flex-col justify-center gap-2">
          <div className="block text-center">
            <Badge variant="outline">Badge</Badge>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const StylingOverrides = () => (
  <div className="container mt-10 flex justify-center">
    <Badge className="border-2 border-black bg-orange-300 font-medium placeholder:text-white">
      Badge
    </Badge>
  </div>
);
