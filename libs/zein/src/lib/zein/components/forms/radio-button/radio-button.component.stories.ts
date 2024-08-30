import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  component: RadioButtonComponent,
  title: 'Forms/RadioButtonComponent',
};
export default meta;

type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'options',
    value: 'option1',
  },
};

export const Checked: Story = {
  args: {
    label: 'Option 2',
    name: 'options',
    value: 'option2',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    name: 'options',
    value: 'option3',
    disabled: true,
  },
};
