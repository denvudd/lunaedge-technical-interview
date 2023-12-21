import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { InputDescription, InputError, Label } from '../Input/Input';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="text-center font-medium">Default</div>
      <Select
        options={[
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ]}
      />
    </div>
  </div>
);

export const Multiple = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="text-center font-medium">Multiple</div>
      <Select
        isMulti
        options={[
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ]}
      />
    </div>
  </div>
);

export const Searchable = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="text-center font-medium">Searchable</div>
      <Select
        isSearchable
        options={[
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ]}
      />
    </div>
  </div>
);

export const SearchableAndMultiple = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="text-center font-medium">Searchable and multiple</div>
      <Select
        isMulti
        isSearchable
        options={[
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ]}
      />
    </div>
  </div>
);

export const SelectSize = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="grid w-full grid-cols-3 gap-8">
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Small</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Select
              isSearchable
              isMulti
              options={[
                {
                  label: 'Option 1',
                  value: 1,
                },
                {
                  label: 'Option 2',
                  value: 2,
                },
                {
                  label: 'Option 3',
                  value: 3,
                },
              ]}
              size="sm"
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Medium (default)</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Select
              isSearchable
              isMulti
              options={[
                {
                  label: 'Option 1',
                  value: 1,
                },
                {
                  label: 'Option 2',
                  value: 2,
                },
                {
                  label: 'Option 3',
                  value: 3,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Large</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Select
              isSearchable
              isMulti
              options={[
                {
                  label: 'Option 1',
                  value: 1,
                },
                {
                  label: 'Option 2',
                  value: 2,
                },
                {
                  label: 'Option 3',
                  value: 3,
                },
              ]}
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SelectAlignment = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="grid w-full grid-cols-3 gap-8">
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Left</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Select
              options={[
                {
                  label: 'Option 1',
                  value: 1,
                },
                {
                  label: 'Option 2',
                  value: 2,
                },
                {
                  label: 'Option 3',
                  value: 3,
                },
              ]}
              align="left"
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Full Width (default)</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Select
              options={[
                {
                  label: 'Option 1',
                  value: 1,
                },
                {
                  label: 'Option 2',
                  value: 2,
                },
                {
                  label: 'Option 3',
                  value: 3,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="text-center font-medium">Right</div>
        <div className="flex w-full flex-col gap-2">
          <div className="block">
            <Select
              options={[
                {
                  label: 'Option 1',
                  value: 1,
                },
                {
                  label: 'Option 2',
                  value: 2,
                },
                {
                  label: 'Option 3',
                  value: 3,
                },
              ]}
              align="right"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const WithScroll = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="text-center font-medium">With Scroll</div>
      <Select
        isSearchable
        options={[
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
          {
            label: 'Option 4',
            value: 4,
          },
          {
            label: 'Option 5',
            value: 5,
          },
          {
            label: 'Option 6',
            value: 6,
          },
          {
            label: 'Option 7',
            value: 7,
          },
          {
            label: 'Option 8',
            value: 8,
          },
          {
            label: 'Option 9',
            value: 9,
          },
          {
            label: 'Option 10',
            value: 10,
          },
          {
            label: 'Option 11',
            value: 11,
          },
          {
            label: 'Option 12',
            value: 12,
          },
          {
            label: 'Option 13',
            value: 13,
          },
          {
            label: 'Option 13',
            value: 13,
          },
          {
            label: 'Option 14',
            value: 14,
          },
          {
            label: 'Option 15',
            value: 15,
          },
        ]}
      />
    </div>
  </div>
);

export const Loading = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="text-center font-medium">Loading</div>
      <Select
        options={[
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ]}
        isLoading
      />
    </div>
  </div>
);

export const Disabled = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="text-center font-medium">Disabled</div>
      <Select
        options={[
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ]}
        disabled
      />
    </div>
  </div>
);

export const WithLabelAndDescription = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="text-center font-medium">With Label and Description</div>
      <div className="flex flex-col gap-2">
        <Label isRequired={false}>Label</Label>
        <Select
          options={[
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
            {
              label: 'Option 3',
              value: 3,
            },
          ]}
        />
        <InputDescription>Text help.</InputDescription>
      </div>
    </div>
  </div>
);

export const WithError = () => (
  <div className="container mt-10 flex flex-col justify-center gap-8">
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="text-center font-medium">With Error</div>
      <div className="flex flex-col gap-2">
        <Select
          options={[
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
            {
              label: 'Option 3',
              value: 3,
            },
          ]}
          isError
        />
        <InputError>Select error.</InputError>
      </div>
    </div>
  </div>
);
