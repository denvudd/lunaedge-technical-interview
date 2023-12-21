import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';
import { Input, InputDescription, InputError, Label } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const SelectVariant = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="grid w-full grid-cols-3 gap-8">
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Default</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Password</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" type="password" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">File</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" type="file" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">With Icon</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="h-5 w-5" />} />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">With Error</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="h-5 w-5" />} isError />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Disabled</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="h-5 w-5" />} disabled />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">With Label</div>
        <div className="flex w-full flex-col gap-2">
          <Label>Label</Label>
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="h-5 w-5" />} isError />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">With Description</div>
        <div className="flex w-full flex-col gap-2">
          <Label>Label</Label>
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="h-5 w-5" />} />
          </div>
          <InputDescription>Input description here.</InputDescription>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">With Error Message</div>
        <div className="flex w-full flex-col gap-2">
          <Label>Label</Label>
          <div className="block">
            <Input placeholder="Placeholder" icon={<Mail className="h-5 w-5" />} />
          </div>
          <InputError>Input description here.</InputError>
        </div>
      </div>
    </div>
  </div>
);

export const StylingOverrides = () => (
  <div className="container mt-10 flex justify-center">
    <div className="flex w-full flex-col gap-2">
      <Label>Label</Label>
      <div className="block">
        <Input
          placeholder="Placeholder"
          className="border-2 border-black bg-red-300 font-medium placeholder:text-white"
        />
      </div>
    </div>
  </div>
);
