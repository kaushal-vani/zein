import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Forms/ButtonComponent',
  argTypes: {
    label: { control: 'text' },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'danger', 'success'],
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
    },
    outline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon: { control: 'text' },
    loading: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    color: 'primary',
    size: 'medium',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    color: 'success',
    icon: 'check_circle',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    color: 'secondary',
    disabled: true,
    size: 'small',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    color: 'danger',
    loading: true,
    size: 'medium',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    color: 'primary',
    outline: true,
    size: 'large',
  },
};

export const Heading: Story = {
  args: {
    label: 'Zein Works!',
    color: 'primary',
    size: 'medium',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/zein works!/gi)).toBeTruthy();
  },
};
