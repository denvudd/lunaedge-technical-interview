import { Input, InputDescription, InputError, Label } from './Input';
import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const SelectVariant = () => (
  <div className="container flex flex-col gap-8 justify-center mt-10">
    <div className="grid grid-cols-3 gap-8 w-full">
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">Default</div>
        <div className="w-full flex flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">Password</div>
        <div className="w-full flex flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" type="password" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">File</div>
        <div className="w-full flex flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" type="file" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">With Icon</div>
        <div className="w-full flex flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="w-5 h-5" />} />
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">With Error</div>
        <div className="w-full flex flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="w-5 h-5" />} isError />
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">Disabled</div>
        <div className="w-full flex flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="w-5 h-5" />} disabled />
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">With Label</div>
        <div className="w-full flex flex-col gap-2">
          <Label>Label</Label>
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="w-5 h-5" />} isError />
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">With Description</div>
        <div className="w-full flex flex-col gap-2">
          <Label>Label</Label>
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="w-5 h-5" />} />
          </div>
          <InputDescription>Input description here.</InputDescription>
        </div>
      </div>
      <div className="flex gap-6 flex-col col-span-1">
        <div className="font-medium text-center">With Error Message</div>
        <div className="w-full flex flex-col gap-2">
          <Label>Label</Label>
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="w-5 h-5" />} />
          </div>
          <InputError>Input description here.</InputError>
        </div>
      </div>
    </div>
  </div>
);

export const StylingOverrides = () => (
  <div className="container flex justify-center mt-10">
    <div className="w-full flex flex-col gap-2">
      <Label>Label</Label>
      <div className="block">
        <Input
          placeholder="Placeholder"
          className="bg-red-300 placeholder:text-white border-2 font-medium border-black"
        />
      </div>
    </div>
  </div>
);
