import type { Meta, StoryObj } from '@storybook/angular';
import { InputErrorComponent } from './input-error.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
 
const meta: Meta<InputErrorComponent> = {
  component: InputErrorComponent,
  title: 'Forms/InputErrorComponent',
};
export default meta;
type Story = StoryObj<InputErrorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/zein works!/gi)).toBeTruthy();
  },
};
