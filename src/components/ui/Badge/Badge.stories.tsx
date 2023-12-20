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
  <div className="container flex flex-col gap-8 justify-center mt-10">
    <div className="grid grid-cols-6 gap-8 w-full">
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">Default</div>
        <div className="w-full flex justify-center flex-col gap-2">
          <div className="block text-center">
            <Badge>Badge</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">Destructive</div>
        <div className="w-full flex justify-center flex-col gap-2">
          <div className="block text-center">
            <Badge variant="destructive">Badge</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">Warning</div>
        <div className="w-full flex justify-center flex-col gap-2">
          <div className="block text-center">
            <Badge variant="warning">Badge</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">Success</div>
        <div className="w-full flex justify-center flex-col gap-2">
          <div className="block text-center">
            <Badge variant="success">Badge</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">Info</div>
        <div className="w-full flex justify-center flex-col gap-2">
          <div className="block text-center">
            <Badge variant="info">Badge</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">Outline</div>
        <div className="w-full flex justify-center flex-col gap-2">
          <div className="block text-center">
            <Badge variant="outline">Badge</Badge>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const StylingOverrides = () => (
  <div className="container flex justify-center mt-10">
    <Badge className="bg-orange-300 placeholder:text-white border-2 font-medium border-black">
      Badge
    </Badge>
  </div>
);
