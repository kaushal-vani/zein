import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Forms/InputComponent',
};
export default meta;

type Story = StoryObj<InputComponent>;

export const TextInput: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    value: '',
  },
};

export const DisabledInput: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    value: '',
    disabled: true,
  },
};
