/* eslint-disable jsx-a11y/anchor-is-valid */
import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SelectVariant = () => (
  <div className="container mt-10 flex justify-center">
    <div className="grid w-full grid-cols-3 gap-4">
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Default</span>
        <div className="block">
          <Button>Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Secondary</span>
        <div className="block">
          <Button variant="secondary">Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Outline</span>
        <div className="block">
          <Button variant="outline">Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Text</span>
        <div className="block">
          <Button variant="text">Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Destructive</span>
        <div className="block">
          <Button variant="destructive">Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Ghost</span>
        <div className="block">
          <Button variant="ghost">Button</Button>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Disabled Default</span>
        <div className="block">
          <Button disabled>Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Disabled Secondary</span>
        <div className="block">
          <Button variant="secondary" disabled>
            Button
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Disabled Outline</span>
        <div className="block">
          <Button variant="outline" disabled>
            Button
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Disabled Text</span>
        <div className="block">
          <Button variant="text" disabled>
            Button
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Disabled Destructive</span>
        <div className="block">
          <Button variant="destructive" disabled>
            Button
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Disabled Ghost</span>
        <div className="block">
          <Button variant="ghost" disabled>
            Button
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export const SelectSizes = () => (
  <div className="container mt-10 flex justify-center">
    <div className="grid w-full grid-cols-3 gap-4">
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Extra Small</span>
        <div className="block">
          <Button size="xs">Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Small</span>
        <div className="block">
          <Button size="sm">Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Base</span>
        <div className="block">
          <Button>Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Large</span>
        <div className="block">
          <Button size="lg">Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Extra Large</span>
        <div className="block">
          <Button size="xl">Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Icon</span>
        <div className="block">
          <Button size="icon">
            <Mail />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export const Loading = () => (
  <div className="container mt-10 flex justify-center">
    <div className="grid w-full grid-cols-3 gap-4">
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Default</span>
        <div className="block">
          <Button isLoading>Button</Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Secondary</span>
        <div className="block">
          <Button variant="secondary" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Outline</span>
        <div className="block">
          <Button variant="outline" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Text</span>
        <div className="block">
          <Button variant="text" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Destructive</span>
        <div className="block">
          <Button variant="destructive" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Ghost</span>
        <div className="block">
          <Button variant="ghost" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <span className="w-full font-medium">Icon</span>
        <div className="block">
          <Button size="icon" isLoading>
            <Mail />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export const AsChild = () => (
  <div className="container mt-10 flex justify-center">
    <Button asChild>
      <div>Child</div>
    </Button>
  </div>
);

export const StyledWithVariants = () => (
  <div className="container mt-10 flex justify-center">
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
      className={cn(
        buttonVariants({
          variant: 'text',
        }),
      )}
    >
      Link as child
    </a>
  </div>
);

export const StylingOverides = () => (
  <div className="container mt-10 flex justify-center">
    <Button className="rounded-xl bg-black px-8 py-6 text-white hover:bg-white hover:text-black">
      Button
    </Button>
  </div>
);
