import { cn } from '@/lib/utils';
import { Button, ButtonProps, buttonVariants } from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SelectVariant = () => (
  <div className="container flex justify-center mt-10">
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Default</span>
        <div className="block">
          <Button>Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Secondary</span>
        <div className="block">
          <Button variant="secondary">Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Outline</span>
        <div className="block">
          <Button variant="outline">Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Text</span>
        <div className="block">
          <Button variant="text">Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Destructive</span>
        <div className="block">
          <Button variant="destructive">Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Ghost</span>
        <div className="block">
          <Button variant="ghost">Button</Button>
        </div>
      </div>
    </div>
  </div>
);

export const SelectSizes = () => (
  <div className="container flex justify-center mt-10">
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Extra Small</span>
        <div className="block">
          <Button size="xs">Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Small</span>
        <div className="block">
          <Button size="sm">Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Base</span>
        <div className="block">
          <Button>Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Large</span>
        <div className="block">
          <Button size="lg">Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Extra Large</span>
        <div className="block">
          <Button size="xl">Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
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
  <div className="container flex justify-center mt-10">
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Default</span>
        <div className="block">
          <Button isLoading>Button</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Secondary</span>
        <div className="block">
          <Button variant="secondary" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Outline</span>
        <div className="block">
          <Button variant="outline" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Text</span>
        <div className="block">
          <Button variant="text" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Destructive</span>
        <div className="block">
          <Button variant="destructive" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <span className="w-full font-medium">Ghost</span>
        <div className="block">
          <Button variant="ghost" isLoading>
            Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
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
  <div className="container flex justify-center mt-10">
    <Button asChild>
      <div>Child</div>
    </Button>
  </div>
);

export const StyledWithVariants = () => (
  <div className="container flex justify-center mt-10">
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
  <div className="container flex justify-center mt-10">
    <Button className="bg-black text-white hover:bg-white hover:text-black px-8 py-6 rounded-xl">
      Button
    </Button>
  </div>
);
